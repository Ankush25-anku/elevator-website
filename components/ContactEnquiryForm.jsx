import "./ContactEnquiryForm.css";
export default function ContactEnquiryForm() {
  return (
    <section className="ceqf_section">
      <div className="ceqf_wrapper">
        <div className="ceqf_header">
          <p className="ceqf_subtitle">Get In Touch With Us</p>
          <h2 className="ceqf_title">
            <span>Make</span> Online Enquiry?
          </h2>
        </div>

        <div className="ceqf_card">
          <form className="ceqf_form">
            <div className="ceqf_grid">
              <input
                type="text"
                placeholder="First Name"
                className="ceqf_input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="ceqf_input"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="ceqf_input"
              />
              <input type="text" placeholder="Product" className="ceqf_input" />
            </div>

            <textarea
              placeholder="Message"
              className="ceqf_textarea"
            ></textarea>

            <div className="ceqf_btnwrap">
              <button type="submit" className="ceqf_btn">
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
