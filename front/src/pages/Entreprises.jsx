import React from "react";
import { NavLink } from "react-router-dom";

const Entreprises = () => {
  return (
    <main className="entreprises">
      <section className="encard-entreprises">
        <h2>Accompagnement des entreprises, institutions, et associations</h2>
        <p>
          Le terme "entreprise" regroupe tous types de structures (TPE-PME ou grandes entreprises, institutions, associations, fédérations
          syndicales...), qu'elles soient dans le domaine privé ou public.
        </p>
        <p>
          Parce qu'il existe autant d'entreprises que d'arbres, autant d'arbres que de situations de travail, autant de branches d'un arbre que
          d'unités de travail, parce qu'il y a autant d'individus dans une organisation du travail que de feuilles sur un arbres, alors...
        </p>
        <p>
          Il existe autant de combinaisons multiples pour tenter de comprendre comment se vit et se raconte le rapport de l'homme au travail.
        </p>
      </section>
      <section className="explication-entreprises">
        <article>
          <h3>Les solutions d'accompagnements pour l'entreprise</h3>
          <p>
            Travailler c'est bien souvent vibrer pour un métier. Cette construction identitaire professionnelle nous touche tous dans nos dimensions cognitives, comportementales, affectives, relationnelles.
            Elle a donc un impact significatif sur la dimension économique et sociale de chaque entreprise. La psychologie du travail prend en
            compte toutes ces dimensions en tentant de comprendre les conduites et les conséquences qu'elles engendrent pour tous les acteurs.
          </p>
          <p>
            L'accompagnement que je vous propose présente différents possibilités suivant les besoins de votre entreprise. Il peut s'agir
            de sensibilisation et de prévention des risques psychosociaux, de conférences, d'expertises ou de diagnostic, de formations, de
            conférences, d'analyses de pratiques professionnelles, ou bien encore d'accompagnement de transitions professionnelles lors d'un
            plan social pour l'emploi (PSE). L'important est que l'objectif soit tourné vers le but recherché au plus près du contexte de
            l'entreprise.
          </p>
        </article>
        <article>
          <h3>Les lieux d'intervention</h3>
          <p>
            Nous déterminons le lieu d'intervention le plus adapté. Les lieux de formation ou d'accompagnement se situent bien souvent dans
            l'entreprise, mais l'expérience montre qu'il vaut mieux être à l'extérieur de l'entreprise afin de créer davantage de liens et de
            disponibilité totale.
          </p>
        </article>
        <NavLink to="/contact"> <button className="me-contacter" type="button">
          Me contacter
        </button></NavLink>
      </section>
    </main>
  );
};

export default Entreprises;
