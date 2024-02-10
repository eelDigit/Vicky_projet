import React from "react";
import { NavLink } from "react-router-dom";

const Particuliers = () => {
  return (
    <main className="particuliers">
      <section className="encard-3-particuliers">
        <h2>La psychologie du travail au service des particuliers</h2>
        <p>
          Tout au long de notre vie, il nous arrive de passer des moments plus ou moins agréables avec les autres et avec soi-même.
        </p>
        <p>
          Cependant, lorsque des événements majeurs viennent bousculer notre équilibre psychique et s’installent dans la durée, lorsque la
          souffrance nous envahit, il est important de pouvoir trouver un espace pour la déposer.
        </p>
        <p>
          Dans tous les cas, l’essentiel est de pouvoir en parler, pour comprendre ce qui vous arrive, et en faire quelque chose. Vous n’êtes
          pas seul. Contactez moi pour en parler.
        </p>
      </section>
      <section className="explication-particuliers">
        <article>
          <h3>Accompagnement individuel en souffrance au travail</h3>
          <p>
            Si vous êtes face à une difficulté dans votre travail, je vous propose un accompagnement en souffrance au travail à travers des
            consultations individuelles. La relation d’aide et le processus thérapeutique que je vous propose s’appuient sur une écoute active
            et bienveillante, afin que vous puissiez surmonter vos difficultés et redevenir acteur de votre vie.
          </p>
          <h3>Accompagnement individuel en gestion de carrière</h3>
          <p>
            Vous cherchez une orientation professionnelle ou une réorientation professionnelle qui réponde à vos attentes ? Je vous propose un
            accompagnement en gestion de carrière à travers des consultations individuelles et des outils (tests de personnalité, du Strong,
            questionnaires).
          </p>
        </article>
        <article>
          <h3>Cabinet de consultation pour particuliers</h3>
          <p>
            A travers des consultations individuelles, je vous propose de trouver un espace où vous pouvez déposer ce qui est difficile pour
            vous, de comprendre ce qui vous arrive, pour arriver à en faire quelque chose de constructif et de réparateur, de trouver des
            solutions.
          </p>
          <p>
            Cet accompagnement, fondé sur une éthique et une déontologie professionnelle, repose sur
          </p>
          <ul>
            <li>la bienveillance et l’empathie</li>
            <li>le non jugement et le respect</li>
            <li>l’écoute active</li>
          </ul>
        </article>

        <NavLink to="/contact"> <button className="me-contacter" type="button">
          Me contacter
        </button></NavLink>
        
       
      </section>
    </main>
  );
};

export default Particuliers;
