import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
const ContactUs = () => {
  // // Placeholder function to handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert("Form submitted. Thank you!");
  //   // Here, you'd typically handle the form submission, e.g., sending data to a server
  // };

  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <ul className="ul" style={{ listStyle: "none" }}>
          <li className="item">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </li>
          <li className="item">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      <div className="directions">
        <h2>Directions</h2>
        {/* Example using an embedded Google Maps iframe. Replace the src with your location. */}
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.71104496562!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1614782345678!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
