import { Button, Dropdown, Image, Space } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar(props) {

  const items = [
    {
      label: "1st menu item",
      key: '0',
    },
    {
      label: "2nd menu item",
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];


  return (
    <Navbar expand="lg" data-bs-theme="dark" className="reeco-navbar">
      <Container>
        <Navbar.Brand>Reeco</Navbar.Brand>
        <Nav className="navbar-items">
          <Nav.Link href="#home">Store</Nav.Link>
          <Nav.Link href="#features">Orders</Nav.Link>
          <Nav.Link href="#pricing">Analytics</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="navbar-items align-items-center ms-auto">
            <Nav.Link href="#cart">
              <div className="navbar-icon">
                <ShoppingCartOutlined />
              </div>
            </Nav.Link>
            <Nav.Link className="p-0">
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Link className="no-link-color" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hello, James
                    <DownOutlined />
                  </Space>
                </Link>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
