import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    nodeHeader: file(relativePath: { eq: "node-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeWeb1: file(relativePath: { eq: "node-web-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeWeb2: file(relativePath: { eq: "node-web-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePoster1: file(relativePath: { eq: "node-poster-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePoster2: file(relativePath: { eq: "node-poster-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Node = () => {
  const {
    nodeHeader,
    nodeWeb1,
    nodeWeb2,
    nodePoster1,
    nodePoster2,
  } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Node International</h2>
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
        <div className="inner">
          <span className="image fit">
            <Img fluid={nodeHeader.childImageSharp.fluid} />
          </span>
        </div>
        <div className="content-container mt">
          <div className="content-image-duo">
            <Img fluid={nodeWeb1.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={nodeWeb2.childImageSharp.fluid} />
          </div>
        </div>
        <div className="content-container mt">
          <div className="content-image-duo">
            <Img fluid={nodePoster1.childImageSharp.fluid} />
          </div>
          <div className="content-image-duo">
            <Img fluid={nodePoster2.childImageSharp.fluid} />
          </div>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default Node;
