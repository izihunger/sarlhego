import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contactez-nous</h2>
      <div className="contact-container">
        <div className="contact-map">
          <iframe 
            title="SARL HEGO Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.1905596588895!2d-2.1906642875053963!3d47.31061567104398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805651d573c66bb%3A0x17ba3fb59926daa5!2sSarl%20H%C3%A9go!5e0!3m2!1sfr!2sfr!4v1739722263838!5m2!1sfr!2sfr" 
            width="600" 
            height="450"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="contact-info">
          <h3>SARL HEGO</h3>
          <p>Adresse: 6 Rue Jean Baptiste Marcet, 44570 Trignac</p>
          <p>Téléphone: 02 40 24 93 63</p>
          <p>Email: sarl.hego@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;