import React, { useState } from "react";

import "./App.css";

import Body1 from "./Body1";
import Body3 from "./Body3";
import Navbar from "./Navbar";
import RectangleCard1 from "./RectangleCard1";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import PaymentIcon from "@mui/icons-material/Payment";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

function App() {
  const [first, setFirst] = useState([
    "Activity stream",
    "Public and private chat",
    "Event Scheduler",
    "Appointment scheduling",
    "No prior credit card required",
  ]);
  const [second, setSecond] = useState([
    "Group video calls",
    "Event Scheduler",
    "Expert on demand call",
    "Email support for 24/7",
    "Public and private chat",
  ]);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar></Navbar>
      <Body1></Body1>
      <Body3></Body3>
      <RectangleCard1></RectangleCard1>
      <div className="services">
        <div className="services__first">
          {first.map((line) => {
            return (
              <div className="services__firstItem">
                <CheckCircleIcon
                  style={{ color: "#9d0aff", width: 60, height: 50 }}
                ></CheckCircleIcon>
                <div>{line}</div>
              </div>
            );
          })}
        </div>
        <div className="services__second">
          {second.map((line) => {
            return (
              <div className="services__secondItem">
                <CheckCircleIcon
                  style={{ color: "#00f59b", width: 60, height: 50 }}
                ></CheckCircleIcon>
                <div>{line}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="supercharge">
        <div className="supercharge__header">
          Supercharge your workflow to get started
        </div>
        <div className="supercharge__para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel facere
          aperiam ullam beatae eveniet commodi maxime magnam cumque consectetur
          id.
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <EmailIcon></EmailIcon>
          <div>Email Management</div>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nostrum porro, dolor quo nemo laudantium tempora voluptates aut
            ipsum qui!
          </p>
        </div>
        <div className="card">
          <CalendarTodayIcon></CalendarTodayIcon>
          <div>Campaign Calender</div>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nostrum porro, dolor quo nemo laudantium tempora voluptates aut
            ipsum qui!
          </p>
        </div>
        <div className="card">
          <PersonIcon></PersonIcon>
          <div>Personal Assistance</div>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nostrum porro, dolor quo nemo laudantium tempora voluptates aut
            ipsum qui!
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <PaymentIcon></PaymentIcon>
          <div>Payment Feature</div>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nostrum porro, dolor quo nemo laudantium tempora voluptates aut
            ipsum qui!
          </p>
        </div>
        <div className="card">
          <AppsIcon></AppsIcon>
          <div>Utility Apps</div>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nostrum porro, dolor quo nemo laudantium tempora voluptates aut
            ipsum qui!
          </p>
        </div>
        <div className="card">
          <NotificationsIcon></NotificationsIcon>
          <div>Sale Notification</div>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nostrum porro, dolor quo nemo laudantium tempora voluptates aut
            ipsum qui!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
