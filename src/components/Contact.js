import React, { usemessage, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Contact() {
  let status;

  const [message, setMessage] = useState({
    first_name: "",
    last_name: "",
    email: "",
    website: "",
    subject: "",
    message: "",
    email_sent: null,
    disable: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    document.querySelector("#success_message").style.visibility = "visible";
    Axios.post("/api/email", message)
      .then((res) => {
        status = res.status;
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setMessage({ ...message, [name]: value });
  }

  return (
    <div id="contact">
      <div id="contact_background">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white" }}
          id="back_link"
        >
          <div id="back_angle"></div>
          <div id="back">Back</div>
        </Link>
        <div id="message">
          <span id="send_me_a_message">Send me a message.</span>
          <br />I am open to job opportunities and freelance projects. If you
          have any queries kindly let me know in the form below and i will get
          back to you.
        </div>
        <div id="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">
              First Name: <span className="star">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              required
              value={message.first_name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="last_name">
              Last Name:<span className="star">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              required
              value={message.last_name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">
              Email:<span className="star">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={message.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              name="website"
              value={message.website}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="subject">
              Subject:<span className="star">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              value={message.subject}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="message" id="label_for_message">
              Message:<span className="star">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              maxLength="500"
              required
              value={message.mesage}
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Send" id="submit" />
          </form>
        </div>
        <div id="success_message">
          Your message has been received. Thank you!
        </div>
      </div>
    </div>
  );
}

export default Contact;
