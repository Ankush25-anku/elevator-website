import Footer from "../components/Footer";
import Header from "../components/Header";
import PreloaderWrapper from "../components/PreloaderWrapper";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "UNOSAFE ELEVATOR PVT LTD",

  description:
    "UNOSAFE ELEVATOR PVT LTD - ADVANCED, RELIABLE, AND ENERGY-EFFICIENT ELEVATOR SOLUTIONS FOR RESIDENTIAL, COMMERCIAL, AND HIGH-RISE BUILDINGS.",

  keywords: [
    "UNOSAFE ELEVATOR",
    "PVT LTD",
    "PASSENGER LIFT",
    "HOME LIFT",
    "HOSPITAL LIFT",
    "GOODS LIFT",
    "CAR LIFT",
    "ELEVATOR MANUFACTURER",
    "LIFT COMPANY",
    "BANGALORE",
  ],

  metadataBase: new URL("https://www.unosafeelevator.com"),

  openGraph: {
    title: "UNOSAFE ELEVATOR PVT LTD",
    description:
      "ADVANCED, RELIABLE, AND ENERGY-EFFICIENT ELEVATOR SOLUTIONS FOR RESIDENTIAL, COMMERCIAL, AND HIGH-RISE BUILDINGS.",
    url: "https://www.unosafeelevator.com",
    siteName: "UNOSAFE ELEVATOR PVT LTD",
    images: [
      {
        url: "/assets/images/icons/logo-3.png",
        width: 512,
        height: 512,
        alt: "UNOSAFE ELEVATOR PVT LTD",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UNOSAFE ELEVATOR PVT LTD",
    description:
      "ADVANCED, RELIABLE, AND ENERGY-EFFICIENT ELEVATOR SOLUTIONS FOR RESIDENTIAL, COMMERCIAL, AND HIGH-RISE BUILDINGS.",
    images: ["/assets/images/icons/logo-3.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />
        <link href="/assets/css/owl.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/odometer.css" rel="stylesheet" />
        <link href="/assets/css/elpath.css" rel="stylesheet" />
        <link href="/assets/css/color.css" rel="stylesheet" />
        <link href="/assets/css/rtl.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />
      </head>

      <body>
        <PreloaderWrapper>
          <Header />

          {children}

          <div className="floating-contact">
            <a
              href="https://wa.me/918296206645"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a href="tel:+918296206645" className="phone-btn">
              <i className="fa fa-phone"></i>
            </a>
          </div>

          <Footer />
        </PreloaderWrapper>

        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/owl.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/validation.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/assets/js/appear.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.js" strategy="lazyOnload" />
        <Script src="/assets/js/parallax-scroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/scrolltop.min.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/jquery.lettering.min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/jquery.circleType.js" strategy="lazyOnload" />
        <Script src="/assets/js/odometer.js" strategy="lazyOnload" />
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
