import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../actions/user";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const {
    loading,
    message: alertMessage,
    error,
  } = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const alert = useAlert();
  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      alert.success(alertMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, alertMessage, dispatch]);
  return (
    // {loading}?<>Loading</>:
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form
          action=""
          className="contactContainerForm"
          onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Me</Typography>
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
