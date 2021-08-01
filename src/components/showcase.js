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
    fhHeader: file(relativePath: { eq: "fh-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyHeader: file(relativePath: { eq: "daisy-box.png" }) {
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

const ShowcaseItem = ({ source, internal = true }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayVisible = () => setShowOverlay(true);

  const hideOverlay = () => setShowOverlay(false);

  const WrapperComponent = ({ internal, children }) => {
    return internal ? (
      <Link className="link-icon" to={source.path}>
        {children}
      </Link>
    ) : (
      <a
        className="link-icon"
        href="https://go2africa1.wordpress.com/"
        target="_blank"
      >
        {children}
      </a>
    );
  };

  return (
    <WrapperComponent internal={internal}>
      <div
        className="content-showcase-image"
        onMouseEnter={overlayVisible}
        onMouseLeave={hideOverlay}
      >
        <span className="image fit">
          {internal && (
            <Img
              className="main-image"
              imgStyle={{ objectFit: 'contain' }}
              style={{ height: '400px', width: '100%' }}
              fluid={source.image.childImageSharp.fluid}
            />
          )}
          {!internal && (
            <span className="image fit">
              <Img
                className="main-image"
                imgStyle={{ objectFit: 'contain' }}
                style={{ height: '400px', width: '100%' }}
                fluid={source.image.childImageSharp.fluid}
              />
            </span>
          )}
        </span>
        <Overlay show={true} message={source.message} />
      </div>
    </WrapperComponent>
  );
};

const Showcase = () => {
  const {
    nodeHeader,
    cm365Header,
    cgHeader,
    safariHeader,
    fhHeader,
    daisyHeader,
  } = useStaticQuery(query);

  const images = [
    {
      image: nodeHeader,
      path: 'node',
      message: 'Web, Digital, Print & Branding',
    },
    {
      image: cm365Header,
      path: 'cyberman365',
      message: 'Web, Digital, Print & Branding',
    },
    {
      image: daisyHeader,
      path: 'daisy',
      message: 'Digital, Email & Packaging',
    },
    {
      image: cgHeader,
      path: 'caitlingallagher',
      message: 'Logo Design & Branding',
    },
    {
      image: fhHeader,
      path: 'forestholidays',
      message: 'Digital Design',
    },
  ];

  return (
    <div className="box alt">
      <div className="content-container">
        {images.map((source, idx) => (
          <ShowcaseItem key={idx} source={source} message="message" />
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
