import { MdElevator } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

export default function Features() {
  return (
    <section className="feature-section pt_120 pb_80">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div
              className="feature-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <MdElevator size={64} />
                </div>

                <h3>
                  <a href="/">
                    reliable <br /> elevator systems.
                  </a>
                </h3>

                <p>
                  We provide safe, smooth, and efficient lift solutions designed
                  for residential, commercial, and high-rise buildings.
                </p>

                <div className="link-box">
                  <a href="/">
                    <span>learn more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div
              className="feature-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <FaTools size={64} />
                </div>

                <h3>
                  <a href="/">
                    professional <br /> lift installation.
                  </a>
                </h3>

                <p>
                  Our expert engineers ensure precise installation of elevators
                  with advanced technology and strict safety standards.
                </p>

                <div className="link-box">
                  <a href="/">
                    <span>learn more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div
              className="feature-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <GiAutoRepair size={64} />
                </div>

                <h3>
                  <a href="/">
                    lift maintenance <br /> & modernization.
                  </a>
                </h3>

                <p>
                  We offer reliable maintenance, repair, and modernization
                  services to keep elevators safe, efficient, and long-lasting.
                </p>

                <div className="link-box">
                  <a href="/">
                    <span>learn more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
