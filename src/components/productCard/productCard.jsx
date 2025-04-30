import sapatoImagem from "../../assets/images/sapato-social.jpeg";
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
      {/* INFORMAÇÕES FICTICIAS/TESTES! */}

      <div className="Card">
        {badge && <div className="CardBadge">{badgeText}</div>}
        <img src={sapatoImagem} alt="Tênis" className="CardImage" />

        <div className="CardText">
          <h4>{category}</h4>
          <h3>{name}</h3>

          <div className="CardPrice">
            {badge ? (
              <>
                <p className="PriceFull">{priceFull}</p>
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
