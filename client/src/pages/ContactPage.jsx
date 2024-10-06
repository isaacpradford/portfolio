import React from "react";
import ContactForm from "../Components/ContactForm";
import Socials from "../Components/Socials";

const ContactPage = () => {
  return (
    <div id="contact" className="b-contact">
      <div className="b-contact__content">
        <div className="b-contact__title">
          <p>Working on a project?</p>
          <h1>LET'S</h1>
          <h1>CONN</h1>
          <h1 className="b-contact__title--3">ECT!</h1>
        </div>

        <ContactForm />
      </div>

      <Socials />
    </div>
  );
};

export default ContactPage;
