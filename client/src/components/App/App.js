import React, { Component } from "react";
import "./_style.scss";
import PhoneListContainer from "../PhoneListContainer/PhoneListContainer";
import PhoneListDetail from "../PhoneListDetail/PhoneListDetail";
import WithLoading from "../WithLoading/WithLoading.js";
import WithPopup from "../WithPopup/WithPopup.js";
import { Button, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { popupToggle, popupSetIndex } from "../../actions/popupAction.js";
import { phonesSet, phonesError } from "../../actions/apiAction.js";
import axios from "axios";

const PhoneListWithLoading = WithLoading(PhoneListContainer);
const PhoneDetailWithPopup = WithPopup(PhoneListDetail);

const mapStateToProps = state => ({
  renderPopup: state.popupReducer.togglePopup,
  popupIndex: state.popupReducer.popupIndex,
  phones: state.apiReducer.phones,
  error: state.apiReducer.error,
  errorMessage: state.apiReducer.message
});

const mapDispatchToProps = dispatch => ({
  popupToggle: () => dispatch(popupToggle()),
  popupSetIndex: index => dispatch(popupSetIndex(index)),
  phonesSet: phones => dispatch(phonesSet(phones)),
  phonesError: () => dispatch(phonesError())
});

class App extends Component {
  constructor(props) {
    super(props);
    this.togglePhoneDetail = this.togglePhoneDetail.bind(this);
    this.handleDataReload = this.handleDataReload.bind(this);
  }

  togglePhoneDetail(index) {
    if (typeof index !== "number") {
      this.props.popupToggle();
    } else {
      this.props.popupToggle();
      this.props.popupSetIndex(index);
    }
  }

  handleDataReload(err) {
    this.props.phonesSet([]);
    if (err) this.loadData("/phonesErr");
    else this.loadData("/phones");
  }

  loadData(path) {
    let self = this;
    axios
      .get(path)
      .then(function(response) {
        self.props.phonesSet(response.data.payload);
      })
      .catch(function(error) {
        console.log("error message!: ", error);
        self.props.phonesError(error);
      });
  }

  componentDidMount() {
    this.loadData("/phones");
  }

  render() {
    let loadingStatus;
    if (this.props.error) loadingStatus = "failure";
    else if (this.props.phones.length > 0) loadingStatus = "success";
    else loadingStatus = "loading";

    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand className="App-header"> Phone Catalogue</Navbar.Brand>
          <Button
            bsStyle="warning"
            onClick={() => this.handleDataReload(null)}
            disabled={loadingStatus === "loading"}
          >
            {loadingStatus === "loading" ? "Loading..." : "Reload"}
          </Button>
          <Button
            bsStyle="danger"
            onClick={() => this.handleDataReload("error")}
            disabled={loadingStatus === "loading"}
          >
            {loadingStatus === "loading" ? "Loading..." : "Reload (error)"}
          </Button>
        </Navbar>
        {/* <pre>
          {JSON.stringify(this.props)}
          {JSON.stringify(loadingStatus)}
        </pre> */}
        <PhoneDetailWithPopup
          data={this.props.phones[this.props.popupIndex]}
          shouldRender={this.props.renderPopup}
          togglePopup={this.togglePhoneDetail}
        />
        <PhoneListWithLoading
          data={this.props.phones}
          errorMessage={this.props.errorMessage}
          status={loadingStatus}
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
