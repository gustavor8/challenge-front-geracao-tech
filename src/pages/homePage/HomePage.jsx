//Componets
import Carousel from "../../components/carousel/carousel";
import ProductCard from "../../components/productCard/productCard";

// img
import specialOffer from "../../assets/images/ofertaEspecial.png";

// fake data
import { productsPromotion, colections } from "../../../arquivos_testes/test";

//css
import "./homePage.css";

//icons
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPantsLight, PiBaseballCapDuotone } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { GiRunningShoe } from "react-icons/gi";

export default function HomePage() {
  const icons = [
    { icon: LiaTshirtSolid, label: "Camisetas" },
    { icon: PiPantsLight, label: "Calças" },
    { icon: PiBaseballCapDuotone, label: "Bonés" },
    { icon: ImHeadphones, label: "Headphones" },
    { icon: GiRunningShoe, label: "Tênis" },
  ];

  return (
    <>
      <Carousel products={productsPromotion}></Carousel>
      <div className="containerCollectionsFeatured">
        <h2
          style={{
            margin: "1rem 0 -0.5rem 1rem ",
            fontSize: "1.2rem",
            color: "#474747",
            fontWeight: "bolder",
          }}
        >
          Coleções em destaque
        </h2>
        <section className="featured">
          {colections.map(({ src, discount, id }) => (
            <div
              className="cardFeatured"
              style={{ backgroundImage: `url(${src})` }}
              key={id}
            >
              <div className="infos">
                <div className="discount">{discount}% OFF</div>
                <button
                  className="btnBuy"
                  onClick={() => alert(`Você clicou no produto com id ${id}`)}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="featuredIcons">
        <h2>Coleções em destaque</h2>
        <div className="icons">
          {icons.map((iconObj, index) => {
            const Icon = iconObj.icon;
            return (
              <div key={index} className="iconConteiner">
                <Icon size={65} />
                <span>{iconObj.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <section className="flex p-[1.3rem]  gap-1 flex-wrap justify-center items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>

      <section className="flex flex-col items-center justify-center md:flex-row md:justify-start gap-9 flex-wrap p-13">
        <figure className="w-[40%] flex justify-end items-center relative">
          <span
            className="absolute inset-0 rounded-[70%] md:p-2 md:w-[18.75rem] md:h-[18.75rem] md:inset-auto"
            style={{
              background:
                "linear-gradient(to bottom, rgba(200, 162, 200, 0.3), rgba(255, 255, 255, 0.1))",
              zIndex: 0,
            }}
          ></span>
          <img
            src={specialOffer}
            alt="Oferta Especial"
            className="w-[25rem] h-auto relative z-10"
          />
        </figure>
        <div className="w-[40%] justify-start gap-7">
          <h6 className="text-[var(--pinkPrimary)] font-bold">
            Oferta especial
          </h6>
          <h2 className="text-5xl text-[var(--dark-gray)]	">
            Air Jordan edição de colecionador
          </h2>
          <p className="whitespace-normal break-words py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <button className="transition-all duration-300 ease-in-out bg-[var(--pinkPrimary)] py-2 px-9 rounded-lg text-white font-bold hover:bg-[var(--secondaryPink)] cursor-pointer">
            Ver Oferta
          </button>
        </div>
      </section>
    </>
  );
}
