import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logoFooter from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <div
      className="text-white bg-neutral-800 grid grid-cols-4"
      style={{ padding: "50px 0px 50px 100px" }}
    >
      <div className="w-[250px]">
        <div style={{ marginBottom: "30px" }}>
          <img src={logoFooter} alt="" />
        </div>

        <p className="text-white" style={{ marginBottom: "30px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repellat, omnis doloribus nihil odio itaque deleniti impedit magni
          nostrum rem porro distinctio atque voluptatem enim molestias quam
          consequatur illum quod.
        </p>
        <div className="flex" style={{gap:"76px"}}>
          <button className="text-white text-3xl">
            <FaFacebook />{" "}
          </button>
          <button className="text-white text-3xl">
            <FaInstagram />
          </button>
          <button className="text-white text-3xl">
            <FaTwitter />
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold"  style={{marginBottom:"12px"}}>Informação</h3>
        <ul>
          <li>
            <h4>Sobre Drip Store </h4>
          </li>
          <li>
            <h4>Segurança</h4>
          </li>
          <li>
            <h4>Wishlist</h4>
          </li>
          <li>
            <h4>Blog</h4>
          </li>
          <li>
            <h4>Trabalhe Conosco</h4>
          </li>
          <li>
            <h4>Meus Pedidos</h4>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold" style={{marginBottom:"12px"}}>Categorias</h3>
        <ul>
          <li>
            <h4>Camisetas</h4>
          </li>
          <li>
            <h4>Calças</h4>
          </li>
          <li>
            <h4>Bónes</h4>
          </li>
          <li>
            <h4>Headphones</h4>
          </li>
          <li>
            <h4>Tênis</h4>
          </li>
        </ul>
      </div>

      <div>
        <p>
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </p>
        <p>(85) 3051-3411</p>
      </div>
    </div>
  );
}
