import "./ContactEnquiryForm1.css";

export default function ContactEnquiryForm1() {
  return (
    <section className="ceqf_section">
      <div className="ceqf_wrapper">
        <div className="ceqf_header">
          <p className="ceqf_subtitle">Join Our Team</p>
          <h2 className="ceqf_title">
            <span>Apply</span> For Careers
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

              <input
                type="text"
                placeholder="Position Applying For"
                className="ceqf_input"
              />
            </div>

            <textarea
              placeholder="Tell us about yourself"
              className="ceqf_textarea"
            ></textarea>

            <div className="ceqf_actions">
              {/* Upload Resume */}
              <div className="ceqf_upload">
                <label htmlFor="fileUpload" className="ceqf_upload_btn">
                  Upload Resume
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  className="ceqf_file_input"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="ceqf_btn">
                APPLY NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
