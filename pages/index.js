import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
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
import WhiteLogo from "../public/logo_white.svg";
export default function index() {
  let router = useRouter();

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
              <Nav.Link href="#action1">
                {router.locale == "uz"
                  ? "Asosiy"
                  : router.locale == "en"
                  ? "Home"
                  : "Главная "}
              </Nav.Link>
              <Nav.Link href="#action2">
                {router.locale == "uz"
                  ? "Narxlar"
                  : router.locale == "en"
                  ? "Prices"
                  : "Цены"}
              </Nav.Link>
              <Nav.Link href="#action3">
                {router.locale == "uz"
                  ? "Nima uchun?"
                  : router.locale == "en"
                  ? "What for?"
                  : "Зачем?"}
              </Nav.Link>
              <Nav.Link href="#action4">Documentatsiya</Nav.Link>
              <Button
                href="https://app.botcommerce.io"
                variant="contained"
                className="primary-btn text-light"
                target="_blank"
              >
                Kirish
              </Button>
              <NavDropdown title="Tillar" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Rus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="en">Eng</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="uz">Uzb</NavDropdown.Item>
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
              {router.locale == "uz" ? (
                <h1>
                  Sizning <span className="primary-text">do`koningiz</span>
                  <br /> 5 daqiqa ichida telegramda
                </h1>
              ) : router.locale == "en" ? (
                <h1>
                  Your <span>shop</span> inside telegram in 5 minutes
                </h1>
              ) : (
                <h1>
                  Твой <span>магазин</span> в Телеграм за 5 минут
                </h1>
              )}

              {router.locale == "uz" ? (
                <p>
                  Mukammal do`kon, to`lov sistemalari, yetkazib berish
                  xizmatlari hamda qulay panel boshqaruvi va ko`plab
                  imkoniyatlar
                </p>
              ) : router.locale == "en" ? (
                <p>
                  A complete shop, with payment systems, delivery services and
                  convenient control panel with built-in CRM and Analytics.
                </p>
              ) : (
                <p>
                  Полноценный магазин, с платежными системами, доставочными
                  службами и удобной панелью управления с встроенной CRM и
                  Аналитикой.
                </p>
              )}

              <Button
                size="large"
                className="primary-btn text-light"
                href="https://app.botcommerce.io"
                target="_blame"
              >
                {router.locale == "uz"
                  ? "Do`kon yaratish"
                  : router.locale == "en"
                  ? "Create shop"
                  : "Создать"}
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
                <Col xxl={4} xl={4} lg={4} xs={12}>
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
                <Col xxl={4} xl={4} lg={4} xs={12} className="col">
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
                <Col xxl={4} xl={4} lg={4} xs={12} className="col">
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
              <Col xxl={6} xl={6} lg={6}>
                <div className="left-card">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      Do`konning panel boshqaruvi
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      Mahsulotlar, buyurtmalar, mijozlar
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      Aqlli analitika
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      Aqlli push kompaniyasi
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      To'lov sistemalari
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xxl={6} xl={6} lg={6}>
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

      {/* why choose us */}
      <div className="why-choose-us">
        <Container>
          <div className="why-text text-center">
            <h1>Nima uchun aynan biz?</h1>
            <p>
              Bizda do'kon yaratib, biznesingizni
              <br /> yangi darajaga olib chiqing va savdoni oshiring.
            </p>
          </div>
          <div className="cards text-center">
            <Row>
              <Col xxl={4} xl={4} xs={12}>
                <div className="box">
                  <IconButton className="blue-btn">
                    {/* <i class="fas fa-comment-alt"></i> */}
                  </IconButton>
                  <h2>Doimiy yangilanish va yordam</h2>
                  <p>
                    Biz doim sistemamizni monitoring qilib
                    <br /> turamiz, yangiliklar kiritamiz va yordam beramiz
                  </p>
                </div>
              </Col>
              <Col xxl={4} xl={4} xs={12}>
                <div className="box">
                  <IconButton className="blue-btn">
                    {/* <i class="fas fa-comment-alt"></i> */}
                  </IconButton>
                  <h2>Qulay va oson ishlatiliashi</h2>
                  <p>
                    Juda zo`r va
                    <br /> qulay boshqarish paneli
                  </p>
                </div>
              </Col>
              <Col xxl={4} xl={4} xs={12}>
                <div className="box">
                  <IconButton className="blue-btn">{/*  */}</IconButton>
                  <h2>Arzonligi</h2>
                  <p>
                    Faqatgina qo`shimcha funksiyalar uchun to`lang,
                    <br /> o`zingizga ijozat bergan holatda
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* stil question */}
      <div className="still-have-question">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
              <h4>Hali ham savolingiz bormi?</h4>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
              <h4>
                <a href="tel:+998993698462">+998(91)408-66-08</a> online yozing
                <a href="https://t.me/botcommerceio"> @botcommerceio</a>
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      {/* bottom navbar */}
      <div className="bottom-nav">
        <Container>
          <Row className="d-flex align-items-center justify-space-between">
            <Col xxl={6} xl={6} lg={4} md={4}>
              <a href="#">
                <Image href="#" src={WhiteLogo} alt="logo" />
              </a>
            </Col>
            <Col xxl={6} xl={6} lg={8} md={8}>
              <ul>
                <li>
                  <a href="#home">Asosiy</a>
                </li>
                <li>
                  <a href="#How-it-work">Bu qanday ishlaydi</a>
                </li>
                <li>
                  <a href="#pricing">Narxlar</a>
                </li>
                <li>
                  <Button variant="outlined" href="https://app.botcommerce.io">
                    Do`kon yaratish
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        <Container>
          <div className="footer">
            <h3>© August 02, 2021 botcommerce.io</h3>
            <h3>
              developed by
              <a href="http://mondaylabs.ru/portfolio/botcommerce">Monday</a>
            </h3>
          </div>
        </Container>
      </footer>
    </div>
  );
}
