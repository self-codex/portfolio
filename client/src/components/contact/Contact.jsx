import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import MAIL_IMG from "../../image/mailz.jpeg";

const Contact = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const { name, email, subject, company, message } = userForm;

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const formSubmint = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3030/mail", userForm);
  };

  return (
    <>
      <h1>Contact Me</h1>
      <div className="contact container-lg" id="contact">
        <div className="social-icons">
          <h2>
            Get In Touch <i className="fas fa-envelope"></i>
          </h2>
          <p className="icons">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-github-square"></i>
            <i className="fab fa-google-plus-square"></i>
          </p>
        </div>
        <div className="form-container">
          <div className="img-container">
            <h3>Send your Email Here!</h3>
            <img src={MAIL_IMG} alt="MAIL-IMG" className="b-block w-100" />
          </div>
          <form
            className="userForm"
            method="post"
            onSubmit={formSubmint}
            autoComplete="off"
          >
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={inputEvent} />
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputEvent}
            />
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={inputEvent}
            />
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={inputEvent}
            />
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={inputEvent}
            />
            <button className="btn-default" type="submit">
              Send<i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
