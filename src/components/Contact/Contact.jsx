import { Button, Typography } from "@mui/material";
import React from "react";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const contactFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form
          action=""
          className="contactContainerForm"
          onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
