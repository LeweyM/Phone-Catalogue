import React from "react";
import Proptypes from "prop-types";
import { Panel, Image } from "react-bootstrap";
import "./_style.scss";

const PhoneListItem = props => {
  return (
    <Panel className="phone-item-container">
      <Panel.Heading className={"phone-item-name"}>
        <Panel.Title className="text-center" componentClass="h3">
          {props.name}
        </Panel.Title>
      </Panel.Heading>
      <Image
        className={"phone-item-image center-block align-middle"}
        src={props.imageUrl}
        alt={props.id}
        style={{ height: "150px", width: "150px" }}
        onClick={() => {
          props.togglePhoneDetail(props.index);
        }}
      />
    </Panel>
  );
};

PhoneListItem.proptypes = {
  id: Proptypes.object.isRequired,
  carrier: Proptypes.string,
  imageUrl: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  snippet: Proptypes.string.isRequired,
  togglePhoneDetail: Proptypes.func.isRequired
};

export default PhoneListItem;
