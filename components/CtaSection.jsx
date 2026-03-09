export default function CtaSection() {
  return (
    <section className="cta-section pt_150 pb_150">
      <div
        className="bg-layer parallax-bg"
        data-parallax='{"y": 100}'
        style={{ backgroundImage: "url(assets/images/background/cta-bg.jpg)" }}
      ></div>

      <div className="auto-container">
        <div className="content-box p_relative">
          
          <div className="rotate-box">
            <span className="curved-circle">
              konsteer construction services.
            </span>
            <div className="icon-box">
              <img src="assets/images/icons/icon-1.png" alt="" />
            </div>
          </div>

          <div className="sec-title light">
            <span className="sub-title">
              Konsteer Construction - Raising The Industry Bar
            </span>

            <h2 className="mb_45">
              From concept to completion, we've got you covered
              <span>.</span>
            </h2>

            <a href="index.html" className="theme-btn">
              <span>get free quote</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}