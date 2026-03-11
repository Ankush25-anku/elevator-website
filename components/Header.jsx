export default function Header() {
  return (
    <header className="main-header">
      {/* header-top */}
      {/* <div className="header-top">
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
      </div> */}

      {/* header-lower */}
      <div className="header-lower">
        <div className="outer-container p_relative">
          <div className="mobile-nav-toggler">
            <i className="icon-16"></i>
          </div>

          <div className="outer-box">
            {/* logo + menu */}
            <div className="menu-column">
              <figure className="logo-box">
                <a href="/">
                  <img
                    src="/assets/images/logo.png"
                    alt="UNOSAFE Elevators"
                    className="site-logo"
                  />
                </a>
              </figure>

              <div className="menu-area">
                <nav className="main-menu clearfix">
                  <ul className="navigation clearfix">
                    <li>
                      <a href="/">Home</a>
                    </li>

                    <li>
                      <a href="/about">About</a>
                    </li>

                    <li className="dropdown">
                      <a href="/projects">Products</a>
                      <ul>
                        <li>
                          <a href="/products/mr-geared-elevator">
                            Machine Room Elevators
                          </a>
                        </li>
                        <li>
                          <a href="/products/mr-gearlesselevators">
                            Machine Room Less Elevators
                          </a>
                        </li>
                        <li>
                          <a href="/products/hydraulicelevators">
                            Hydraulic Elevators
                          </a>
                        </li>
                        <li>
                          <a href="/products/medicalelevators">
                            Hospital / Stretcher Elevator
                          </a>
                        </li>
                        <li>
                          <a href="/products/capsuleelevators">
                            Capsule Elevator
                          </a>
                        </li>
                        <li>
                          <a href="/products/Goodselevator">Goods Elevator</a>
                        </li>
                        <li>
                          <a href="/products/villaelevators">Villa Elevators</a>
                        </li>
                        <li>
                          <a href="/products/escalator">Escalator</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="/Homevariants">Variants</a>
                      <ul>
                        <li>
                          <a href="/unoclassics">Uno Classic</a>
                        </li>
                        <li>
                          <a href="/Unomax">Uno Max</a>
                        </li>
                        <li>
                          <a href="/uno-prime">Uno Prime</a>
                        </li>
                        <li>
                          <a href="/uno-gold">Uno Gold</a>
                        </li>
                        <li>
                          <a href="/uno-luxury">Uno Luxury</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/galleryone">Gallery</a>
                    </li>
                    <li>
                      <a href="/Blog">Blog</a>
                    </li>
                    <li>
                      <a href="/footer">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* right side */}
            <div className="menu-right-content">
              <div className="support-box">
                {/* <div className="icon-box">
                  <i className="icon-4"></i>
                </div> */}

                {/* <div className="text">
                  <span>Call Our Support 24/7</span>
                  <a href="tel:1.800.600.1234">1.800.600.1234</a>
                </div> */}
              </div>

              {/* <div className="btn-box">
                <a href="/" className="theme-btn">
                  <span>get free quote</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="large-container">
          <div className="outer-box">
            <figure className="logo-box">
              <a href="/">
                <img
                  src="/assets/images/logo.png"
                  alt="UNOSAFE Elevators"
                  className="site-logo"
                />
              </a>
            </figure>

            <nav className="main-menu clearfix">
              {/* Menu will be cloned via JS */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
