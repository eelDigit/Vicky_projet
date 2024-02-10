import React from "react";

const Connexion = () => {
  return (
    <main >
      <section>
        <fieldset className="encard-connection">
          <h3>Se connecter</h3>
          <form action="form.html" method="post">

            <aside>
              <label for="email" aria-labelledby="email">Email * </label>
              <input
                className="email"
                type="email"
                id="email" //pattern=".+@example\.com"
                aria-required="true"
                size="30"
                required
                placeholder="email@email.com"
                minlength="2"
              />
            </aside>
            <aside>
              <label for="password" aria-labelledby="message">Message * </label>
              <input
                className="password"
                type="text"
                aria-required="true"
                id="password"
                placeholder="Mot de passe "
                minlength="8"
                maxLength="30"
                required
              />
            </aside>
            <button className="connection" type="submit">
              Se connecter
            </button>

          </form>
        </fieldset>
      </section>




    </main>
  );
};

export default Connexion;
