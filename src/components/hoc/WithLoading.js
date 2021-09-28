import React, { useState } from "react";

function WithLoading(Component, loadingMessage) {
  return function WithLoadingComponent({ ...props }) {
    const [loading, setLoading] = useState(false);
    return (
      <>
        {loading && <h1>{loadingMessage}</h1>}
        <Component {...props} setLoading={(bool) => setLoading(bool)} />
      </>
    );
  };
}
export default WithLoading;
