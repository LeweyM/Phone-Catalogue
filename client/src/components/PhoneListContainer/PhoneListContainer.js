import React from "react";
import Proptypes from "prop-types";
import PhoneListItem from "../PhoneListItem/PhoneListItem.js";
import "./_style.scss";
import { Grid, Row, Col } from "react-bootstrap";

const PhoneListContainer = props => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col>
          {props.data &&
            props.data.slice(0, 15).map((item, index) => {
              return (
                <PhoneListItem
                  key={item.id}
                  togglePhoneDetail={props.togglePhoneDetail}
                  index={index}
                  {...item}
                />
              );
            })}
        </Col>
      </Row>
    </Grid>
  );
};

PhoneListContainer.proptypes = {
  data: Proptypes.array.isRequired
};

PhoneListContainer.defaultProps = {
  data: []
};

export default PhoneListContainer;
