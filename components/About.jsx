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
                    Elevating imagination with safe and reliable lift solutions
                    <span>.</span>
                  </h2>
                </div>

                <ul className="list-style-one mb_100 clearfix">
                  <li>
                    Premium elevator manufacturing and installation services
                  </li>
                  <li>Certified engineers ensuring safety and precision</li>
                  <li>
                    Energy-efficient and space-saving vertical mobility systems
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
                    UNO SAFE Elevator Pvt Ltd specializes in delivering
                    advanced, dependable, and innovative elevator systems for
                    residential, commercial, and high-rise buildings. Our lift
                    solutions are engineered for smooth performance, maximum
                    safety, and long-term reliability.
                  </p>

                  <p className="mb_30">
                    From design and installation to modernization and
                    maintenance, our expert team provides end-to-end elevator
                    services tailored to enhance building efficiency and
                    passenger comfort.
                  </p>

                  <a href="/about" className="theme-btn">
                    <span>more about us</span>
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
                              00
                            </span>
                          </div>
                          <p>Industry Safety & Quality Recognitions</p>
                        </div>
                      </div>
                    </div>

                    {/* Funfact 2 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one l_60 p_relative">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="160">
                              00
                            </span>
                          </div>
                          <p>Certified Elevator Professionals</p>
                        </div>
                      </div>
                    </div>

                    {/* Funfact 3 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="1.2">
                              00
                            </span>
                            <span className="symble">k</span>
                          </div>
                          <p>Elevators Successfully Installed</p>
                        </div>
                      </div>
                    </div>

                    {/* Funfact 4 */}
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one l_60 p_relative">
                        <div className="inner-box">
                          <div className="count-outer">
                            <span className="odometer" data-count="4.8">
                              00
                            </span>
                            <span className="symble">k</span>
                          </div>
                          <p>Happy Clients & Building Partners</p>
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
