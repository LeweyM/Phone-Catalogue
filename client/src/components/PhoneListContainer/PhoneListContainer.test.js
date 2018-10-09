// it renders without error
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { expect } from "chai";
import PhoneListContainer from "./PhoneListContainer";
import PhoneListItem from "../PhoneListItem/PhoneListItem.js";
import mockData from "../../mockData";

// renders x when provided with props x
describe("PhoneListContainer", () => {
  //renders without error
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PhoneListContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders 11 <PhoneListItem> components with mockData", () => {
    const renderedComponent = shallow(<PhoneListContainer data={mockData} />);
    expect(renderedComponent.find(PhoneListItem)).to.have.lengthOf(11);
  });
  // renders nothing when provided with empty array
  it("renders 0 <PhoneListItem> and 0 div components with mockData", () => {
    const renderedComponent = shallow(<PhoneListContainer data={[]} />);
    expect(renderedComponent.find(PhoneListItem)).to.have.lengthOf(0);
    expect(renderedComponent.find("div")).to.have.lengthOf(0);
  });
  // should render a maximum of 15 items (pagination?)
  it("renders 11 <PhoneListItem> components with mockData", () => {
    const renderedComponent = shallow(
      <PhoneListContainer data={mockData.concat(mockData)} />
    );
    expect(renderedComponent.find(PhoneListItem)).to.have.lengthOf(15);
  });
});
