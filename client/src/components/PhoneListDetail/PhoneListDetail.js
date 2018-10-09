import React from "react";
import Proptypes from "prop-types";
import { Panel, Image } from "react-bootstrap";
import "./_style.scss";

const PhoneListDetail = props => {
  let { name, imageUrl, id, snippet } = props.data;
  return (
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h1" className={"phone-detail-name"}>
          {name}
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Image
          className={"phone-detail-image center-block"}
          src={imageUrl}
          alt={id}
          style={{ height: "250px", width: "250px" }}
        />
      </Panel.Body>
      <Panel.Footer>
        <div className="phone-detail-snippet">{snippet}</div>
      </Panel.Footer>
    </Panel>
  );
};

PhoneListDetail.proptypes = {
  data: Proptypes.object.isRequired,
  togglePhoneDetail: Proptypes.func.isRequired
};

export default PhoneListDetail;
