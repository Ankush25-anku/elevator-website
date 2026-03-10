export default function Services() {
  return (
    <section className="service-section">
      <div className="auto-container">
        <div className="sec-title mb_65 centred">
          <span className="sub-title">
            UNOSAFE Elevator Pvt Ltd - Safe Vertical Mobility Solutions
          </span>
          <h2>
            elevator services<span>.</span>
          </h2>
        </div>
      </div>

      <div className="outer-container">
        <div className="rotate-box">
          <span className="curved-circle">unosafe elevator services.</span>

          <div className="icon-box">
            <img src="/assets/images/icons/logo-2.png" alt="" />
          </div>
        </div>

        <div className="bg-color"></div>
        <div className="bg-color-2"></div>

        <span className="big-text">safe vertical mobility</span>

        <div className="row clearfix">
          {/* Service 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <h3>
                  <a href="/">passenger elevator manufacturing.</a>
                </h3>

                <p>
                  We manufacture high-quality passenger elevators designed for
                  safety, efficiency and smooth vertical transportation in
                  residential and commercial buildings.
                </p>
              </div>

              <figure className="image-box">
                <a href="/">
                  <img src="/assets/images/service/service-1.jpg" alt="" />
                </a>
              </figure>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <h3>
                  <a href="/">elevator installation.</a>
                </h3>

                <p>
                  Our expert engineers specialize in professional elevator
                  installation for buildings of all sizes and structures with
                  advanced safety standards.
                </p>
              </div>

              <figure className="image-box">
                <a href="/">
                  <img src="/assets/images/service/service-2.jpg" alt="" />
                </a>
              </figure>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <h3>
                  <a href="/">elevator maintenance.</a>
                </h3>

                <p>
                  UNOSAFE offers preventive maintenance programs using
                  scientific maintenance methods and strict quality checks to
                  ensure safe elevator performance.
                </p>
              </div>

              <figure className="image-box">
                <a href="/">
                  <img src="/assets/images/service/service-3.jpg" alt="" />
                </a>
              </figure>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <h3>
                  <a href="/">elevator repair & modernization.</a>
                </h3>

                <p>
                  We provide repair, modernization and technical upgrades to
                  improve safety, performance and reliability of existing
                  elevator systems.
                </p>
              </div>

              <figure className="image-box">
                <a href="/">
                  <img src="/assets/images/service/service-4.jpg" alt="" />
                </a>
              </figure>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="lower-box pt_35">
          <p>
            ISO 9001 : 2015 certified elevator company focused on safe passenger
            lift solutions
          </p>

          {/* <a href="/service" className="theme-btn">
            <span>get free quote</span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
