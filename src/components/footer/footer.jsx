import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logoFooter from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <>
      <div className="bg-neutral-800">
        <div
          className="text-white flex gap-70"
          style={{ padding: "50px 0px 50px 100px" }}
        >
          <div className="w-[30%]">
            <div style={{ marginBottom: "30px" }}>
              <img src={logoFooter} alt="" />
            </div>

            <p className="text-white" style={{ marginBottom: "30px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              repellat, omnis doloribus nihil odio itaque deleniti impedit magni
              nostrum rem porro distinctio atque voluptatem enim molestias quam
              consequatur illum quod.
            </p>

            <div className="flex gap-18">
              <button className="text-white text-3xl">
                <FaFacebook />
              </button>
              <button className="text-white text-3xl">
                <FaInstagram />
              </button>
              <button className="text-white text-3xl">
                <FaTwitter />
              </button>
            </div>
          </div>

          <div className="flex gap-30">
            <div>
              <h3
                className="text-xl font-bold"
                style={{ marginBottom: "30px" }}
              >
                Informação
              </h3>
              <ul>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Sobre Drip Store </h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Segurança</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Wishlist</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Blog</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Trabalhe Conosco</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Meus Pedidos</h4>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-xl font-bold"
                style={{ marginBottom: "30px" }}
              >
                Categorias
              </h3>
              <ul>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Camisetas</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Calças</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Bónes</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Headphones</h4>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <h4>Tênis</h4>
                </li>
              </ul>
            </div>

            <div className="w-[30%]">
              <h3
                className="text-xl font-bold"
                style={{ marginBottom: "30px" }}
              >
                Contato
              </h3>
              <p style={{ marginBottom: "15px" }}>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p>(85) 3051-3411</p>
            </div>
          </div>
        </div>

        <div
          className="border-t border-neutral-50"
          style={{ margin: "auto", width: "50%" }}
        >
          <h6
            className="text-white bg-neutral-800 text-center"
            style={{ padding: "20px" }}
          >
            @ 2022 Digital College
          </h6>
        </div>
      </div>
    </>
  );
}
