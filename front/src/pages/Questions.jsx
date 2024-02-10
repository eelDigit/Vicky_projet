import React, { useState } from "react";

const Questions = () => {
  const [formData, setFormData] = useState({
    // userId: "",
    message: "",
    // answer: "",
    // status: "",
  });

  const [confidentialChecked, setConfidentialChecked] = useState(false);

  const [questionRemaining, setQuestionRemaining] = useState(5);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/questions/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      // if (!response.ok){
      //   throw new Error (`error : ${response.status}`)
      // }

      const data = await response.json();
      console.log(data);

      setQuestionRemaining((prev) => prev - 1);

      if (questionRemaining <= 0) {
        console.log("Vous avez atteint le nombre maximal de question ");
        return;
      }

      setFormData({
        // userId: "",
        message: "",
        // answer: "",
        // status: "",
      });


      if (!confidentialChecked) {
        setError(
          "Veuillez cocher la case de notre politique de confidentialité"
        );
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="questions">
      <section className="encard-2-questions">
        <article>
          <h2>Psychologue spécialiste de la santé au travail, c'est quoi ?</h2>
          <p>
            Afin de mieux vous orienter vous pouvez me poser jusqu’à 5 questions
            via le formulaire ci-dessous
          </p>
        </article>
      </section>
      <section>
        <fieldset className="encard-question">
          <form method="post" onSubmit={handleSubmit}>
            <aside className="x-question">
              <h3>Vos questions</h3>
              <p>Il vous reste {questionRemaining} question (s)</p>
            </aside>

            <article>
              <aside>
                <p>Vous êtes *</p>
                <input
                  className="input-particulier"
                  type="radio"
                  name="statut"
                  id="particulier"
                  aria-required="true"
                  value="particulier"
                  // onChange={handleChange}
                />
                <label htmlFor="particulier" aria-labelledby="particulier">
                  Particulier
                </label>

                <input
                  className="input-entreprise"
                  type="radio"
                  name="statut"
                  id="entreprise"
                  aria-required="true"
                  value="entreprise"
                  // onChange={handleChange}
                />
                <label htmlFor="entreprise" aria-labelledby="particulier">
                  Entreprise
                </label>
              </aside>

              <aside>
                <label htmlFor="nom" aria-labelledby="nom">
                  Nom *{" "}
                </label>
                <input
                  className="lastname"
                  type="text"
                  id="lastname"
                  aria-required="true"
                  placeholder="NOM"
                  minLength="2"
                  required
                  // onChange={handleChange}
                />
              </aside>

              <aside>
                <label htmlFor="prenom" aria-labelledby="prenom">
                  Prénom *{" "}
                </label>
                <input
                  className="name"
                  type="text"
                  id="name"
                  aria-required="true"
                  placeholder="Prénom"
                  minLength="2"
                  required
                  // onChange={handleChange}
                />
              </aside>

              <aside>
                <label htmlFor="email" aria-labelledby="email">
                  Email *{" "}
                </label>
                <input
                  className="email"
                  type="email"
                  id="email" //pattern=".+@example\.com"
                  aria-required="true"
                  size="30"
                  required
                  placeholder="email@email.com"
                  minLength="2"
                  // onChange={handleChange}
                />
              </aside>

              <aside>
                <label htmlFor="question" aria-labelledby="question">
                  Votre question *{" "}
                </label>
                <input
                  className="question"
                  name="message"
                  type="text"
                  id="question"
                  aria-required="true"
                  placeholder="Question"
                  minLength="2"
                  required
                  onChange={handleChange}
                />
              </aside>

              <button className="envoyer" type="submit">
                Envoyer
              </button>

              <aside>
                <input
                  className="confidential"
                  type="checkbox"
                  name="confidential"
                  id="confidential"
                  // aria-required="true"
                  value="confidential"
                  required
                  checked={confidentialChecked}
                  onChange={() => {
                    setConfidentialChecked(!confidentialChecked);
                  }}
                />
                <label className="confidential-label" htmlFor="confidential">
                  Notre politique de confidentialité est disponible grâce au
                  lien de bas de page. Veuillez la consulter si besoin. Vous
                  disposez d'un droit d'accès, de rectification et de
                  suppression des données qui vous concernent. Vous pouvez
                  l'exercer en adressant un e-mail à l'adresse électronique
                  suivante : <strong>azerty@azerty.fr</strong>
                </label>
              </aside>
            </article>
          </form>
        </fieldset>
      </section>
    </main>
  );
};

export default Questions;
