import { Col, Divider, Row } from "antd";
import React from "react";
import { Card } from "react-bootstrap";
import DetailsBox from "./DetailsBox";

function OrderDetails(props) {

    const details = [
        {
            id: 0,
            subtitle: 'Supplier',
            body: 'East coast fruits & vegetables'
        },
        {
            id: 1,
            subtitle: 'Shipping Date',
            body: 'Thu, Feb 10'
        },
        {
            id: 2,
            subtitle: 'Total',
            body: '$ 15,028.3'
        },
        {
            id: 3,
            subtitle: 'Category',
            body: 'East coast fruits & vegetables'
        },
        {
            id: 4,
            subtitle: 'Department',
            body: '300-444-678'
        },
        {
            id: 5,
            subtitle: 'Status',
            body: 'Awaiting your approval'
        },
    ]
  return (
    <div className="order-details">
      <Card className="reeco-card">
        <Card.Body>
          <Row gutter={32} className="h-100">
            {details.map((ele, index) => (
              <DetailsBox key={index} divider={index === 5 ? false : true} subtitle={ele.subtitle} body={ele.body} />
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrderDetails;
