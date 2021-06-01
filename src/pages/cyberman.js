import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query {
    cm365Header: file(relativePath: { eq: "cm365-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Web1: file(relativePath: { eq: "cm365-web-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Web2: file(relativePath: { eq: "cm365-web-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Flyer1: file(relativePath: { eq: "cm365-flyer-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Flyer2: file(relativePath: { eq: "cm365-flyer-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone1: file(relativePath: { eq: "cm365-phone-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone2: file(relativePath: { eq: "cm365-phone-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone3: file(relativePath: { eq: "cm365-phone-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Cyberman = () => {
  const {
    cm365Header,
    cm365Web1,
    cm365Web2,
    cm365Flyer1,
    cm365Flyer2,
    cm365Phone1,
    cm365Phone2,
    cm365Phone3,
  } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Cyberman</h2>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Learn More
          </a>
        </Scroll>
      </section>
      <section id="two" className="wrapper alt style5">
        <div className="inner">
          <span className="image fit">
            <Img fluid={cm365Header.childImageSharp.fluid} />
          </span>
        </div>
        <div className="content-container mt">
          <div className="content-image-duo">
            <Img fluid={cm365Web1.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={cm365Web2.childImageSharp.fluid} />
          </div>
        </div>
        <div className="content-container mt">
          <div className="content-image-duo">
            <Img fluid={cm365Flyer1.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={cm365Flyer2.childImageSharp.fluid} />
          </div>
        </div>
        <div className="content-container mt">
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
      </section>
    </Layout>
  );
};

export default Cyberman;
