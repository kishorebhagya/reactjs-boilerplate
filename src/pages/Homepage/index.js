import React, { useEffect } from "react";
import { Loader } from "../../components/common";
import { useAxios } from "../../hooks";
import ErrorPage from "../ErrorPage";

const options = {
  method: "get",
  url: "/users",
};

const HomePage = (props) => {
  const { loading, response, error } = useAxios(options);

  useEffect(() => {
    return () => {};
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    if (error) {
      return <ErrorPage error={error} />;
    } else {
      return (
        <React.Fragment>
          {response.map((v) => {
            return (
              <div key={v.id}>
                <div>{v.name}</div>
              </div>
            );
          })}
        </React.Fragment>
      );
    }
  }
};

export default HomePage;
