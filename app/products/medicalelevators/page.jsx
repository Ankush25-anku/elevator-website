import "../../../app/products/mr-geared-elevator/mrGeared.css";

export default function MRGearedElevator() {
  return (
    <section className="mrpd2-section">
      <div className="mrpd2-container">
        {/* HERO */}
        <div className="mrpd2-hero">
          {/* LEFT — IMAGES */}
          <div className="mrpd3-media">
            <img
              src="/assets/images/products/img267.jpg"
              alt="Hospital Elevator Cabin"
            />
            <img
              src="/assets/images/products/img270.jpg"
              alt="Hospital Elevator Interior"
            />
          </div>

          {/* RIGHT — INTRO CARD */}
          <div className="mrpd2-intro">
            <h1>Hospital Elevator</h1>
            <p className="mrpd2-tag">UNOSAFE Medical Lift Solutions</p>

            <p className="mrpd2-lead">
              UNOSAFE Hospital Elevators provide safe and easy transportation
              for patients, stretchers, wheelchairs, and bulky medical
              equipment. Designed for modern healthcare facilities, they offer a
              sophisticated appearance, ultra-smooth operation, and advanced
              safety standards.
            </p>

            <div className="mrpd2-badges">
              <span>Stretcher & Wheelchair Friendly</span>
              <span>Medical Equipment Ready</span>
              <span>Ultra Smooth & Silent Ride</span>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mrpd2-grid">
          {/* DETAILS */}
          <div className="mrpd2-content">
            <h2>System Overview</h2>

            <p>
              UNOSAFE Hospital Elevators are specially engineered to support
              critical medical environments by ensuring safe, reliable, and
              comfortable patient transport within healthcare buildings.
            </p>

            <div className="mrpd2-feature">
              <h3>Designed for Medical Transport</h3>
              <p>
                Engineered to carry patients on stretchers and wheelchairs with
                spacious cabin layouts and wide door openings ranging from{" "}
                <strong>900 mm to 1500 mm</strong>.
              </p>
              <p>
                Designed with the ability to safely move medical equipment and
                support up to <strong>26 passengers</strong>.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Advanced Safety & Smart Systems</h3>
              <p>
                Equipped with UCM Device (for car and counter track), Auto Brake
                System, Intelligent Control, and Live Monitoring Facility for
                maximum operational safety.
              </p>
              <p>
                Includes Live Intercom Facility and can be operated through a
                Mobile App for modern smart-building integration.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Comfort & Ride Quality</h3>
              <p>
                Ultra smooth ride performance ensures quiet, vibration-free, and
                comfortable transportation for patients and staff.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Safe & Medical-Grade Materials</h3>
              <p>
                Lampre sheets are used in cabin production to ensure safe human
                contact. These materials prevent skin-related issues commonly
                associated with PPGI surfaces.
              </p>
              <p>
                Materials meet S2 and D0 fire safety standards, ensuring that
                smoke generated during fire incidents is harmless and
                non-dripping — making the elevator one of the safest places in
                emergencies.
              </p>
            </div>
          </div>

          {/* SPEC TABLE */}
          <div className="mrpd2-specs">
            <h2>Technical Specifications</h2>

            <div className="mrpd2-table-wrap">
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th colSpan="8">Passenger / Stretcher Elevator</th>
                  </tr>
                  <tr>
                    <th>Capacity</th>
                    <th>Load</th>
                    <th colSpan="2">Shaft Size</th>
                    <th colSpan="2">Car Size</th>
                    <th colSpan="2">Entrance</th>
                  </tr>
                  <tr>
                    <th>Person</th>
                    <th></th>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>H</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15</td>
                    <td>1020</td>
                    <td>1900</td>
                    <td>3000</td>
                    <td>1000</td>
                    <td>2400</td>
                    <td>800</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>1360</td>
                    <td>2300</td>
                    <td>3000</td>
                    <td>1300</td>
                    <td>2400</td>
                    <td>900</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>1768</td>
                    <td>2600</td>
                    <td>3000</td>
                    <td>1600</td>
                    <td>2400</td>
                    <td>1000</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mrpd2-table-wrap" style={{ marginTop: "30px" }}>
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th colSpan="8">Automatic Centre Opening Door Lift</th>
                  </tr>
                  <tr>
                    <th>Capacity</th>
                    <th>Load</th>
                    <th colSpan="2">Shaft Size</th>
                    <th colSpan="2">Car Size</th>
                    <th colSpan="2">Entrance</th>
                  </tr>
                  <tr>
                    <th>Person</th>
                    <th></th>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>H</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15</td>
                    <td>1020</td>
                    <td>1700</td>
                    <td>3000</td>
                    <td>1000</td>
                    <td>2400</td>
                    <td>800</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>1360</td>
                    <td>1950</td>
                    <td>3000</td>
                    <td>1300</td>
                    <td>2400</td>
                    <td>900</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>1768</td>
                    <td>2100</td>
                    <td>3000</td>
                    <td>1600</td>
                    <td>2400</td>
                    <td>1000</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
