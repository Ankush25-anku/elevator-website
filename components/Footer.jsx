export default function Footer() {
  return (
    <footer className="main-footer pt_65">
      <div className="auto-container">
        <figure className="image-box">
          <img src="/assets/images/resource/footer-1.jpg" alt="" />
        </figure>

        <div className="widget-section p_relative pt_90 pb_90">
          <div className="row clearfix">
            {/* About Widget */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget">
                <div className="widget-title">
                  <h6>About</h6>
                </div>

                <p>
                  We adhere to ISO 9001 : 2015. We manufacture, install and
                  maintain all types of passenger elevators. We focus purely on
                  safe passenger elevators.
                </p>

                <div className="footer-divider"></div>

                <div className="widget-title mt_30">
                  <h6>Useful links</h6>
                </div>

                <ul className="links-list clearfix footer-links">
                  <li>
                    <a href="#">Bangalore</a>
                  </li>
                  <li>
                    <a href="#">Chennai</a>
                  </li>
                  <li>
                    <a href="#">Kerala</a>
                  </li>
                  <li>
                    <a href="#">Andhra Pradesh</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h6>Quick links</h6>
                </div>

                <ul className="links-list clearfix footer-links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/products">Our Products</a>
                  </li>
                  <li>
                    <a href="/career">Career</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* QR Code */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget">
                <div className="widget-title">
                  <h6>QR Code</h6>
                </div>

                <figure>
                  <img
                    src="/assets/images/qrcode.png"
                    alt="QR Code"
                    className="qr-image"
                  />
                </figure>
              </div>
            </div>

            {/* Address */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget">
                <div className="widget-title">
                  <h6>Address</h6>
                </div>

                <p>
                  Shri Krishna Prime, No 28, 4th floor, 24th cross, Basavanapura
                  Main Rd, opposite National Sports & Cultural Trust, Bengaluru.
                </p>

                <div className="footer-contact mt_20">
                  <p className="footer-label">Phone :</p>
                  <p>
                    <a href="tel:+919606639933">+91 - 9606639933</a>
                  </p>
                  <p>
                    <a href="tel:+918296206645">+91 - 8296206645</a>
                  </p>
                  <p>
                    <a href="tel:+919632831433">+91 - 9632831433</a>
                  </p>
                  <p>
                    <a href="tel:+919986962476">+91 - 9986962476</a>
                  </p>

                  <div className="footer-dash"></div>

                  <p className="footer-label">Toll Free No. :</p>
                  <p>
                    <a href="tel:18005998246">18005998246</a>
                  </p>

                  <div className="footer-dash"></div>

                  <p className="footer-label">Mail :</p>
                  <p>
                    <a href="mailto:info@unosafeelevator.com">
                      info@unosafeelevator.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:unosafeads@gmail.com">
                      unosafeads@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:unosafeelevator@gmail.com">
                      unosafeelevator@gmail.com
                    </a>
                  </p>

                  <div className="footer-dash"></div>

                  <p className="footer-label">Website :</p>
                  <p>
                    <a href="https://unosafeelevator.com">
                      unosafeelevator.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-inner">
            <div className="copyright">
              <p>
                Copyrights 2026{" "}
                <span className="footer-brand">Unosafe Elevator</span> All
                Rights Reserved.
              </p>
            </div>

            <div className="designer">
              <p>
                Designed by :{" "}
                <span className="footer-brand">
                  RCERP TECHNOLOGIES Pvt. Ltd.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
