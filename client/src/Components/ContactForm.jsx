import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const ContactForm = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const isEmailSent = sessionStorage.getItem("emailSent");
    if (isEmailSent) {
      setEmailSent(true);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (emailSent) {
      alert("You've already sent an email!");
      return;
    }

    validateForm();

    emailjs
      .sendForm(SERVICE_ID, "template_080jx5t", form.current, PUBLIC_KEY)
      .then(
        (result) => {
          sessionStorage.setItem("emailSent", "true");
          setEmailSent(true);
          form.current.reset();
          alert(
            "Thank you for the email, and you can expect a response within 1-3 business days!"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validateForm = () => {
    const nameInput = form.current.user_name;
    const emailInput = form.current.user_email;
    const messageInput = form.current.message;

    if (emailSent) {
      alert("You have already sent an email. Please wait.");
      return false;
    }

    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      messageInput.value.trim() === ""
    ) {
      alert("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  };

  return (
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        className="form-input"
        type="text"
        name="user_name"
        required
        placeholder="Name"
      />
      <label>Email</label>
      <input
        className="form-input"
        type="email"
        name="user_email"
        required
        placeholder="Email"
      />
      <label>Message</label>
      <textarea
        className="form-input"
        name="message"
        required
        placeholder="Message"
      />
      <input type="submit" value="Send" className="formSend" />
    </form>
  );
};

export default ContactForm;
