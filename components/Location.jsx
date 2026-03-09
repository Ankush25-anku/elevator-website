export default function Location() {
  return (
    <section className="location-section pb_120">
      <div className="pattern-layer">
        <div
          className="pattern-1 float-bob-y"
          style={{
            backgroundImage: "url(/assets/images/shape/shape-6.png)",
          }}
        ></div>

        <div
          className="pattern-2 float-bob-x"
          style={{
            backgroundImage: "url(/assets/images/shape/shape-7.png)",
          }}
        ></div>
      </div>

      <div className="auto-container">
        <div className="inner-container">
        <div className="map-container">
  <iframe
    src="https://www.google.com/maps?q=Shri+Krishna+Prime,+Basavanapura+Main+Rd,+Bengaluru&output=embed"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          <div className="location-inner">
            <div className="single-location">
              <span className="pin"></span>
              <div className="location-text">
                <h6>UNO Safe Elevator Office</h6>

                <p>
                  <a
                    href="https://www.google.com/maps?daddr=Shri+Krishna+Prime,+No+28,+4th+floor,+24th+cross,+Basavanapura+Main+Rd,+opposite+National+Sports+%26+Cultural+Trust,+Bengaluru,+Karnataka+560036"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shri Krishna Prime, 4th Floor, Basavanapura Main Rd,
                    Bengaluru
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="big-text">
        Elevating safety & innovation! Elevating safety & innovation! Elevating
        safety & innovation! Elevating safety & innovation! Elevating safety &
        innovation!
      </span>
    </section>
  );
}
