export default function PageTitle() {
  return (
    <section className="page-title pl_100 centred">
      <div className="outer-container pt_120 pb_130 p_relative">
        <div
          className="bg-layer"
          style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}
        ></div>

        <div className="auto-container">
          <div className="content-box">
            <h1>
              our projects<span>.</span>
            </h1>

            <ul className="bread-crumb">
              <li><a href="index.html">home</a></li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}