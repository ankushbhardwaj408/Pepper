import React from "react";
import "./RectangleCard1.css";
function RectangleCard1() {
  return (
    <div className="rectangle1">
      <div className="first">A nice and simple financial overview</div>
      <div className="second">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta
        possimus ullam quia rerum laborum similique repellat magni, quod
        impedit?
      </div>
      <div className="third">
        <div>
          <h1 style={{ color: "white" }}>120+</h1>
          <p style={{ color: "#d5d1da" }}>Useful widgets</p>
        </div>
        <div>
          <h1 style={{ color: "white" }}>20+</h1>
          <p style={{ color: "#d5d1da" }}>Integration</p>
        </div>
        <div>
          <h1 style={{ color: "white" }}>65+</h1>
          <p style={{ color: "#d5d1da" }}>Features out</p>
        </div>
      </div>
    </div>
  );
}

export default RectangleCard1;
