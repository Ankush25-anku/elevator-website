export default function About() {
  return (
    <section id="about" className="about-section pt_120 pb_120">
      <div
        className="pattern-layer"
        data-parallax='{"x": 100}'
        style={{ backgroundImage: "url(/assets/images/shape/shape-.png)" }}
      ></div>

      <div className="auto-container">
        <div className="row clearfix">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box mr_90">
                <div className="sec-title mb_40">
                  <span className="sub-title">
                    About UNO SAFE Elevator Pvt Ltd
                  </span>
                  <h2>
                    We adhere to ISO 9001 : 2015 standards and deliver safe,
                    reliable passenger elevator solutions<span>.</span>
                  </h2>
                </div>

                <ul className="list-style-one mb_100 clearfix">
                  <li>
                    Manufacture, installation, and maintenance of passenger
                    elevators
                  </li>
                  <li>
                    Strong focus on safety with hazard-free and complaint-free
                    operations
                  </li>
                  <li>
                    Specialized solutions for all structures with more than 2
                    floors
                  </li>
                </ul>

                <figure className="image-box clearfix">
                  <img src="/assets/images/resource/img1036.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_two">
              <div className="content-box mt_60">
                <div className="text-box mb_130">
                  <p className="mb_30">
                    We manufacture, install, and maintain all types of passenger
                    elevators with a strong emphasis on safety. Our elevator
                    installations have been running smoothly without complaints
                    or hazards across various locations.
                  </p>

                  <p className="mb_30">
                    UNOSAFE Elevator Service Department offers preventive
                    maintenance programs for different variants of elevators. We
                    follow scientific maintenance methods and strict quality
                    checks to ensure maximum safety and reliability for all
                    users.
                  </p>

                  <p className="mb_30">
                    With our professional experience, we understand that delays
                    in civil and electrical work within elevator shafts can
                    impact vertical transport systems, and we work efficiently
                    to minimize such challenges.
                  </p>

                  <a href="/about" className="theme-btn">
                    <span>Read More</span>
                  </a>
                </div>

                {/* Funfacts */}
                <div className="funfact-content p_relative">
                  <div className="line-box">
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                  </div>

                  <div className="row clearfix">
                    {/* Funfact 1 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="75">
                              75
                            </span>
                          </div>
                          <p>ISO Certified Safety & Quality Standards</p>
                        </div>
                      </div>
                    </div>

                    {/* Funfact 2 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one l_60 p_relative">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="160">
                              160
                            </span>
                          </div>
                          <p>Professional Maintenance & Service Experts</p>
                        </div>
                      </div>
                    </div>

                    {/* Funfact 3 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="1.2">
                              1.2
                            </span>
                            <span className="symble">k</span>
                          </div>
                          <p>Safe Elevator Installations Across Locations</p>
                        </div>
                      </div>
                    </div>

                    {/* Funfact 4 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one l_60 p_relative">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="4.8">
                              4.8
                            </span>
                            <span className="symble">k</span>
                          </div>
                          <p>Trusted by Clients for Safe Elevator Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Funfacts */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
