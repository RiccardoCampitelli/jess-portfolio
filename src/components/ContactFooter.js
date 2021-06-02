import React from 'react';

const ContactFooter = () => (
  <section id="cta" className="wrapper style4">
    <div className="inner">
      <header className="contact-header">
        <h2 className="align-text-center">Get in touch!</h2>
        <p className="align-text-center">
          <a
            href="https://www.linkedin.com/in/jessica-evans-08504550/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a
            href="mailto:jessica.e.evans21@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: '2rem' }}
          >
            <i class="far fa-envelope fa-2x"></i>
          </a>
        </p>
      </header>
    </div>
  </section>
);

export default ContactFooter;
