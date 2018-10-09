import React, { Component } from "react";
import "./_style.scss";
import PhoneListContainer from "../PhoneListContainer/PhoneListContainer";
import PhoneListDetail from "../PhoneListDetail/PhoneListDetail";
import WithLoading from "../WithLoading/WithLoading.js";
import WithPopup from "../WithPopup/WithPopup.js";
import mockData from "../../mockData.js";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { popupToggle, popupSetIndex } from "../../actions/popupAction.js";

const PhoneListWithLoading = WithLoading(PhoneListContainer);
const PhoneDetailWithPopup = WithPopup(PhoneListDetail);

const mapStateToProps = state => ({
  renderPopup: state.popupReducer.togglePopup,
  popupIndex: state.popupReducer.popupIndex
});

const mapDispatchToProps = dispatch => ({
  popupToggle: () => dispatch(popupToggle()),
  popupSetIndex: index => dispatch(popupSetIndex(index))
});

class App extends Component {
  constructor(props) {
    super(props);
    this.togglePhoneDetail = this.togglePhoneDetail.bind(this);
  }

  togglePhoneDetail(index) {
    if (typeof index !== "number") {
      this.props.popupToggle();
    } else {
      this.props.popupToggle();
      this.props.popupSetIndex(index);
    }
  }

  render() {
    return (
      <div className="App">
        <PageHeader className="App-header">Phone Catalogue</PageHeader>
        <PhoneDetailWithPopup
          data={mockData[this.props.popupIndex]}
          shouldRender={this.props.renderPopup}
          togglePopup={this.togglePhoneDetail}
        />
        <PhoneListWithLoading
          data={mockData}
          status="success"
          togglePhoneDetail={this.togglePhoneDetail}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
