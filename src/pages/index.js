import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Showcase from '../components/showcase';
import ContactFooter from '../components/ContactFooter';

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
        <div className="inner py">
          <Showcase />
        </div>
      </section>

      <ContactFooter />
    </Layout>
  );
};

export default IndexPage;
