import { useEffect } from "react";

function ContactUs() {
  return (
    <section>
      <article>
        <h2>Contactanos</h2>
      </article>
      <article>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412184.6998202082!2d-87.11490391637984!3d36.18618857888175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20Tennessee%2C%20EE.%20UU.!5e0!3m2!1ses!2sve!4v1703898651387!5m2!1ses!2sve"
          className="styleMap"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>
    </section>
  );
}

export default ContactUs;
