import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import LogoDesign from '../components/logo-design';
import WebDesign from '../components/web-design';
import Illustrations from '../components/illustrations';

import config from '../../config';

const IndexPage = () => {
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="one">
                <a href="/#" className="button primary">
                  Explore
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Learn More
          </a>
        </Scroll>
      </section>

      <section id="two" className="wrapper alt style5">
        <div className="inner">
          <LogoDesign />
          <Illustrations />
          <WebDesign />
        </div>
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Arcue ut vel commodo</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
              amet eleifend fringilla.
            </p>
          </header>
          <ul className="actions stacked">
            <li>
              <a href="/#" className="button fit primary">
                Activate
              </a>
            </li>
            <li>
              <a href="/#" className="button fit">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
