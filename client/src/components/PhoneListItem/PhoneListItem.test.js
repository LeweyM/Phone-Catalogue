import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import assert from "assert";
import PhoneListItem from "../PhoneListItem/PhoneListItem.js";
import { Panel } from "react-bootstrap";

chai.use(chaiEnzyme());

const mockData = {
  age: 0,
  id: "motorola-xoom-with-wi-fi",
  imageUrl:
    "https://www.lg.com/us/images/cell-phones/MD05904596/md05886241-350x350.jpg",
  name: "Motorola XOOM\u2122 with Wi-Fi",
  snippet:
    "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
};

describe("PhoneListItem", () => {
  //renders without error
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PhoneListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it renders the text and src links provided via props
  it("renders a bootstrap Panel.Title with text content 'Motorola XOOM\u2122 with Wi-Fi'", () => {
    const wrapper = shallow(<PhoneListItem {...mockData} />);
    expect(wrapper.find(".phone-item-name")).to.have.lengthOf(1);
    expect(wrapper.find(Panel.Title).dive()).to.have.text(
      "Motorola XOOM\u2122 with Wi-Fi"
    );
  });
  it("renders an img with src 'https://www.lg.com/us/images/cell-phones/MD05904596/md05886241-350x350.jpg'", () => {
    const renderedComponent = shallow(<PhoneListItem {...mockData} />);
    expect(renderedComponent.find(".phone-item-image")).to.have.lengthOf(1);
    expect(renderedComponent.find(".phone-item-image")).to.have.attr(
      "src",
      "https://www.lg.com/us/images/cell-phones/MD05904596/md05886241-350x350.jpg"
    );
  });
  // img -> onclick calls an appropriate callback from props
  it("calls the togglePhoneDetail callback once when clicking on the image", () => {
    const callback = sinon.spy();
    const renderedComponent = shallow(
      <PhoneListItem {...mockData} togglePhoneDetail={callback} />
    );
    renderedComponent.find(".phone-item-image").simulate("click");
    assert(callback.calledOnce);
  });
});
