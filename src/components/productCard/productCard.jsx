import sapatoImagem from "../../assets/images/K-wiss.jpeg";
import "./productCard.css";

export default function ProductCard({
  category = "Tênis",
  name = "K-Wiss V8 Masculino",
  priceFull = "$200",
  priceDiscount = "$100",
  badge,
  badgeText = "30% OFF",
}) {
  return (
    <>
  

      <div className="w-[250px] rounded-[5%] mx-auto relative">
        {badge && (
          <div
            className="absolute top-3 left-3 font-bold text-sm bg-lime-200 text-gray-700 rounded-full"
            style={{ padding: "3px 5px" }}
          >
            {badgeText}
          </div>
        )}

  
        <div className="bg-white px-4 py-10">
          <img
            src={sapatoImagem}
            alt="Tênis"
            className="w-full"
          />
        </div>

      
        <div className="font-bold p-4">
          <h4 className="text-neutral-400 font-inter text-base">{category}</h4>
          <h3 className="font-medium text-lg">{name}</h3>

          <div className="flex gap-2">
            {badge ? (
              <>
                <p className="line-through">{priceFull}</p>
                <p>{priceDiscount}</p>
              </>
            ) : (
              <p className="PriceStandard">{priceFull}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
