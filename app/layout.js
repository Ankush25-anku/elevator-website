import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Preloader from "../components/Preloader";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "UNO SAFE Elevator Pvt Ltd",
  description:
    "UNO SAFE Elevator Pvt Ltd — Advanced, reliable and energy-efficient elevator solutions for residential, commercial and high-rise buildings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Fav Icon */}
        <link rel="icon" href="/assets/images/icons/logo-2.png" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Stylesheets */}
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
        <Preloader />
        <Header />
        <MobileMenu />
        {children}
        <Footer />

        {/* jQuery MUST load first */}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />

        {/* Core JS */}
        <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />

        {/* Plugins */}
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

        {/* MAIN SCRIPT LAST */}
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
