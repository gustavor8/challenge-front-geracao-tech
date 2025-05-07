import { useState } from "react";
import "./carousel.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carouselContainer">
      {}
      <div className="carouselMain">
        <button className="navigationButton prevButton" onClick={previousImage}>
          ❮
        </button>
        <img
          className="mainImage"
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
        <button className="navigationButton nextButton" onClick={nextImage}>
          ❯
        </button>
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            src={image.src}
            alt={image.alt}
            onClick={() => goImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
