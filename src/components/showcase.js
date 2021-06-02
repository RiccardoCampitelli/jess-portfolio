import React from 'react';

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

const Showcase = () => {
  const { nodeHeader, cm365Header, cgHeader } = useStaticQuery(query);

  const images = [
    { image: nodeHeader, path: 'node' },
    { image: cm365Header, path: 'cyberman' },
    { image: cgHeader, path: 'caitlinghallagher' },
  ];

  return (
    <div className="box alt">
      <div className="content-container">
        {images.map(source => (
          <div className="content-showcase-image">
            <span className="image fit">
              <Link to={source.path}>
                <Img
                  className="main-image"
                  imgStyle={{ objectFit: 'contain' }}
                  style={{ height: '400px', width: '100%' }}
                  fluid={source.image.childImageSharp.fluid}
                />
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
