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
              <li><i className="icon-1"></i><span>25 Arc Avenue, San Jose, CA 95001</span></li>
              <li><i className="icon-2"></i><span>09:00am to 06:00pm</span></li>
              <li><i className="icon-3"></i><a href="mailto:support@example.net">support@example.net</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* header-lower */}
      <div className="header-lower">
        <div className="outer-container p_relative">
          <div className="mobile-nav-toggler"><i className="icon-16"></i></div>

          <div className="outer-box">
            <div className="menu-column">
              <figure className="logo-box">
                <a href="index.html">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </figure>

              <div className="menu-area">
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">

                      <li className="dropdown">
                        <a href="#">Home</a>
                        <ul>
                          <li><a href="index.html">Home One</a></li>
                          <li><a href="index-2.html">Home Two</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#">About</a>
                        <ul>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="error.html">404</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li><a href="service.html">construction services</a></li>
                          <li><a href="service-2.html">creative architectures</a></li>
                          <li><a href="service-3.html">construction & design</a></li>
                          <li><a href="service-4.html">flooring & roofing</a></li>
                          <li><a href="service-5.html">repairs & renovation</a></li>
                        </ul>
                      </li>

                      <li className="current dropdown">
                        <a href="#">Projects</a>
                        <ul>
                          <li><a href="projects.html">Projects One</a></li>
                          <li><a href="projects-2.html">Projects Two</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <li><a href="blog.html">Blog Grid</a></li>
                          <li><a href="blog-2.html">Blog List</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>

                      <li><a href="contact.html">Contact</a></li>

                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div className="menu-right-content">
              <div className="support-box">
                <div className="icon-box"><i className="icon-4"></i></div>
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
                <div className="icon-box"><i className="icon-4"></i></div>
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