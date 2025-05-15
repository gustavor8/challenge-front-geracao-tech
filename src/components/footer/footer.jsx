import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logoFooter from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Coluna 1: Logo e redes sociais */}
        <div className="lg:w-1/3">
          <div className="mb-6">
            <img src={logoFooter} alt="Logo" className="w-40" />
          </div>

          <p className="mb-6 text-sm leading-relaxed w-[80%] md:w-[50%] lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repellat, omnis doloribus nihil odio itaque deleniti impedit magni
            nostrum rem porro distinctio atque voluptatem enim molestias quam
            consequatur illum quod.
          </p>

          <div className="flex gap-6">
            <button className="text-2xl hover:text-blue-500">
              <FaFacebook />
            </button>
            <button className="text-2xl hover:text-pink-500">
              <FaInstagram />
            </button>
            <button className="text-2xl hover:text-sky-400">
              <FaTwitter />
            </button>
          </div>
        </div>

        {/* Colunas de Links */}
        <div className="md:flex md:gap-12">
          <div className="mb-10 flex gap-12">
            <div className="flex-1 min-w-[220px]">
              <h3 className="text-lg font-bold mb-6">Informação</h3>
              <ul className="space-y-4 text-sm">
                <li>Sobre Drip Store</li>
                <li>Segurança</li>
                <li>Wishlist</li>
                <li>Blog</li>
                <li>Trabalhe Conosco</li>
                <li>Meus Pedidos</li>
              </ul>
            </div>

            {/* Categorias */}
            <div className="flex-1 min-w-[180px]">
              <h3 className="text-lg font-bold mb-6">Categorias</h3>
              <ul className="space-y-4 text-sm">
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bónes</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div className="min-w-[220px]">
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <p className="md:w-[80%] w-[85%] mb-4 text-sm">
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p className="text-sm">(85) 3051-3411</p>
          </div>
        </div>
      </div>

      <div className="m-auto border-t border-neutral-600 w-[80%] p-3">
        <p className="text-center text-sm py-4">© 2022 Digital College</p>
      </div>
    </footer>
  );
}
