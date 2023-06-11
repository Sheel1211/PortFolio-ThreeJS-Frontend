import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import demoImg from "../../Images/logo.png";

const MyImg = ({ imagePath = "" }) => {
  return (
    <div>
      <img
    src={imagePath}
    alt="Mine"
    style={{
      width: '60px',
      height: '60px',
      left: '50%',
      marginLeft: '-30px',
      position: 'fixed',
      borderRadius: '50%',
    }}
  />
    </div>
  );
};
const TimeLine = ({ timelines }) => {
  return (
    <div>
      <VerticalTimeline lineColor={"purple"}>
        {timelines.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "hsl(250, 100%, 75%)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  hsl(250, 100%, 75%)",
            }}
            date={item.date.toString().split("T")[0]}
            dateStyle={{ color: "hsl(250, 100%, 75%" }}
            iconStyle={{
              background: "hsl(250, 100%, 75%)",
              color: "#fff",
              height: "1vm",
            }}
            icon={<MyImg imagePath={item.image.url} />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.date.toString().split("T")[0].split("-")[1] + " - " + item.date.toString().split("T")[0].split("-")[0]}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
