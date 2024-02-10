import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="accueil">
      <section className="encard">
        <article>
          <h1>Psychologue spécialiste de la santé au travail, c'est quoi ?</h1>
          <p>
            Les psychologues spécialisés en santé au travail sont
            des psychologues du travail, ils exercent un rôle essentiel à la
            fois en entreprise et en consultation individuelle.
          </p>
          <p>
            En consultation individuelle, le psychologue du travail aide les
            individus à gérer le stress, à développer leurs compétences en
            gestion de carrière, et à trouver des solutions aux défis
            professionnels.
          </p>
          <p>
            En entreprise, ils se consacrent à améliorer le bien-être des
            employés, à résoudre les conflits, à favoriser un environnement de
            travail sain, et à accroître la productivité.
          </p>
          <p>
            Ils jouent un rôle clé dans la promotion de la santé mentale au
            travail et dans l’optimisation des performances individuelles et
            organisationnelles.
          </p>
          <p>
            La force des psychologues du travail étant leur connaissance accrue
            du fonctionnement interne des organisations mêlée à leur formation
            et leurs expériences solides dans divers domaines de la
            psychologie. 
          </p>
        </article>
      </section>
      <section>
        <article className="clot">
          <h2 className="yves">
            HAS Yves Clot, quelles solutions pour améliorer la qualité de vie au
            travail ?
          </h2>
          <audio controls>
            <source src="./YvesClot.mp3" type="audio/mp3" />
          </audio>
        </article>
      </section>

      <section className="button-home">
        <article>
          <NavLink to="/particuliers">
            <button className="individual">Je suis un particulier</button>
          </NavLink>
          <NavLink to="/entreprises">
            <button className="firm">Je suis une entreprise</button>
          </NavLink>
        </article>

        <article>
          <NavLink to="/vos-questions">
            <button className="mains">
              Je réponds jusqu’ à 5 de vos questions
            </button>
          </NavLink>
          <NavLink to="/articles">
            <button className="stethoscope">
              Mes articles sur la santé au travail
            </button>
          </NavLink>
        </article>
      </section>
    </main>
  );
};

export default Home;
