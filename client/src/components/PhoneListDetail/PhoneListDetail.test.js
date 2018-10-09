import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import PhoneListDetail from "./PhoneListDetail.js";

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

describe("PhoneListDetail", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PhoneListDetail data={mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders a title with text content 'The Next, Next Generation\r\n\r\nExperience the... etc.'", () => {
    const renderedComponent = shallow(<PhoneListDetail data={mockData} />);
    expect(renderedComponent.find(".phone-detail-snippet")).to.have.lengthOf(1);
    expect(renderedComponent.find(".phone-detail-snippet")).to.have.text(
      "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    );
  });
  it("renders an img with src 'https://www.lg.com/us/images/cell-phones/MD05904596/md05886241-350x350.jpg'", () => {
    const renderedComponent = shallow(<PhoneListDetail data={mockData} />);
    expect(renderedComponent.find(".phone-detail-image")).to.have.attr(
      "src",
      "https://www.lg.com/us/images/cell-phones/MD05904596/md05886241-350x350.jpg"
    );
    expect(renderedComponent.find(".phone-detail-image")).to.have.lengthOf(1);
  });
});
