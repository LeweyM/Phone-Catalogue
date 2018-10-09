//WithPopup.js

import React, { Component } from "react";
import PropTypes from "prop-types";

import "./_style.scss";

function WithPopup(WrappedComponent) {
  class WithPopup extends Component {
    render() {
      const { ...childProps } = this.props;
      delete childProps.shouldRender;
      delete childProps.togglePopup;

      return this.props.shouldRender ? (
        <div
          className="popup-background"
          onClick={e => this.props.togglePopup(e)}
        >
          <div className="popup-inner">
            <WrappedComponent {...childProps} />
          </div>
        </div>
      ) : null;
    }
  }
  WithPopup.propTypes = {
    shouldRender: PropTypes.bool.isRequired,
    togglePopup: PropTypes.func.isRequired
  };
  return WithPopup;
}

export default WithPopup;
