import React, { useCallback, useEffect, useState, createContext } from "react";

const SpinnerContext = createContext();

export default SpinnerContext;

export function SpinnerProvider({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const showSpinner = useCallback(
    function (bool) {
      setLoading(bool);
    },
    [setLoading]
  );

  return (
    <SpinnerContext.Provider value={showSpinner}>
      {loading && <h1>Loading...</h1>}
      {children}
    </SpinnerContext.Provider>
  );
}
