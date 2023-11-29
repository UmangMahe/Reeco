import { Button, Col, Input, Image, Row, Table, Tag, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Flex from "../Flex";
import {
  CheckOutlined,
  CloseOutlined,
  PrinterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Avacado from "/images/ah.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  approve,
  missing,
  setProduct,
} from "../../redux/features/order/orderSlice";
import Utils from "../../utils";

function OrderTable(props) {
  const columns = [
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="product-image">
          <Image src={elm.image} />
        </div>
      ),
    },
    {
      title: "Product name",
      dataIndex: "name",
      render: (name) => <div className="product-name">{name}</div>,
      width: "22%",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      render: (brand) => <div dangerouslySetInnerHTML={{ __html: brand }} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (_, elm) => (
        <div className="product-price">
          {elm.price} / 6*1LB
          {elm.oldPrice && <p className="mb-0">{elm.oldPrice}</p>}
        </div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      render: (qty) => (
        <div className="product-qty">
          <strong>{qty}</strong> x 6 * 1LB
        </div>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      render: (_, elm) => (
        <div className="product-total">
          {elm.total ? `$${elm.total}` : 0}
          {elm.oldTotal && <p className="mb-0">${elm.oldTotal}</p>}
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      className: "product-status",
      render: (_, elm) => (
        <Row gutter={16} align={"middle"}>
          <Col
            className="d-flex justify-content-start"
            xl={14}
            lg={12}
            md={24}
            sm={24}
          >
            {elm.state === "approved" ? (
              <Tag color="#4AA82E">Approved</Tag>
            ) : elm.state === "missing" ? (
              <Tag color="#FF7F27">Missing</Tag>
            ) : (
              <Tag color="#ED1C24">Missing - Urgent</Tag>
            )}
          </Col>
          <Col xl={10} lg={12} md={24} sm={24}>
            <Row align={"middle"}>
              <Col span={7}>
                <Button
                  onClick={() => handleApprove(elm)}
                  type="link"
                  icon={<CheckOutlined className="checkicon" />}
                />
              </Col>
              <Col span={6}>
                <Button
                  type="link"
                  onClick={() => showModal(elm)}
                  icon={<CloseOutlined className="closeicon" />}
                />
              </Col>
              <Col>
                <Button className="reeco-link" type="link">
                  Edit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ),
      width: "30%",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid",
      brand: "Hormel Black <br />Labelmany",
      image: Avacado,
      price: "$60.67",
      qty: 0,
      state: "urgent",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid",
      brand: "Hormel Black <br />Labelmany",
      image: Avacado,
      price: "$60.67",
      qty: 15,
      total: 9000.88,
      state: "missing",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid",
      brand: "Hormel Black <br />Labelmany",
      image: Avacado,
      price: "$60.67",
      oldPrice: "$10.43",
      qty: 15,
      state: "approved",
      total: 9000.88,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid",
      brand: "Hormel Black <br />Labelmany",
      image: Avacado,
      price: "$60.67",
      oldPrice: "$10.43",
      qty: 15,
      total: 12654.32,
      oldTotal: 3345.12,
      state: "approved",
      address: "Sydney No. 1 Lake Park",
    },
  ];

  const [list, setList] = useState(data);

  const product = useSelector((state) => state.order);

  useEffect(() => {
    const { currentProduct } = product;
    Utils.updateTableWithId(list, currentProduct, setList, "key");
  }, [product]);

  const dispatch = useDispatch();

  const handleApprove = (e) => {
    dispatch(approve(e));
  };

  const handleMissing = (e) => {
    const { currentProduct } = product;
    dispatch(missing({ e, currentProduct }));
    setTimeout(()=>showModal(), 200);
  };

  const [modal, setModal] = useState(false);

  const showModal = (elm = "") => {
    dispatch(setProduct(elm || {}));
    setModal(!modal);
  };

  return (
    <>
      <div className="order-table">
        <Card className="reeco-card">
          <Card.Body>
            <Row className="mt-3 mb-4">
              <Col span={12}>
                <Col span={18}>
                  <Input
                    className="reeco-input"
                    placeholder="Search...."
                    suffix={<SearchOutlined style={{ color: "gray" }} />}
                    //   onChange={(e) => onSearch(e)}
                  />
                </Col>
              </Col>
              <Col span={12}>
                <Row justify={"end"}>
                  <Col lg={5} xs={12} md={5} sm={12}>
                    <Button className="reeco-button" shape="round">
                      Add Item
                    </Button>
                  </Col>
                  <Col xl={1} lg={1} md={1} xs={4} sm={4}>
                    <Button
                      className="reeco-button-link"
                      type="link"
                      icon={<PrinterOutlined />}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="table-responsive">
              <Table
                className="reeco-table"
                pagination={true}
                columns={columns}
                dataSource={list}
                loading={false}
                rowKey="key"
                size="middle"
              />
            </div>
          </Card.Body>
        </Card>
      </div>

      <Modal
        className="reeco-confirm"
        title="Missing Product"
        open={modal}
        centered
        onCancel={() => showModal()}
        width={370}
        footer={[
          <Button
            className="reeco-button-link"
            onClick={() => handleMissing("missing")}
            key={"no"}
            type="link"
          >
            No
          </Button>,
          <Button
            onClick={() => handleMissing("urgent")}
            className="reeco-button-link"
            key={"yes"}
            type="link"
          >
            Yes
          </Button>,
        ]}
      >
        <p>Is &apos;Chicken Breast Fillets, Boneless ... &apos; urgent?</p>
      </Modal>
    </>
  );
}

export default OrderTable;
