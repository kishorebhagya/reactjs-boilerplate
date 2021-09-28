import React from "react";
import "./ErrorPage.css";

const ErrorPage = ({ error }) => {
  const renderErrorMessage = () => {
    const { code, message } = error;
    switch (code) {
      case "ECONNABORTED":
        return "Check your internet connection";
      default:
        return message;
    }
  };

  return (
    <React.Fragment>
      <section className="error_page">
        <h1>
          {(error && `${renderErrorMessage(error)}`) || "Something went wrong"}
        </h1>
      </section>
    </React.Fragment>
  );
};

export default ErrorPage;
