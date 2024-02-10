import React from "react";
import { NavLink } from "react-router-dom";

const Presentation = () => {
  return (
    <main className="presentation">
      <section className="encard-4-presentation">
        <h2>Qui suis je ?</h2>
      </section>

      <section className="parcours">
        <article>
          <p>En cours de rédaction</p>
        </article>
        <NavLink to="/contact">
          <button className="me-contacter" type="button">
            Me contacter
          </button>
        </NavLink>
      </section>
    </main>
  );
};

export default Presentation;
