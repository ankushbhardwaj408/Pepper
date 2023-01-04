import React, { useState } from "react";
import "./SquareCard3.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Squarecard3() {
  return (
    <div className="squareCard">
      <div className="outer">
        <div className="inner">
          <div>
            <strong>Your Task</strong>
          </div>
          <div className="inner__first">
            <div>
              <CheckCircleIcon
                style={{ color: "black", width: 60, height: 50 }}
              ></CheckCircleIcon>
            </div>
            <div className="para">
              <div>
                <strong>Get your soft done</strong>
              </div>
              <div>Completed</div>
            </div>
          </div>
          <div className="inner__second">
            <div>
              <CheckCircleIcon
                style={{ color: "purple", width: 60, height: 50 }}
              ></CheckCircleIcon>
            </div>
            <div className="para">
              <div>
                <strong>Get your soft done</strong>
              </div>
              <div>Done</div>
            </div>
          </div>

          <div className="inner__third">
            <div>
              <CheckCircleIcon
                style={{ color: "black", width: 60, height: 50 }}
              ></CheckCircleIcon>
            </div>
            <div className="para">
              <div>
                <strong>Get your soft done</strong>
              </div>
              <div>Completed</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <div className="text__header">Simple financial overview for you</div>
        <div className="text__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere
          aperiam ullam beatae eveniet commodi maxime magnam cumque consectetur
          id.
        </div>
        <div>
          <div className="services__secondItem">
            <CheckCircleIcon
              style={{ color: "#00f59b", width: 30, height: 25 }}
            ></CheckCircleIcon>
            <div>Create posts,reels and stories.</div>
          </div>
          <div className="services__secondItem">
            <CheckCircleIcon
              style={{ color: "#00f59b", width: 30, height: 25 }}
            ></CheckCircleIcon>
            <div>Post your Facebook posts dynamically.</div>
          </div>
          <div className="services__secondItem">
            <CheckCircleIcon
              style={{ color: "#00f59b", width: 30, height: 25 }}
            ></CheckCircleIcon>
            <div>Schedule any Twitter posts.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Squarecard3;
