import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/images/logo-header.svg";
import "./Header.css";
import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const location = useLocation();
  const screenWidth = window.innerWidth;

  const navItems = [
    { nome: "Home", href: "/" },
    { nome: "Produtos", href: "/produtos" },
    { nome: "Categorias", href: "/categorias" },
    { nome: "Meus Pedidos", href: "/meuspedidos" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div
          className={`hamburger ${isMenuOpen ? "" : "open"}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
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

            <Link to="#">
              <CiSearch className="searchIcon" />
            </Link>
          </div>
          <button
            className={`searchButton ${
              location.pathname === "/produtos" ? "inputNavVisible" : ""
            }`}
          >
            <CiSearch size={25} />
          </button>
          <div className="login">
            <Link to="#">Cadastre-se</Link>
            <button>Entrar</button>
          </div>
          <div className="cart">
            <Link to="#">
              <BsCart4 size={20} className="cartIcon" />
            </Link>
          </div>
        </div>
      </header>
      {screenWidth > 768 ? (
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
      ) : (
        isMenuOpen && (
          <nav>
            <ul className="navList">
              {navItems.map(({ nome, href }) => (
                <li key={nome}>
                  <NavLink to={href} className="item" onClick={toggleMenu}>
                    {nome}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )
      )}

      {location.pathname === "/produtos" && (
        <div className="searchContainerNav">
          <input
            type="text"
            className="searchInput"
            placeholder="Pesquisar produto..."
          />

          <Link to="#">
            <CiSearch className="searchIcon" />
          </Link>
        </div>
      )}
    </>
  );
}
