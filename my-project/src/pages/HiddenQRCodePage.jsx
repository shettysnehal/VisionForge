import React, { useState } from "react";
import "./HiddenQRCodePage.css";

function HiddenQRCodePage() {
  const [showImage, setShowImage] = useState(false); // State to control image visibility

  const handleButtonClick = () => {
    setShowImage(true); // Show the image when the button is clicked
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

        {/* Show Image */}
        {showImage && (
          <img
            src="scanner.png" /* Replace with your hidden image path */
            alt="Hidden Content"
            className="hidden-image"
          />
        )}
      </div>
    </div>
  );
}

export default HiddenQRCodePage;
