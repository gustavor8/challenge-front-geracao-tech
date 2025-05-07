import { useState, useEffect } from "react";
import "./productDetails.css";
import Assessment from "../assessment/assessment";
import Carousel from "../carousel/carousel.jsx";
import { mockProducts } from "../../../arquivos_testes/test.js";

export default function ProductDetails({ id }) {
  const [sizeTennis, setSizeTennis] = useState(0);
  const [indexColor, setIndexColor] = useState();
  const [selectedProduct, setSelectedProduct] = useState(0);

  console.log(selectedProduct);
  useEffect(() => {
    const found = mockProducts.find((prod) => prod.productId === id);
    setSelectedProduct(found);
  }, [id]);

  console.log(selectedProduct);

  if (!selectedProduct) return <h2>Buscando o produto no banco de dados.</h2>;

  const {
    title,
    images,
    description,
    assessment,
    model,
    mark,
    ref,
    realPrice,
    descontedPrice,
    sizes,
    colors,
  } = selectedProduct;

  return (
    <div className="ProductDetails">
      <section className="containerCarousel">
        <Carousel images={images}></Carousel>
      </section>

      <section className="containerInfo">
        <h2>{title}</h2>
        <p className="infoProduct">
          {model} | {mark} | REF:{ref}
        </p>
        <Assessment note={assessment}></Assessment>
        <h5 className="price">
          R$ <span className="descontedPrice">{descontedPrice}</span>{" "}
          <span className="realPrice">{realPrice}</span>
        </h5>
        <p className="infoTitle">Descrição do Produto</p>
        <p className="description">{description}</p>
        <div className="sizes">
          {sizes.map((size) => (
            <div
              key={size}
              className={`size ${sizeTennis === size ? "active" : ""}`}
              onClick={() => setSizeTennis(size)}
            >
              {size}{" "}
            </div>
          ))}
        </div>
        <div className="colors">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color ${indexColor == index ? "active" : ""}`}
              style={{ background: color }}
              onClick={() => setIndexColor(index)}
            ></div>
          ))}
        </div>
        <button type="submit" className="btnBuy">
          Comprar
        </button>
      </section>
    </div>
  );
}
