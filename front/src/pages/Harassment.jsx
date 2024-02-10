import React from "react";

const Harassment = () => {
  return (
    <main className="harassment-2">
      <section>
        <article className="dejours">
        <h2>
          Une interview de Christophe Dejours sur le harcèlement au travail
        </h2>

        <iframe className="video-dejours"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/L0rycUEJgRM?si=tTScVnJt7ijwQJ2T"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="link-dejours">
          <a href="https://www.youtube.com/watch?v=L0rycUEJgRM">
            Pr Christophe Dejours - Harcèlement et santé au travail
          </a>
        </p>
        </article>
      </section>
    </main>
  );
};

export default Harassment;
