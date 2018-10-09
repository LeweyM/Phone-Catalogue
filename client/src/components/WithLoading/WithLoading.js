//WithLoading.js

import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading.js";
import FailureMessage from "../FailureMessage/FailureMessage.js";

import "./_style.scss";

function WithLoading(WrappedComponent) {
  class WithLoading extends Component {
    render() {
      const self = this;
      const { ...childProps } = this.props;
      delete childProps.status;
      delete childProps.errorMessage;

      return (function(status) {
        switch (status) {
          case "success":
            return <WrappedComponent {...childProps} />;
          case "loading":
            return <Loading />;
          case "failure":
            return <FailureMessage errorMessage={self.props.errorMessage} />;
          default:
            return <FailureMessage />;
        }
      })(this.props.status);
    }
  }
  WithLoading.propTypes = {
    status: PropTypes.string.isRequired,
    errorMessage: PropTypes.string
  };
  return WithLoading;
}

export default WithLoading;
