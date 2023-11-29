/* eslint-disable react/prop-types */
import { Col, Divider, Row } from "antd";
import React from "react";
import { Card } from "react-bootstrap";

function DetailsBox({ divider = true, subtitle="", body="", ...props }) {
  return (
    <Col span={4}>
      <Row className="h-100">
        <Col
          className="pe-3 py-2"
          span={divider ? 23 : 24}
        >
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Title>{body}</Card.Title>
        </Col>
        {divider && (
          <Col span={1}>
            <Divider type="vertical" />
          </Col>
        )}
      </Row>
    </Col>
  );
}

export default DetailsBox;
