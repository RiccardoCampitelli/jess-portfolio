import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    cgHeader: file(relativePath: { eq: "cg-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cg1: file(relativePath: { eq: "cg-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cg2: file(relativePath: { eq: "cg-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cg3: file(relativePath: { eq: "cg-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cg4: file(relativePath: { eq: "cg-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const CaitlinGallagher = () => {
  const { cgHeader, cg1, cg2, cg3, cg4 } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>CaitlinGallagher</h2>

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
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Learn More
          </a>
        </Scroll>
      </section>
      <section id="two" className="wrapper alt style5">
        <div className="content-container">
          <div className="content-image-duo">
            <span className="image fit">
              <Img fluid={cgHeader.childImageSharp.fluid} />
            </span>
          </div>
        </div>
        <div className="content-container mt">
          <div className="content-image-duo">
            <Img fluid={cg1.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={cg2.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={cg3.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={cg4.childImageSharp.fluid} />
          </div>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default CaitlinGallagher;
