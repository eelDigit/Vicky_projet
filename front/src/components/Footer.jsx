import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to="/mentions-Legales">Mentions légales</NavLink>
        </li>
        <li>
          <NavLink to="/politique-de-confidentialite">
            Politique de confidentialité
          </NavLink>
        </li>
        <li>
          <NavLink to="/CGU">CGU</NavLink>
        </li>
        <li>
          <NavLink to="/planSite">Plan du site</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
