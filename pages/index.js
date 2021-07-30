import React from "react";
import Image from "next/image";
import Head from "next/head";
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
  Carousel,
  Caption,
} from "react-bootstrap";
// fontawesome

// public
import Logo from "../public/logo.svg";
import BotMain from "../public/bot_main.svg";
import BotHow from "../public/bot_how.svg";
import Phone from "../public/1hq.jpg";
export default function index() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://staging.botcommerce.io/static/img/logo_robot_face_tg.png"
        ></link>
      </Head>
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
                href="https://app.botcommerce.io"
                variant="contained"
                className="blue-btn text-light"
                target="_blank"
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
            <Col xxl={6} xl={6} lg={6}>
              <Image src={BotHow} alt="bot how" />
            </Col>
            <Col xxl={6} xl={6} lg={6}>
              <div className="how-is-right ml-4">
                <div className="how-is-it-work-text">
                  <h1>Bu qanday ishlaydi?</h1>
                  <p>Faqatgina 3 bosqich ichida:</p>
                </div>
                <div className="mb-5 mt-5 d-flex column1">
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
                <div className="mb-5 d-flex column2">
                  <IconButton className="icon-btn">
                    <i className="fas fa-shopping-bag"></i>
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
                    <i className="fas fa-heart"></i>
                  </IconButton>
                  <div>
                    <h4>Buyurtma olishni boshla</h4>
                    <p>
                      Buyurtmalarni o`z mijozinga taqdim et
                      <br /> va buyurtmalarni <br /> va buyurtmalarni Telegram
                      da qayta ishlashga imkon yarat
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* how does look like */}
      <div className="look-like pb-5">
        <Container>
          <div className="look-like-text text-center ">
            <h1>Telegram do'kon qanday ko'rinishga ega?</h1>
            <p>
              Asosiy menyu, kategoriyalar, mahsulotlar, savatcha, buyurtmani
              rasmiylashtirish jarayoni
            </p>
            <div className="text-center mt-5">
              <Row className="d-flex align-items-center">
                <Col xxl={4} xl={4}>
                  <div className="cool mb-5">
                    <IconButton className="icon-btn">
                      <i className="fas fa-home"></i>
                    </IconButton>
                    <h4>Asosiy menyu</h4>
                    <p>
                      Buyurtma berish knopkasi(ichida kategoriyalar va
                      mahsulotlar), Sozlamalar, Biz haqimizda, Fikr qoldirish va
                      Mening buyurtmalarim
                    </p>
                  </div>
                  <div className="cool ">
                    <IconButton className="icon-btn">
                      <i className="fas fa-shopping-bag"></i>
                    </IconButton>
                    <h4>Kategoriyalar va mahsulotlar</h4>
                    <p>
                      Kategoriyalar ichida boshqa kategoriyalar yoki mahsulotlar
                      bo'lishi mumkin, mahsulotlarning tavsifi, rasmi va narxi
                      mavjud
                    </p>
                  </div>
                </Col>
                <Col xxl={4} xl={4} className="col">
                  <Carousel>
                    <Carousel.Item interval={1000}>
                      <h1>First slider</h1>
                      <Image src={Phone} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <h1> second slider</h1>
                      <Image src={Phone} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1>four slider</h1>
                      <Image src={Phone} alt="" style={{ maxHeight: "50px" }} />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col xxl={4} xl={4} className="col">
                  <div className="cool mb-5">
                    <IconButton className="icon-btn">
                      <i className="fas fa-shopping-cart"></i>
                    </IconButton>
                    <h4>Rasmiylashtirish jarayoni</h4>
                    <p>
                      Xaridor to'lov turini tanlashi mumkin, yetkazib berish
                      turini(yetkazish yoki olib ketish), adres jo'natishi
                      mumkin(tekst yoki lokatsiya)
                    </p>
                  </div>
                  <div className="cool ">
                    <IconButton className="icon-btn">
                      <i className="fas fa-cog"></i>
                    </IconButton>
                    <h4>Hammasi Boshqaruv panelida</h4>
                    <p>
                      Do'konning barcha sozlamalari Boshqaruv Paneli orqali
                      sozlanadi
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      {/* Pricing */}
      <div className="pricing py-5">
        <Container>
          <div className="text-center price-text">
            <h1>Narxlar</h1>
            <p>
              Birinchi oy <strong>bepul</strong>, barcha funksiyalardan
              foydalanish imkoniyati mavjud.
              <br />
              Abonent to'lovi ikkinchi oydan boshlab to'lanishi kerak.
            </p>
          </div>
          <div className="card">
            <Row>
              <Col xxl={6} xl={6}>
                <div className="left-card">
                  <ul>
                    <li>
                      <i class="fas fa-check-circle fa-2x"></i>
                      Do`konning panel boshqaruvi
                    </li>
                    <li>
                      <i class="fas fa-check-circle fa-2x"></i>
                      Mahsulotlar, buyurtmalar, mijozlar
                    </li>
                    <li>
                      <i class="fas fa-check-circle fa-2x"></i>
                      Aqlli analitika
                    </li>
                    <li>
                      <i class="fas fa-check-circle fa-2x"></i>
                      Aqlli push kompaniyasi
                    </li>
                    <li>
                      <i class="fas fa-check-circle fa-2x"></i>
                      To'lov sistemalari
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xxl={6} xl={6}>
                <div className="right-card">
                  <h1>
                    $6.9<span>/oy</span>
                  </h1>
                  <p>ikkinchi oydan boshlab</p>
                  <Button
                    variant="contained"
                    href="https://app.botcommerce.io"
                    className="fluid"
                  >
                    Ulanish
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
