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
              src="/assets/images/products/img251.jpg"
              alt="MRL Gearless Elevator"
            />
            <img
              src="/assets/images/products/img252.jpg"
              alt="MRL Gearless Machine System"
            />
          </div>

          {/* RIGHT — INTRO CARD */}
          <div className="mrpd2-intro">
            <h1>Machine Room-Less Gearless Elevator</h1>
            <p className="mrpd2-tag">MRL Gearless Technology</p>

            <p className="mrpd2-lead">
              MRL (Machine Room-Less) gearless elevators eliminate the need for
              a dedicated machine room by integrating the elevator machinery
              directly into the hoistway or shaft, enabling efficient space
              utilization and modern building integration.
            </p>

            <div className="mrpd2-badges">
              <span>Space Saving Design</span>
              <span>Energy Efficient</span>
              <span>Smooth & Silent Ride</span>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mrpd2-grid">
          {/* DETAILS */}
          <div className="mrpd2-content">
            <h2>System Overview</h2>

            <p>
              <strong>MRL (Machine Room-Less) gearless elevators</strong> are a
              type of elevator system that eliminates the need for a dedicated
              machine room by integrating the elevator’s machinery into the
              hoistway or shaft. These elevators are powered by advanced
              gearless traction machines.
            </p>

            <div className="mrpd2-feature">
              <h3>Gearless Traction Machine</h3>
              <p>
                This is the heart of the elevator system. The gearless traction
                machine consists of a permanent magnet synchronous motor (PMSM)
                directly coupled to a traction sheave, delivering smooth,
                precise, and highly efficient operation.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Control System</h3>
              <p>
                The control system manages elevator operations including
                starting, stopping, and levelling. It also monitors safety
                features and may incorporate destination dispatching algorithms
                for efficient passenger transportation.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Counterweight</h3>
              <p>
                A counterweight balances the weight of the elevator car, making
                it easier for the motor to lift and lower the car. This reduces
                motor strain and significantly improves energy efficiency.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Performance & Advantages</h3>
              <p>
                Overall, MRL gearless elevators offer a combination of space
                savings, energy efficiency, and smooth operation, making them an
                attractive choice for modern building designs.
              </p>
              <p>
                Some gearless MRL elevators can reach speeds of up to{" "}
                <strong>10 meters per second (m/s)</strong> or more. However,
                typical commercial speeds range between{" "}
                <strong>1 m/s to 4 m/s</strong>. Gearless elevators can travel
                over <strong>500 meters</strong>.
              </p>
              <p>
                In modern skyscrapers, gearless elevators can travel hundreds of
                meters vertically, serving buildings with dozens or even
                hundreds of floors. Maximum travel height depends on factors
                such as elevator manufacturer, motor power, cable strength,
                safety systems, and other design considerations.
              </p>
            </div>
          </div>

          {/* SPEC TABLE (UNCHANGED) */}
          <div className="mrpd2-specs">
            <h2>Technical Specifications</h2>

            <div className="mrpd2-table-wrap">
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th rowSpan="2">Capacity</th>
                    <th rowSpan="2">Load</th>
                    <th colSpan="2">Shaft Size</th>
                    <th colSpan="2">Car Size</th>
                    <th colSpan="2">Entrance</th>
                    <th rowSpan="2">Type</th>
                  </tr>
                  <tr>
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
                    <td>4</td>
                    <td>272</td>
                    <td>1500</td>
                    <td>1200</td>
                    <td>1100</td>
                    <td>700</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>340</td>
                    <td>1500</td>
                    <td>1350</td>
                    <td>1100</td>
                    <td>850</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>408</td>
                    <td>1500</td>
                    <td>1500</td>
                    <td>1100</td>
                    <td>1000</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>544</td>
                    <td>1800</td>
                    <td>1800</td>
                    <td>1100</td>
                    <td>1300</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>680</td>
                    <td>2100</td>
                    <td>1800</td>
                    <td>1350</td>
                    <td>1300</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>884</td>
                    <td>1800</td>
                    <td>2500</td>
                    <td>1100</td>
                    <td>2000</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>1088</td>
                    <td>2100</td>
                    <td>2500</td>
                    <td>1300</td>
                    <td>2000</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>1360</td>
                    <td>2300</td>
                    <td>2500</td>
                    <td>1500</td>
                    <td>2000</td>
                    <td>900</td>
                    <td>2000</td>
                    <td>AC0</td>
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
