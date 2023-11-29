import { Breadcrumb, Button, Col, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";

function Header(props) {
  return (
    <div className="header">
      <Container className="h-100">
        <Row className="h-100">
          <Col className="justify-content-between d-flex flex-column" span={20}>
            <Breadcrumb
              className="reeco-breadcrumb"
              separator=">"
              items={[
                {
                  title: "Orders",
                },
                {
                  title: "Order 32457ABC",
                  href: "",
                },
              ]}
            />

            <h4 className="m-0">Order 32457ABC</h4>
          </Col>
          <Col className="d-flex align-items-end" span={4}>
            <Row className="w-100" justify={'space-between'}>
              <Col span={8}>
                <Button block className="reeco-button" shape="round">Back</Button>
              </Col>
              <Col span={14}>
                <Button block className="reeco-button" type="primary" shape="round">Approve Order</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
