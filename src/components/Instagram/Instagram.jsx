import React from "react";
import "./Instagram.css";
const Instagram = () => {
  return (
    <div className="main-container">
      <div className="container1">
        <div className="img-container">
          <img className="img1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
            alt="Instagram Logo"
          />
        </div>
        <div className="fix">
          <button className="follow-btn1">
            <a
              href="https://www.instagram.com/pulse.mckvie?igsh=MWt6OXNwa3h6OG4ybA=="
              target="_blank"
              rel="noreferrer"
            >
              Follow Us
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
