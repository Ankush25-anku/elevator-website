import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="main-header">
      {/* header-top */}
      <div className="header-top">
        <div className="outer-container">
          <div className="top-inner">
            <div className="text-box">
              <p>Building Your Vision - From Foundation to Finish!</p>
            </div>
            <ul className="info-list">
              <li>
                <i className="icon-1"></i>
                <span>25 Arc Avenue, San Jose, CA 95001</span>
              </li>
              <li>
                <i className="icon-2"></i>
                <span>09:00am to 06:00pm</span>
              </li>
              <li>
                <i className="icon-3"></i>
                <a href="mailto:support@example.net">support@example.net</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* header-lower */}
      <div className="header-lower">
        <div className="outer-container p_relative">
          <div className="mobile-nav-toggler">
            <i className="icon-16"></i>
          </div>

          <div className="outer-box">
            <div className="menu-column">
              <figure className="logo-box">
                <Link href="/">
                  <img src="/assets/images/logo.png" alt="" />
                </Link>
              </figure>

              <div className="menu-area">
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <Link href="/">Home</Link>
                      </li>

                      <li>
                        <Link href="/about">About</Link>
                      </li>

                      <li className="dropdown">
                        <a href="/projects">Products</a>
                        <ul>
                          <li>
                            <Link href="/products/mr-geared-elevator">
                              Machine Room Elevators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/mr-gearless-elevators">
                              Machine Room Less Elevators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/hydraulic-elevators">
                              Hydraulic Elevators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/medical-elevators">
                              Hospital / Stretcher Elevators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/capsule-elevators">
                              Capsule Elevators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/Goodselevator">
                              Goods Elevator
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/villaelevators">
                              Villa Elevators
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/escalator">Escalator</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <Link href="/Homevariants">Variants</Link>
                        <ul>
                          <li>
                            <Link href="/unoclassics">Uno Classic</Link>
                          </li>
                          <li>
                            <Link href="/Unomax">Uno Max</Link>
                          </li>
                          <li>
                            <Link href="/uno-prime">Uno Prime</Link>
                          </li>
                          <li>
                            <Link href="/uno-gold">Uno Gold</Link>
                          </li>
                          <li>
                            <Link href="/uno-luxury">Uno Luxury</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="/galleryone">Gallery</Link>
                      </li>

                      <li>
                        <Link href="/footer">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            {/* 
            <div className="menu-right-content">
              <div className="support-box">
                <div className="icon-box">
                  <i className="icon-4"></i>
                </div>
                <div className="text">
                  <span>Call Our Support 24/7</span>
                  <a href="tel:1.800.600.1234">1.800.600.1234</a>
                </div>
              </div>
              <div className="btn-box">
                <a href="index.html" className="theme-btn">
                  <span>get free quote</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* sticky-header */}
      <div className="sticky-header">
        <div className="large-container">
          <div className="outer-box">
            <div className="menu-column">
              <figure className="logo-box">
                <a href="index.html">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </figure>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  {/* Menu will come through Javascript */}
                </nav>
              </div>
            </div>

            <div className="menu-right-content">
              <div className="support-box">
                <div className="icon-box">
                  <i className="icon-4"></i>
                </div>
                <div className="text">
                  <span>Call Our Support 24/7</span>
                  <a href="tel:1.800.600.1234">1.800.600.1234</a>
                </div>
              </div>
              <div className="btn-box">
                <a href="index.html" className="theme-btn">
                  <span>get free quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
