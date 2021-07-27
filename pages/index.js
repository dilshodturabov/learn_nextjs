import React from "react";
import Image from "next/image";
// material-ui/core
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// bootstrap
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
// fontawesome

// public
import Logo from "../public/logo.svg";
import BotMain from "../public/bot_main.svg";
import BotHow from "../public/bot_how.svg";
export default function index() {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </head>
      {/* navbar  */}
      <Navbar expand="lg" className="d-flex">
        <Container>
          <Navbar.Brand href="#">
            <Image src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Asosiy</Nav.Link>
              <Nav.Link href="#action2">Narxlar</Nav.Link>
              <Nav.Link href="#action3">Nima uchun?</Nav.Link>
              <Nav.Link href="#action4">Documentatsiya</Nav.Link>
              <Button
                href="#action5"
                variant="contained"
                className="blue-btn text-light"
              >
                Kirish
              </Button>
              <NavDropdown title="Tillar" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Rus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Eng</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Uzb</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* shop inside telegram  */}
      <div className="shop-inside ">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xxl={6} xl={6} lg={6} className="align-items-center">
              <h1>
                Sizning <span className="primary-text">do`koningiz</span>
                <br /> 5 daqiqa ichida telegramda
              </h1>
              <p>
                Mukammal do`kon, to`lov sistemalari, yetkazib berish xizmatlari
                hamda qulay panel boshqaruvi va ko`plab imkoniyatlar
              </p>
              <Button
                size="large"
                className="blue-btn text-light"
                href="https://app.botcommerce.io"
                target="_blame"
              >
                Do`kon yaratish
              </Button>
            </Col>
            <Col xxl={6} xl={6} lg={6}>
              <Image src={BotMain} alt="bot main" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* how is it work */}
      <div className="how-is-it-work">
        <Container>
          <Row className="py-5 d-flex align-items-center">
            <Col xxl={6} xl={6} lg={6} >
              <Image src={BotHow} alt="bot how" />
            </Col>
            <Col xxl={6} xl={6} lg={6} >
              <div className="how-is-right">
                <h1>Bu qanday ishlaydi?</h1>
                <p>Faqatgina 3 bosqich ichida:</p>
                <div className="mb-4 mt-5 d-flex column1">
                  <IconButton className="icon-btn">
                    <i className="fas fa-plus-square "></i>
                  </IconButton>
                  <div>
                    <h4>Kirish botCommerce</h4>
                    <p>
                      O'zingning elektron pochtang orqali
                      <br /> bir necha soniyada akkaunt yarat
                    </p>
                  </div>
                </div>
                <div className="mb-4 d-flex column2">
                  <IconButton className="icon-btn">
                    <i class="fas fa-shopping-bag"></i>
                  </IconButton>
                  <div>
                    <h4>O`z do`koningni to`ldir</h4>
                    <p>
                      Mahsulotlarni qo`sh[nomlanishi, narxi, ko`rinishi]
                      <br /> va sozlamalarini kiritgin
                    </p>
                  </div>
                </div>
                <div className="d-flex column3">
                  <IconButton className="icon-btn">
                     <i class="fas fa-heart"></i>
                  </IconButton>
                  <div>
                    <h4>Buyurtma olishni boshla</h4>
                    <p>
                      Buyurtmalarni o`z mijozinga taqdim et
                   <br /> va buyurtmalarni <br /> va buyurtmalarni Telegram
                     da qayta ishlashga imkon
                      yarat
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
