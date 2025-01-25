import React from "react";
import "./HiddenQRCodePage.css";

function HiddenQRCodePage() {
  const handleButtonClick = () => {
    window.location.href = "/canuseeit"; // Redirect to another page
  };

  return (
    <div className="container">
      <div className="poster">
        {/* Poster Image */}
        <img
          src="qr.jpg" /* Replace with your poster image path */
          alt="Task Poster"
          className="poster-image"
        />

        {/* Hidden Go Button */}
        <button
          className="go-button"
          onClick={handleButtonClick}
          title="Inspect to reveal me!"
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default HiddenQRCodePage;
