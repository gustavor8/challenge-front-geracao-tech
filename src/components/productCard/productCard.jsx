import sapatoImagem from "../../assets/images/sapato-social.jpeg";

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
      {/* INFORMAÇÕES FICTICIAS/TESTES! */}

      <div className="w-[250px] rounded-[5%] mx-auto relative">
        {badge && (
          <div
            className="absolute top-3 left-3 font-bold text-sm bg-lime-200 text-gray-700 rounded-full"
            style={{ padding: "3px 5px" }}
          >
            {badgeText}
          </div>
        )}
        <img
          src={sapatoImagem}
          alt="Tênis"
          className="w-full p-3 rounded-[5%] shadow-md"
        />

        <div className="bg-white font-bold p-4">
          <h4 className="text-neutral-50">{category}</h4>
          <h3>{name}</h3>

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
