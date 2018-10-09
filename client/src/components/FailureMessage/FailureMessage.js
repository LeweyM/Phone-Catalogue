import "./_style.scss";
import React from "react";
import { Alert } from "react-bootstrap";

const FailureMessage = props => {
  return (
    <Alert bsStyle="danger">
      <h4>{props.errorMessage}!</h4>
      <p>Good thing the error handling functionality is up to scratch...</p>
    </Alert>
  );
};

export default FailureMessage;
