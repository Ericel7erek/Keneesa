import React, { useState } from "react";
import "./MediaCarousel.css"; // Ensure you create a corresponding CSS file

const MediaCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === items.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderItem = (item) => {
    if (item.type === "video") {
      return (
        <video controls>
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (item.type === "image") {
      return <img src={item.url} alt={item.altText} />;
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="carousel-item">{renderItem(items[currentIndex])}</div>
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default MediaCarousel;
