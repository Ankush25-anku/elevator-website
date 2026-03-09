"use client";

import { FaElevator } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

export default function ChooseUs() {
  return (
    <section className="chooseus-section pt_120 pb_120">
      <div className="auto-container">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box mr_65 pr_35">
                <figure className="image image-hov-one">
                  <img src="/assets/images/resource/chooseus-1.jpg" alt="" />
                </figure>

                <div className="image-content align-3">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-4.png)",
                    }}
                  ></div>

                  <div className="icon-box">
                    <FaElevator size={52} />
                  </div>

                  <span className="text">
                    Safe <br />
                    & <br />
                    Reliable <br />
                    Lifts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_three">
              <div className="content-box">
                <div className="sec-title mb_12">
                  <span className="sub-title">
                    UNO Safe Elevator - Elevating Safety & Innovation
                  </span>

                  <h2>
                    Smart elevator solutions for modern spaces<span>.</span>
                  </h2>

                  <p className="mt_20">
                    At UNO Safe Elevator, we specialize in designing and
                    installing high-quality lift systems that combine safety,
                    performance, and modern technology. Our elevators are built
                    to ensure smooth vertical transportation while meeting the
                    highest standards of reliability and efficiency.
                  </p>
                </div>

                <div className="inner-box">
                  {/* ITEM 1 */}
                  <div className="single-item">
                    <div className="icon-box">
                      <FaElevator size={40} />
                    </div>

                    <h4>
                      <a href="/">Advanced elevator engineering</a>
                    </h4>

                    <p>
                      Precision-designed lifts ensuring smooth and safe
                      movement.
                    </p>
                  </div>

                  {/* ITEM 2 */}
                  <div className="single-item">
                    <div className="icon-box">
                      <FaTools size={40} />
                    </div>

                    <h4>
                      <a href="/">Reliable installation & service</a>
                    </h4>

                    <p>
                      Professional installation and dependable maintenance
                      support.
                    </p>
                  </div>

                  {/* ITEM 3 */}
                  <div className="single-item">
                    <div className="icon-box">
                      <FaShieldAlt size={40} />
                    </div>

                    <h4>
                      <a href="/">Safety-first elevator systems</a>
                    </h4>

                    <p>
                      Engineered with advanced safety features for secure
                      mobility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
