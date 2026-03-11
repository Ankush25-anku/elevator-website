import "./OurBranches.css";

export default function OurBranches() {
  return (
    <section className="brnx_section">
      <div className="brnx_container">
        
        <h2 className="brnx_title">
          <span>Our</span> Branches
        </h2>

        <div className="brnx_grid">

          {/* RR Nagar */}
          <div className="brnx_item">
            <h3 className="brnx_name">RR Nagar</h3>
            <div className="brnx_mapWrap">
              <iframe
                title="RR Nagar Branch"
                src="https://www.google.com/maps?q=12.915904,77.520739&z=13&output=embed"
                loading="lazy"
                className="brnx_map"
              />
            </div>
          </div>

          {/* Magadi Road */}
          <div className="brnx_item">
            <h3 className="brnx_name">Magadi Road</h3>
            <div className="brnx_mapWrap">
              <iframe
                title="Magadi Road Branch"
                src="https://www.google.com/maps?q=12.96629,77.401065&z=13&output=embed"
                loading="lazy"
                className="brnx_map"
              />
            </div>
          </div>

          {/* Peenya */}
          <div className="brnx_item">
            <h3 className="brnx_name">Peenya</h3>
            <div className="brnx_mapWrap">
              <iframe
                title="Peenya Branch"
                src="https://www.google.com/maps?q=13.018857,77.483958&z=13&output=embed"
                loading="lazy"
                className="brnx_map"
              />
            </div>
          </div>

          {/* Bidarahalli */}
          <div className="brnx_item">
            <h3 className="brnx_name">
              upcoming Manufacturing Unit at Bidarahalli
            </h3>
            <div className="brnx_mapWrap">
              <iframe
                title="Bidarahalli Unit"
                src="https://www.google.com/maps?q=13.055556,77.723194&z=15&output=embed"
                loading="lazy"
                className="brnx_map"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}