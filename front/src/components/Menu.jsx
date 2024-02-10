import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";
import { useState } from "react";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const onClickToggle = () => {
    if (!toggleMenu) {
      setToggleMenu(toggleMenu);
      setShowMenu(!showMenu);
    }
  };

  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <section className="burger" onClick={onClickToggle}>
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bot"></span>
      </section>
      <nav>
        <section
          className={`menu ${showMenu ? "hidden" : "visible"}`}
          role="navigation"
        >
          <ul className="navbar_links">
            <li className="navbar_link">
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/particuliers">Particuliers</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/entreprises">Entreprises</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/vos-questions">Vos questions</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/articles">Articles</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/qui-je-suis">Qui je suis ?</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="navbar_link">
              <NavLink to="/profil">Mon profil</NavLink>
            </li>
          </ul>
        </section>
      </nav>

      <button className="connection">
        <NavLink to="/connexion">Se connecter</NavLink>
      </button>
    </header>
  );
};

export default Menu;
