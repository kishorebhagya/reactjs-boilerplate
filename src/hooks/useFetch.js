import { useEffect, useRef, useReducer } from "react";
import { useSpinner } from "./index";

export const useFetch = (url) => {
  const cache = useRef({});
  const [setSpinner] = useSpinner();

  const initialState = {
    status: false,
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: false };
      case "FETCHED":
        return { ...initialState, status: true, data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: true, error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      setSpinner(true);
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        } finally {
          setSpinner(false);
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
