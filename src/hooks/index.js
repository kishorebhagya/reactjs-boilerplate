import { useEffect, useRef, useState } from "react";
import EventBus from "../utils/EventBus";
import { useAxios } from "./useAxios";
import { useFetch } from "./useFetch";
import useLoader from "./useLoader";

export { useAxios, useFetch, useLoader };

//Using Event Manager
export const useSpinner = () => {
  const setSpinner = (bool) => {
    EventBus.dispatch("isLoading", { loading: bool });
  };

  return [setSpinner];
};

export const useSample = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => setValue(e.target.value);

  return { value, setValue, onChange };
};
