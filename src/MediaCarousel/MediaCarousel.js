import React, { useState } from "react";
import "./MediaCarousel.css"; // Ensure you have the CSS for styling these buttons as needed

const slideData = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/interior-church-architecture-background_1409-5538.jpg",
    thumb:
      "https://img.freepik.com/free-photo/interior-church-architecture-background_1409-5538.jpg",
    alt: "The Woods",
  },
  {
    id: 2,
    src: "https://t3.ftcdn.net/jpg/01/95/72/30/360_F_195723015_ola1OlHwWA1hzBmyjqEfx0sWctmUjopO.jpg",
    thumb:
      "https://t3.ftcdn.net/jpg/01/95/72/30/360_F_195723015_ola1OlHwWA1hzBmyjqEfx0sWctmUjopO.jpg",
    alt: "Cinque Terre",
  },
  {
    id: 3,
    src: "https://t4.ftcdn.net/jpg/02/97/78/03/360_F_297780357_pK8VCA7wctbTFusAGiCfcoxbJLRwC9Bs.jpg",
    thumb:
      "https://t4.ftcdn.net/jpg/02/97/78/03/360_F_297780357_pK8VCA7wctbTFusAGiCfcoxbJLRwC9Bs.jpg",
    alt: "Mountains and fjords",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNoJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    thumb:
      "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNoJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Northern Lights",
  },
  {
    id: 5,
    src: "https://www.shutterstock.com/image-photo/lone-wooden-church-dusk-sunset-600nw-1186359178.jpg",
    thumb:
      "https://www.shutterstock.com/image-photo/lone-wooden-church-dusk-sunset-600nw-1186359178.jpg",
    alt: "Nature and sunrise",
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/157315514/photo/easter-morning-with-the-sun-behind-a-church-steepl-cross.jpg?s=612x612&w=0&k=20&c=JIh1zw-Q8le8UIP6NKxrHGsjm1d1ALfQc4PEKBD2nU8=",
    thumb:
      "https://media.istockphoto.com/id/157315514/photo/easter-morning-with-the-sun-behind-a-church-steepl-cross.jpg?s=612x612&w=0&k=20&c=JIh1zw-Q8le8UIP6NKxrHGsjm1d1ALfQc4PEKBD2nU8=",
    alt: "Snowy Mountains",
  },
];

const MediaCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex < 1) {
      newIndex = slideData.length;
    } else if (newIndex > slideData.length) {
      newIndex = 1;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="container">
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className="mySlides fade"
          style={{ display: index + 1 === slideIndex ? "block" : "none" }}
        >
          <div className="numbertext">{`${index + 1} / ${
            slideData.length
          }`}</div>
          <img
            src={slide.src}
            style={{ width: "100%", height: "40rem" }}
            alt={slide.alt}
          />
        </div>
      ))}

      {/* Use button instead of <a> for prev and next controls */}
      <button className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </button>

      <div className="caption-container">
        <p id="caption">{slideData[slideIndex - 1]?.alt}</p>
      </div>

      <div className="row">
        {slideData.map((slide, index) => (
          <div key={slide.id} className="column">
            <img
              className={`demo cursor ${
                index + 1 === slideIndex ? "active" : ""
              }`}
              src={slide.thumb}
              style={{ width: "100%", height: "8rem" }}
              onClick={() => currentSlide(index + 1)}
              alt={slide.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;
