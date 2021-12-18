import React, { useState } from "react";
import "./contact.css";
import MAIL_IMG from "../../image/mailz.jpeg";

const Contact = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = userForm;

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const formSubmint = (e) => {
    e.preventDefault();
    console.log(userForm);
  };

  return (
    <>
      <h1>Contact Me</h1>
      <div className="contact container-lg" id="contact">
        <div className="social-icons">
          <h2>
            Get In Touch <i class="fas fa-envelope"></i>
          </h2>
          <p className="icons">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-github-square"></i>
            <i class="fab fa-google-plus-square"></i>
          </p>
        </div>
        <div className="form-container">
          <div className="img-container">
            <h3>Send your Email Here!</h3>
            <img src={MAIL_IMG} alt="MAIL-IMG" className="b-block w-100" />
          </div>
          <form
            className="userForm"
            action="#"
            onSubmit={formSubmint}
            autoComplete="off"
          >
            <label for="name">Name</label>
            <input type="text" name="name" value={name} onChange={inputEvent} />
            <label for="email">E-mail</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputEvent}
            />
            <label for="subject">Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={inputEvent}
            />
            <label for="message">Message</label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={inputEvent}
            />
            <button className="btn-default" type="submit">
              Send<i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
