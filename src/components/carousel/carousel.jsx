import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./carousel.css";

export default function Carousel({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    // For clear
    return () => clearInterval(interval);
  }, [products.length]);

  const goSlide = (index) => {
    setCurrentSlide(index);
  };
  const navigate = useNavigate();

  const handleDatailsClick = () => {
    navigate(`/productDetails/${products[currentSlide].productId}`);
  };

  return (
    <div className="carouselContainer">
      <div className="carouselDetails">
        <div className="carouselInfo">
          <p className="initialText">Melhores ofertas personalizadas</p>
          <h2 className="descPromotion">
            {products[currentSlide].descPromotion}
          </h2>
          <h6 className="descProduct">{products[currentSlide].descProduct} </h6>
          <button className="btnDetails" onClick={handleDatailsClick}>
            Mais detalhes
          </button>
        </div>

        <div className="carouselMain">
          <img className="mainImage" src={products[currentSlide].src} />
        </div>
      </div>
      <div className="indicators">
        {products.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
