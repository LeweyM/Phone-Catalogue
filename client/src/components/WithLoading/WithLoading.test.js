// it renders without error
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { expect } from "chai";
import WithLoading from "./WithLoading";
import Loading from "../Loading/Loading.js";
import FailureMessage from "../FailureMessage/FailureMessage.js";

describe("WithLoading", () => {
  const DummyComponent = <div className="dummy">This is a dummy Component</div>;
  // const ComponentWithLoading = WithLoading(DummyComponent);
  it("renders wrapped component if props.status === success", () => {
    const DummyComponent = props => {
      return <div className="dummy">This is a dummy Component</div>;
    };
    const ComponentWithLoading = WithLoading(DummyComponent);
    const wrapper = shallow(<ComponentWithLoading status="success" />);
    expect(wrapper.find(DummyComponent)).to.have.lengthOf(1);
  });
  it("renders loading symbol if props.status === loading", () => {
    const DummyComponent = props => {
      return <div className="dummy">This is a dummy Component</div>;
    };
    const ComponentWithLoading = WithLoading(DummyComponent);
    const wrapper = shallow(<ComponentWithLoading status="loading" />);
    expect(wrapper.find(Loading)).to.have.lengthOf(1);
  });
  it("renders sorry message if props.status === failure", () => {
    const DummyComponent = props => {
      return <div className="dummy">This is a dummy Component</div>;
    };
    const ComponentWithLoading = WithLoading(DummyComponent);
    const wrapper = shallow(<ComponentWithLoading status="failure" />);
    expect(wrapper.find(FailureMessage)).to.have.lengthOf(1);
  });
});
