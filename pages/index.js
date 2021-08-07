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
  const router = useRouter();

  const card = [
    {
      id: 1,
      icon: "",
      title_en: "Stable updates and support",
      title_ru: "Стабильные обновления и поддержка",
      title_uz: "Doimiy yangilanish va yordam",
      body_en: "We always monitor our system, make updates and support",
      body_uz:
        "Biz doim sistemamizni monitoring qilib turamiz, yangiliklar kiritamiz va yordam beramiz",
      body_ru:
        "Мы постоянно следим за нашей системой, делаем обновления и оказываем поддержку",
    },
    {
      id: 2,
      icon: "",
      title_ru: "Простота использования",
      title_uz: "Qulay va oson ishlatiliashi",
      title_en: "Ease of use",
      body_uz:
        "Biz doim sistemamizni monitoring qilib turamiz, yangiliklar kiritamiz va yordam beramiz",
      body_ru: "Супер простая и интуитивная панель управления",
      body_en: "Super easy and intuitive control panel",
    },
    {
      id: 3,
      icon: "",
      title_ru: "Доступность",
      title_uz: "Qulay va oson ishlatiliashi",
      title_en: "Availability",
      body_uz:
        "Biz doim sistemamizni monitoring qilib turamiz, yangiliklar kiritamiz va yordam beramiz",
      body_ru:
        "Платите фиксированную стоимость, не зависящую от вашего оборота.",
      body_en: "Pay only for additional features if you can afford it",
    },
  ];

  return (
    <>
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
          <Navbar.Brand href="/">
            <Image src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">
                {router.locale == "uz"
                  ? "Asosiy"
                  : router.locale == "en"
                  ? "Home"
                  : "Главная "}
              </Nav.Link>
              <Nav.Link href="#">
                {router.locale == "uz"
                  ? "Narxlar"
                  : router.locale == "en"
                  ? "Prices"
                  : "Цены"}
              </Nav.Link>
              <Nav.Link href="#">
                {router.locale == "uz"
                  ? "Nima uchun?"
                  : router.locale == "en"
                  ? "What for?"
                  : "Зачем?"}
              </Nav.Link>
              <Nav.Link href="#action4">
                {router.locale == "uz"
                  ? "Dokumentatsiya"
                  : router.locale == "en"
                  ? "Documentation"
                  : "Документация"}
              </Nav.Link>
              <Button
                href="https://app.botcommerce.io"
                variant="contained"
                className="primary-btn text-light"
                target="_blank"
              >
                {router.locale == "uz"
                  ? "Kirish"
                  : router.locale == "en"
                  ? "Enter"
                  : "Войти"}
              </Button>
              <NavDropdown
                title={
                  router.locale == "uz"
                    ? "Tillar"
                    : router.locale == "en"
                    ? "Language"
                    : "Языки"
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/ru">Rus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/en">Eng</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/uz">Uzb</NavDropdown.Item>
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
                  <h1>
                    {router.locale == "uz"
                      ? "Bu qanday ishlaydi?"
                      : router.locale == "en"
                      ? "How it works"
                      : "Как это работает"}
                  </h1>
                  <p>
                    {router.locale == "uz"
                      ? "Faqatgina 3 bosqich ichida:"
                      : router.locale == "en"
                      ? "In just 3 easy steps:"
                      : "Всего-то 3 простых шага:"}
                  </p>
                </div>
                <div className="mb-5 mt-5 d-flex column1">
                  <IconButton className="icon-btn">
                    <i className="fas fa-plus-square "></i>
                  </IconButton>
                  <div>
                    <h4>
                      {router.locale == "uz"
                        ? "Kirish botCommerce"
                        : router.locale == "en"
                        ? "Enter botCommerce"
                        : "Войди в botCommerce"}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "O'zingning elektron pochtang orqali bir necha soniyada akkaunt yarat"
                        : router.locale == "en"
                        ? "Create a profile in a seconds using your personal email"
                        : "Создай профиль с помощью своей электронной почты за считанные секунды"}
                    </p>
                  </div>
                </div>
                <div className="mb-5 d-flex column2">
                  <IconButton className="icon-btn">
                    <i className="fas fa-shopping-bag"></i>
                  </IconButton>
                  <div>
                    <h4>
                      {router.locale == "uz"
                        ? "O`z do`koningni to`ldir"
                        : router.locale == "en"
                        ? "Fill your shop"
                        : "Заполни свой магазин"}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "Mahsulotlarni qo`sh[nomlanishi, narxi, ko`rinishi] va sozlamalarini kiritgin"
                        : router.locale == "en"
                        ? "Enter items [title, price, description, photo] and select some settings"
                        : "Внеси товары [названия, цены, описания, фото] и выбери некоторые настройки"}
                    </p>
                  </div>
                </div>
                <div className="d-flex column3">
                  <IconButton className="icon-btn">
                    <i className="fas fa-heart"></i>
                  </IconButton>
                  <div>
                    <h4>
                      {router.locale == "uz"
                        ? "Buyurtma olishni boshla"
                        : router.locale == "en"
                        ? "Start receiving orders"
                        : "Начни принимать заказы"}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "Buyurtmalarni o`z mijozinga taqdim et va buyurtmalarni va buyurtmalarni Telegramda qayta ishlashga imkon yarat"
                        : router.locale == "en"
                        ? "Show your customers the shop inside Telegram and start processing orders"
                        : "Покажи своим клиентам магазин внутри Телеграм и начинай обрабатывать заказы"}
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
            <h1>
              {router.locale == "uz"
                ? "Telegram do'kon qanday ko'rinishga ega?"
                : router.locale == "en"
                ? "How does a Telegram shop looks like?"
                : "Как выглядит магазин в Телеграм?"}
            </h1>
            <p>
              {router.locale == "uz"
                ? "Asosiy menyu, kategoriyalar, mahsulotlar, savatcha, buyurtmani rasmiylashtirish jarayoni"
                : router.locale == "en"
                ? "Main menu, categories, products, cart, checkout process"
                : "Главное меню, категории, продукты, корзина, процесс оформления заказа"}
            </p>
            <div className="text-center mt-5">
              <Row className="d-flex align-items-center">
                <Col xxl={4} xl={4} lg={4} xs={12}>
                  <div className="cool mb-5">
                    <IconButton className="icon-btn">
                      <i className="fas fa-home"></i>
                    </IconButton>
                    <h4>
                      {router.locale == "uz"
                        ? "Asosiy menyu"
                        : router.locale == "en"
                        ? "Main menu"
                        : "Главное меню"}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "Buyurtma berish knopkasi(ichida kategoriyalar va mahsulotlar), Sozlamalar, Biz haqimizda, Fikr qoldirish va Mening buyurtmalarim"
                        : router.locale == "en"
                        ? "Order button with categories and products under the hood, Settings, About us, Feedback and My orders"
                        : "Кнопка Заказать за которой скрыта Категории магазина, Настройки, О нас, Поддержка и Мои заказы"}
                    </p>
                  </div>
                  <div className="cool ">
                    <IconButton className="icon-btn">
                      <i className="fas fa-shopping-bag"></i>
                    </IconButton>
                    <h4>
                      {router.locale == "uz"
                        ? "Kategoriyalar va mahsulotlar"
                        : router.locale == "en"
                        ? "Categories and Products"
                        : "Категории и Продукты"}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "Kategoriyalar ichida boshqa kategoriyalar yoki mahsulotlar bo'lishi mumkin, mahsulotlarning tavsifi, rasmi va narxi mavjud"
                        : router.locale == "en"
                        ? "Categories may contain subcategories or products, products have description, photo and price"
                        : "Категории могут содержать подкатегории либо продукты, у продуктов есть описание, фото и цена"}
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
                    <h4>
                      {router.locale == "uz"
                        ? "Rasmiylashtirish jarayoni"
                        : router.locale == "en"
                        ? "Checkout process"
                        : "Процесс оформления заказа"}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "Xaridor to'lov turini tanlashi mumkin, yetkazib berish turini(yetkazish yoki olib ketish), adres jo'natishi mumkin(tekst yoki lokatsiya)"
                        : router.locale == "en"
                        ? "Client can choose payment type, delivery type(delivery or pickup), send address(text or location)"
                        : "Клиент может выбрать способ оплаты, тип получения (доставка или самовывоз),  отправить адрес(текст или локацию)"}
                    </p>
                  </div>
                  <div className="cool ">
                    <IconButton className="icon-btn">
                      <i className="fas fa-cog"></i>
                    </IconButton>
                    <h4>
                      {" "}
                      {router.locale == "uz"
                        ? "Hammasi Boshqaruv panelida"
                        : router.locale == "en"
                        ? "Everything in Control Panel"
                        : "Всё в Панели управления"}{" "}
                    </h4>
                    <p>
                      {router.locale == "uz"
                        ? "Do'konning barcha sozlamalari Boshqaruv Paneli orqali sozlanadi"
                        : router.locale == "en"
                        ? "All shop settings can be configured in Shop Control Panel"
                        : "Весь магазин настраивается полностью из Панеля управления магазином"}
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
            <h1>
              {" "}
              {router.locale == "uz"
                ? "Narxlar"
                : router.locale == "en"
                ? "Pricing"
                : "Цены"}
            </h1>
            {router.locale == "uz" ? (
              <p>
                Birinchi oy <strong>bepul</strong>, barcha funksiyalardan
                foydalanish imkoniyati mavjud.
                <br />
                Abonent to'lovi ikkinchi oydan boshlab to'lanishi kerak.
              </p>
            ) : router.locale == "en" ? (
              <p>
                First month is <strong>free</strong>, you can use all of the
                functions of our platform.
                <br />
                Monthly fee should be paid from second month.
              </p>
            ) : (
              <p>
                Первый месяц <strong>бесплатный</strong>, есть возможность
                использовать все функции.
                <br /> Абонентскую плату нужно платить со второго месяца.
              </p>
            )}
          </div>
          <div className="card">
            <Row>
              <Col xxl={6} xl={6} lg={6}>
                <div className="left-card">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      {router.locale == "uz"
                        ? "Do`konning panel boshqaruvi"
                        : router.locale == "en"
                        ? "Shop control panel                        "
                        : "Панель управления магазином"}
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      {router.locale == "uz"
                        ? "Mahsulotlar, buyurtmalar, mijozlar"
                        : router.locale == "en"
                        ? "Products, orders, customers"
                        : "Продукты, заказы, клиенты"}
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      {router.locale == "uz"
                        ? "Aqlli analitika"
                        : router.locale == "en"
                        ? "Smart analytics                        "
                        : "Умная аналитика"}
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      {router.locale == "uz"
                        ? "Aqlli push kompaniyasi"
                        : router.locale == "en"
                        ? "Payment systems"
                        : "Умная пуш кампания"}
                    </li>
                    <li>
                      <i className="fas fa-check-circle fa-2x"></i>
                      {router.locale == "uz"
                        ? "To'lov sistemalari"
                        : router.locale == "en"
                        ? "Smart push companies"
                        : "Платежные системы"}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xxl={6} xl={6} lg={6}>
                <div className="right-card">
                  <h1>
                    $6.9
                    <span>
                      /
                      {router.locale == "uz"
                        ? "oy"
                        : router.locale == "en"
                        ? "month"
                        : "мес"}
                    </span>
                  </h1>
                  <p>
                    {router.locale == "uz"
                      ? "ikkinchi oydan boshlab"
                      : router.locale == "en"
                      ? "Beginning from second month"
                      : "начиная со второго месяца"}
                  </p>
                  <Button
                    variant="contained"
                    href="https://app.botcommerce.io"
                    className="fluid"
                  >
                    {router.locale == "uz"
                      ? "Ulanish"
                      : router.locale == "en"
                      ? "Connect"
                      : "Подключиться"}
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
            <h1>
              {router.locale == "uz"
                ? "Nima uchun aynan biz?"
                : router.locale == "en"
                ? ""
                : "Почему выбрать нас?"}
            </h1>
            {router.locale == "uz"}
          </div>
          <div className="cards text-center">
            <Row>
              {card.map((item) => (
                <Col key={item.id} xxl={4} xl={4} xs={12}>
                  <div className="box">
                    <IconButton className="blue-btn">
                      {/* <i class="fas fa-comment-alt"></i> */}
                    </IconButton>
                    <h2>
                      {router.locale == "uz"
                        ? item.title_uz
                        : router.locale == "en"
                        ? item.title_en
                        : item.title_ru}
                    </h2>
                    <p>
                      {router.locale == "uz"
                        ? item.body_uz
                        : router.locale == "en"
                        ? item.body_en
                        : item.body_ru}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      {/* stil question */}
      <div className="still-have-question">
        <Container>
          <Row className="d-flex align-items-center">
            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
              <h4>
                {router.locale == "uz"
                  ? "Hali ham savolingiz bormi?"
                  : router.locale == "en"
                  ? "Still have a question"
                  : "Остались вопросы?"}
              </h4>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
              <h4>
                <a href="tel:+998993698462">+998(91)408-66-08</a>{" "}
                {router.locale == "uz"
                  ? "online yozing"
                  : router.locale == "en"
                  ? "or you write"
                  : "или напишите"}
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
                  <a href="#home">
                    {router.locale == "uz"
                      ? "Asosiy"
                      : router.locale == "en"
                      ? "Home"
                      : "Главная "}
                  </a>
                </li>
                <li>
                  <a href="#How-it-work">
                    {router.locale == "uz"
                      ? "Bu qanday ishlaydi?"
                      : router.locale == "en"
                      ? "How it work?"
                      : "Как это работает?"}
                  </a>
                </li>
                <li>
                  <a href="#pricing">
                    {router.locale == "uz"
                      ? "Narxlar"
                      : router.locale == "en"
                      ? "Prices"
                      : "Цены"}
                  </a>
                </li>
                <li>
                  <Button variant="outlined" href="https://app.botcommerce.io">
                    {router.locale == "uz"
                      ? "Do`kon yaratish"
                      : router.locale == "en"
                      ? "Create shop"
                      : "Создать"}
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
    </>
  );
}
