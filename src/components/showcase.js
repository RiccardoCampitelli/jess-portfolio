import React, { useState } from 'react';

import Img from 'gatsby-image';

import { graphql, Link, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    cgHeader: file(relativePath: { eq: "cg-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    safariHeader: file(relativePath: { eq: "silver-mac.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Header: file(relativePath: { eq: "cm365-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeHeader: file(relativePath: { eq: "node-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Overlay = ({ show, message }) => (
  <div className={`overlay-container ${show ? 'show' : 'hide'}`}>
    <div className="overlay">{message}</div>;
  </div>
);

const ShowcaseItem = ({ source, internal = false }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayVisible = () => setShowOverlay(true);

  const hideOverlay = () => setShowOverlay(false);

  return (
    <div
      className="content-showcase-image"
      onMouseEnter={overlayVisible}
      onMouseLeave={hideOverlay}
    >
      <span className="image fit">
        {internal && (
          <Link to={source.path}>
            <Img
              className="main-image"
              imgStyle={{ objectFit: 'contain' }}
              style={{ height: '400px', width: '100%' }}
              fluid={source.image.childImageSharp.fluid}
            />
          </Link>
        )}
        {!internal && (
          <div className="content-showcase-image">
            <span className="image fit">
              <a href="https://go2africa1.wordpress.com/" target="_blank">
                <Img
                  className="main-image"
                  imgStyle={{ objectFit: 'contain' }}
                  style={{ height: '400px', width: '100%' }}
                  fluid={source.image.childImageSharp.fluid}
                />
              </a>
            </span>
          </div>
        )}
      </span>
      <Overlay show={showOverlay} message={source.message} />
    </div>
  );
};

const Showcase = () => {
  const { nodeHeader, cm365Header, cgHeader, safariHeader } = useStaticQuery(
    query
  );

  const images = [
    {
      image: nodeHeader,
      path: 'node',
      message: 'Web Digital Print & Branding',
    },
    {
      image: cm365Header,
      path: 'cyberman',
      message: 'Web Digital Print & Branding',
    },
    {
      image: cgHeader,
      path: 'caitlinghallagher',
      message: 'Logo Design & Branding',
    },
  ];

  return (
    <div className="box alt">
      <div className="content-container">
        {images.map(source => (
          <ShowcaseItem source={source} message="message" />
        ))}
        <ShowcaseItem
          source={{ image: safariHeader, message: 'Web Design' }}
          internal={false}
        />
      </div>
    </div>
  );
};

export default Showcase;
