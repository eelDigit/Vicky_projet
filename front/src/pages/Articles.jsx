import React from "react";
import { NavLink } from "react-router-dom";

const Articles = () => {
  return (
    <main className="articles">
      <section className="encard-articles">
        <article>
          <h1>
            Psychologie du travail : la santé au travail et la santé du travail
          </h1>
          <p>Le travail est éminemment social, il est donc protecteur.</p>
          <p>
            Prendre soin du travail et des relations interpersonnelles sont des
            clés essentielles pour construire et maintenir la santé des
            personnes et garantir le bon fonctionnement d'une entreprise.
          </p>
          <p>
            La psychologie du travail s'intéresse à ces liaisons et déliaisons
            qui traversent l'activité de chacun afin de permettre l'équilibre.
          </p>
        </article>
      </section>

      <section className="articles-button">
      <NavLink to="/tms"><button className="tms">Troubles musculo-squettiques</button></NavLink>
      <NavLink to="/burn-out"><button className="burn-out">Burn out</button></NavLink>
      <NavLink to="/changement-organisation-de-travail"><button className="work-organization">
          Changement d’organisation de travail
        </button></NavLink>
        <NavLink to="/stress"><button className="stress">
          <span>Stress</span>
        </button></NavLink>
        <NavLink to="/skills"><button className="skills"></button></NavLink>
        <NavLink to="/rps"><button className="rps"></button></NavLink>
        <NavLink to="/harassment">
          <button className="harassment-firm" >Harcèlement moral ou sexuel</button>
        </NavLink>
      </section>
    </main>
  );
};

export default Articles;
