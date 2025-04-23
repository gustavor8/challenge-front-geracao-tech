import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo-header.svg";
import "./Header.css";
import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const navItems = [
    { nome: "Home", href: "/" },
    { nome: "Produtos", href: "/produtos" },
    { nome: "Categorias", href: "/categorias" },
    { nome: "Meus Pedidos", href: "/meuspedidos" },
  ];

  return (
    <>
      <header>
        <div className="headerTop">
          <figure>
            <img src={logo} alt="Logo Digital Store" />
          </figure>
          <div className="searchContainer">
            <input
              type="text"
              className="searchInput"
              placeholder="Pesquisar produto..."
            />
            <a href="#">
              <CiSearch className="searchIcon" />
            </a>
          </div>

          <div className="login">
            <a href="#">Cadastre-se</a>
            <button>Entrar</button>
          </div>
          <div className="cart">
            <a href="#">
              <BsCart4 size={20} className="cartIcon" />
            </a>
          </div>
        </div>
        <nav>
          <ul className="navList">
            {navItems.map(({ nome, href }) => (
              <li key={nome}>
                <NavLink to={href} className="item">
                  {nome}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
