import "./HeadOfficeMap.css";

export default function HeadOfficeMap() {
  return (
    <section className="hofm_section">
      <div className="hofm_container">
        <h2 className="hofm_title">
          <span>Head</span> Office
        </h2>

        <div className="hofm_mapCard">
          <iframe
            title="UNOSAFE Elevator Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6400219482266!2d77.70619097484176!3d13.009718987305455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f477ccb2d1%3A0x47dfa3e7486ba4cb!2sUNOSAFE%20ELEVATOR%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1710000000000"
            className="hofm_iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}