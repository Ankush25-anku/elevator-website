export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-carousel owl-theme owl-carousel owl-nav-none">
        {/* Slide 1 */}
        <div className="slide-item p_relative">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(/assets/images/banner/banner-1.jpg)",
            }}
          ></div>

          <div className="auto-container">
            <div className="content-box">
              <span className="upper-text">
                Smart Elevators - Elevating Modern Buildings
              </span>

              <h2>
                Safe mobility, seamless lift solutions<span>.</span>
              </h2>
              {/* 
              <div className="text-box">
                <p>
                  Trusted elevator installation and maintenance services for
                  residential and commercial buildings
                </p>

                <a href="/" className="theme-btn">
                  <span>Learn More</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide-item p_relative">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(/assets/images/banner/banner-2.jpg)",
            }}
          ></div>

          <div className="auto-container">
            <div className="content-box">
              <span className="upper-text">
                Engineering Excellence in Vertical Transportation
              </span>

              <h2>
                Reliable lifts designed for performance<span>.</span>
              </h2>

              {/* <div className="text-box">
                <p>
                  High-quality elevator systems built with precision, innovation
                  and advanced safety standards
                </p>

                <a href="/" className="theme-btn">
                  <span>Learn More</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide-item p_relative">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(/assets/images/banner/banner-3.jpg)",
            }}
          ></div>

          <div className="auto-container">
            <div className="content-box">
              <span className="upper-text">
                Modern Lift Technology for Every Building
              </span>

              <h2>
                Elevating comfort, safety and design<span>.</span>
              </h2>

              {/* <div className="text-box">
                <p>
                  Custom lift installation, modernization and service solutions
                  for homes, offices and high-rise buildings
                </p>

                <a href="/" className="theme-btn">
                  <span>Learn More</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
