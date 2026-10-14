import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="veda-page-hero">
        <div className="container" data-aos="fade-up">
          <span className="veda-eyebrow">LET'S CONNECT</span>
          <h1>Tell us about <em>your space.</em></h1>
          <p>From a single statement piece to a complete home, let's start a conversation.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="veda-eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
            <h2>Every beautiful space begins with a conversation.</h2>
            <p>
              Share your ideas, room requirements or questions about our
              collections. Our team can follow up about your enquiry.
            </p>

            <div className="veda-contact-detail">
              <span>01</span>
              <div><h3>Design enquiries</h3><p>Discuss your space, style and project requirements.</p></div>
            </div>
            <div className="veda-contact-detail">
              <span>02</span>
              <div><h3>Product assistance</h3><p>Ask about materials, dimensions and product availability.</p></div>
            </div>
            <div className="veda-contact-detail">
              <span>03</span>
              <div><h3>Showroom visits</h3><p>Contact us to discuss arranging a visit.</p></div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form className="veda-contact-form" onSubmit={handleSubmit}>
              <h2>Start your enquiry</h2>
              <p>Fields marked with * are required.</p>

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name">Full name *</label>
                  <input id="name" name="name" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">Email address *</label>
                  <input id="email" name="email" type="email" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="phone" type="tel" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="interest">I'm interested in *</label>
                  <select id="interest" name="interest" className="form-select" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Furniture and decor</option>
                    <option>Complete home interiors</option>
                    <option>Living room design</option>
                    <option>Bedroom design</option>
                    <option>Pooja room design</option>
                    <option>Existing cart enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea id="message" name="message" className="form-control" rows="5" required />
                </div>
                <div className="col-12">
                  <button className="veda-button" type="submit">Submit Enquiry ↗</button>
                </div>
              </div>

              {submitted && (
                <p className="veda-form-success" role="status">
                  Thank you! Your enquiry has been prepared in this demo.
                  Connect a backend or form service to deliver submissions.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}