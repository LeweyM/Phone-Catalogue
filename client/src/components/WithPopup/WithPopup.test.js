import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { expect } from "chai";
import assert from "assert";
import sinon from "sinon";
import WithPopup from "./WithPopup";

describe("WithPopup", () => {
  const DummyComponent = props => <div>This is a dummy Component</div>;
  const DummyWithPopup = WithPopup(DummyComponent);
  const callback = sinon.spy();
  it("renders nothing if props.shouldRender === false", () => {
    const renderedComponent = shallow(
      <DummyWithPopup shouldRender={false} togglePopup={callback} />
    );
    expect(renderedComponent.children()).to.have.lengthOf(0);
  });
  it("renders wrapped component if props.shouldRender === true", () => {
    const renderedComponent = shallow(
      <DummyWithPopup shouldRender={true} togglePopup={callback} />
    );
    expect(renderedComponent.find(DummyComponent)).to.have.lengthOf(1);
  });
  it("calls 'togglePopup' callback when click outside of main container", () => {
    // const callback = sinon.spy();
    const renderedComponent = shallow(
      <DummyWithPopup shouldRender={true} togglePopup={callback} />
    );
    renderedComponent.find(".popup-background").simulate("click");
    assert(callback.calledOnce);
  });
});
