import React from "react";
import fotios from "../img/fotios2020Profile.png";

export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={fotios} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Fotis Tsakiris</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia!
          Sequi adipisci, cupiditate optio dicta animi hic consectetur sit,
          dolorum officiis recusandae, temporibus velit repellat atque? Harum
          alias molestias blanditiis.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Fotis Tsakiris</p>
            <p>: 45</p>
            <p>: Greek</p>
            <p>: Greek, English, Dutch</p>
            <p>: Lamprou Porfira 5</p>
            <p>: Greece, Holland</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}
