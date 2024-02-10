import React from "react";

const Contact = () => {
  return (
    <main className="contact">
      <section className="encard-contact">
        <article className="contact">
          <h2>CONTACT</h2>
          <p>
            Pour toute demande d’information ou de rendez-vous vous pouvez me
            contacter par :
          </p>
          <h3>Téléphone</h3>
          <p>06-00-00-00-00</p>
          <h3>E-MAIL </h3>
          <p>azerty@azerty.fr</p>
        </article>

        <article className="horaires">
          <h2>Horaires et jours des consultations</h2>
          <p>Lundi de 10h à 19h.</p>
          <p>Mardi - Mercredi - Jeudi de 9h à 19h.</p>
          <p>Vendredi de 09h à 18h.</p>
          <h2> Tarifs </h2>
          <p>La séance : 70€ - 1H</p>
        </article>
      </section>

      <section>
        <fieldset className="encard-formulaire">
          <h3>Formulaire</h3>
          <form action="form.html" method="post">
            <aside>
              <label for="nom" aria-labelledby="nom">Nom * </label>
              <input
                className="lastname"
                type="text"
                id="lastname"
                aria-required="true"
                placeholder="NOM"
                minlength="2"
                required
              />
            </aside>
            <aside>
              <label for="prenom" aria-labelledby="prenom">Prénom * </label>
              <input
                className="name"
                type="text"
                id="name"
                aria-required="true"
                placeholder="Prénom"
                minlength="2"
                required
              />
            </aside>
            <aside>
              <label for="telephone" aria-labelledby="telephone">Téléphone * </label>
              <input
                className="phone"
                type="tel"
                id="phone"
                aria-required="true"
                placeholder="06 00 00 00 00"
                name="phone" //pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                minlength="13"
                required
              />
            </aside>
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
              <label for="suject" aria-labelledby="sujet">Sujet * </label>
              <input
                className="subject"
                type="text"
                aria-required="true"
                required
                id="subject"
                placeholder="burn-out / Prévention RPS..."
                minlength="2"
              />
            </aside>
            <aside>
              <label for="message" aria-labelledby="message">Message * </label>
              <input
                className="message"
                type="text"
                aria-required="true"
                id="message"
                placeholder="message "
                minlength="2"
                required
              />
            </aside>
            <button className="send" type="submit">
              Envoyer
            </button>

            <aside>
              <input
                className="confidential"
                type="checkbox"
                name="confidential"
                aria-required="true"
                id="confidential"
                value="confidential"
                required
              />
              <label className="confidential-label" for="confidentialite" aria-labelledby="confidentialite">
                Notre politique de confidentialité est disponible grâce au lien
                de bas de page. Veuillez la consulter si besoin. Vous disposez
                d'un droit d'accès, de rectification et de suppression des
                données qui vous concernent. Vous pouvez l'exercer en adressant
                un e-mail à l'adresse électronique suivante :{" "}
                <strong>azerty@azerty.fr</strong>
              </label>
            </aside>
          </form>
        </fieldset>
      </section>

      <article>
        <section className="encard-localisation">
          <h3>Localisation</h3>
          <p>Les consultations ont lieu à l'adresse suivante : </p>
          <p>39 Boulevard Magenta 75010</p>
          <p>Métro : Jacques Bonsergent - République</p>
        </section>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2525715951365!2d2.3565793766707404!3d48.87246149971593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0db82eef1d%3A0x110be848824e1a7d!2s39%20Bd%20de%20Magenta%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1706197069311!5m2!1sfr!2sfr"
  width="600"
  height="450"
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


      </article>
    </main>
  );
};

export default Contact;
