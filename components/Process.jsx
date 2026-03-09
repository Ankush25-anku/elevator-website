export default function Process() {
  return (
    <section className="process-section pt_120 pb_90">
      <div className="pattern-layer">
        <div
          className="pattern-1 float-bob-y"
          style={{ backgroundImage: "url(/assets/images/shape/shape-.png)" }}
        ></div>

        <div
          className="pattern-2 float-bob-x"
          style={{ backgroundImage: "url(/assets/images/shape/shape.png)" }}
        ></div>
      </div>

      <div className="auto-container">
        <div className="sec-title mb_65">
          <span className="sub-title">
            UNOSAFE Elevator Presence & Excellence
          </span>

          <h2>
            delivering safe, smooth & reliable <br />
            vertical transportation solutions<span>.</span>
          </h2>
        </div>

        <div className="row clearfix">
          {/* Step 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div className="process-block-one">
              <div className="inner-box">
                <span className="text">ABOUT</span>

                <h2>01</h2>

                <h3>headquarters & manufacturing excellence.</h3>

                <p>
                  UNOSAFE ELEVATOR is headquartered in Bengaluru with a
                  state-of-the-art manufacturing facility located in the Peenya
                  Industrial Area, ensuring world-class production standards.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div className="process-block-one">
              <div className="inner-box">
                <span className="text">NETWORK</span>

                <h2>02</h2>

                <h3>strong regional & national service coverage.</h3>

                <p>
                  We operate through strategic branch offices in RR Nagar, KR
                  Puram, Hosur, Coimbattore, Bhatkal, and Navi Mumbai, enabling
                  reliable service support across regions.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div className="process-block-one">
              <div className="inner-box">
                <span className="text">EXPERTISE</span>

                <h2>03</h2>

                <h3>proven engineering & prestigious projects.</h3>

                <p>
                  Backed by a highly experienced technical team, UNOSAFE has
                  executed high-rise projects up to 16 stops, powering major
                  government and private sector developments across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
