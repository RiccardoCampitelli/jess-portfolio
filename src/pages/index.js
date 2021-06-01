import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import LogoDesign from '../components/logo-design';
import WebDesign from '../components/web-design';
import Illustrations from '../components/illustrations';

import config from '../../config';
import Showcase from '../components/showcase';

const IndexPage = () => {
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Learn More
          </a>
        </Scroll>
      </section>

      <section id="two" className="wrapper alt style5">
        <div className="inner">
          <Showcase />
        </div>
      </section>

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
    </Layout>
  );
};

export default IndexPage;
