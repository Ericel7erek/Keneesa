import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    'url("https://upload.wikimedia.org/wikipedia/commons/5/5e/Luxembourg_Elvange_%28Beckerich%29_church_wide.jpg")',
    'url("https://cdn.pixabay.com/photo/2017/09/04/09/38/crosses-2713356_640.jpg")',
    'url("https://t4.ftcdn.net/jpg/02/97/78/03/360_F_297780357_pK8VCA7wctbTFusAGiCfcoxbJLRwC9Bs.jpg")',
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Function to change the image
    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set the interval
    intervalRef.current = setInterval(changeImage, 5000);

    // Clear interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Pause interval function
  const pauseSlideshow = () => {
    clearInterval(intervalRef.current);
  };

  // Resume interval function
  const resumeSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  return (
    <div className="Container">
      <div
        id="imageSlider"
        className="image-slider"
        style={{ backgroundImage: images[currentIndex] }}
        onMouseEnter={pauseSlideshow}
        onMouseLeave={resumeSlideshow}
      >
        <div className="layer"></div>
      </div>
      <div className="centered">الكنيسة</div>
    </div>
  );
};

export default ImageSlider;
