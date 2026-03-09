export default function CTA() {
  return (
    <section className="cta-section pt_150 pb_150">
      <div
        className="bg-layer parallax-bg"
        data-parallax='{"y": 100}'
        style={{
          backgroundImage: "url(/assets/images/background/cta-bg.jpg)",
        }}
      ></div>

      <div className="auto-container">
        <div className="content-box p_relative">
          <div className="rotate-box">
            <span className="curved-circle">uno safe elevator services.</span>

            <div className="icon-box">
              <img src="/assets/images/icons/logo-2.png" alt="" />
            </div>
          </div>

          <div className="sec-title light">
            <span className="sub-title">
              UNO Safe Elevator - Elevating Safety & Innovation
            </span>

            <h2 className="mb_45">
              Reliable elevator solutions for residential and commercial spaces
              <span>.</span>
            </h2>

            <a href="/" className="theme-btn">
              <span>Get a free elevator consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
