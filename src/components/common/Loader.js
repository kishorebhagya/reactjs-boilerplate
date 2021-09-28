import React, { useEffect, useState } from "react";
import EventBus from "../../utils/EventBus";

const Loader = ({ type = "full" }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    EventBus.on("isLoading", (data) => {
      setLoading(data.loading);
    });
    return () => {
      EventBus.remove("isLoading");
    };
  }, []);
  return (
    <React.Fragment>
      {loading && (
        <div className={`lds-ellipsis-${type}-wrapper`}>
          <div className={`lds-ellipsis-${type}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Loader;
