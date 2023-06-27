import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { MdKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { addTimeline, deleteTimeline, getUser } from "../../actions/user";
import "./adminTimeline.css";
const Timeline = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { message, error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");
  const [check, setCheck] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    let sDate = new Date(startDate);
    let eDate = new Date(endDate);

    if (sDate > eDate) {
      alert.error("Start Date must be greater than End Date");
      return;
    }

    if (check) {
      const isPresent="Present";
      await dispatch(addTimeline(title, description, image, startDate, isPresent));
    }
    else{
      await dispatch(addTimeline(title, description, image, startDate, endDate));
      
    }


    dispatch(getUser());
  };
  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch]);
  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="file"
            placeholder="Image"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept="image/*"
          />

          <div className="dateDiv">
            <Typography variant="h5">Start Date</Typography>
            <input
              type="date"
              placeholder="Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="adminPanelInputs"
            />
          </div>

          <div className="dateDiv">
            <Typography variant="h5">End Date</Typography>
            <input
              type="date"
              placeholder="Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="adminPanelInputs"
              disabled={check}
            />
          </div>
          <div className="checkDiv">
            <Typography variant="h5">Currently Working</Typography>
            <input
              type="checkbox"
              value={check}
              onChange={(e) => setCheck(!check)}
              className="adminPanelInputs"
            />
          </div>

          <Link to="/Account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>
        <div className="adminPanelYoutubeVideos">
          {user &&
            user.timeline &&
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.startDate.toString().split("T")[0]}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  to
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.currentlyWorking===true?"Present":item.endDate.toString().split("T")[0]}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
