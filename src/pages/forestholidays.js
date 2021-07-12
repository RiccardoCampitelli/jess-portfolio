import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    cm365Header: file(relativePath: { eq: "fh-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone1: file(relativePath: { eq: "fh-phone-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone2: file(relativePath: { eq: "fh-phone-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone3: file(relativePath: { eq: "fh-phone-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ForestHoliday = () => {
  const { cm365Header, cm365Phone1, cm365Phone2, cm365Phone3 } = useStaticQuery(
    query
  );
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Forest Holidays</h2>
        </div>
        <div className="content-container">
          <Link to="/">
            <h4>Projects</h4>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Scroll type="id" element="cta">
            <a href="#cta">
              <h4>Contact</h4>
            </a>
          </Scroll>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Learn More
          </a>
        </Scroll>
      </section>
      <section id="two" className="wrapper alt style5">
        <div className="full-width grey">
          <div className="row">
            <span className=" forest-img py">
              <Img fluid={cm365Phone1.childImageSharp.fluid} />
            </span>
          </div>
        </div>
        <article className="py">
          <h2 className="title">Forest Holidays</h2>
        </article>

        <div className="description-container-row margin-top ml">
          <div className="description-item-single">
            <h4>Brief</h4>
            <p>
              Passion project for Forest Holidays, who sell short breaks and log cabin holidays. Creating a feeling of adventure, discovery and wonder with their new brand guidelines.
            </p>
          </div>
        </div>

        <div className="content-column grey pt">
          <div className="description-item max-width ml">
            <h4>Social media posts</h4>
            <p>
              Following their brand guidelines, I picked images that reflected
              their brand and incorporated complimentary text for an exciting
              campaign.
            </p>
          </div>
          <div className="content-container max-width py">
            <div className="content-image-mobile">
              <Img fluid={cm365Phone1.childImageSharp.fluid} />
            </div>
            <div className="content-image-mobile">
              <Img fluid={cm365Phone2.childImageSharp.fluid} />
            </div>
            <div className="content-image-mobile">
              <Img fluid={cm365Phone3.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="full-width py">
          <div className="description-item max-width ml">
            <h4>Editorial and marketing</h4>
            <p>
              Created a poster so the business could adapt to COVID-19
              precautions, following brand guidelines.
            </p>
          </div>
          <div className="row">
            <span className=" forest-img-2 py">
              <Img fluid={cm365Header.childImageSharp.fluid} />
            </span>
          </div>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default ForestHoliday;
