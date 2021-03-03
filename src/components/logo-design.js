import React from 'react';

import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    bearcroft: file(relativePath: { eq: "bearcroft-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blackArchive: file(relativePath: { eq: "black-archive.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    parson: file(relativePath: { eq: "parson.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const LogoDesign = () => {
  const { bearcroft, blackArchive, parson } = useStaticQuery(query);

  const images = [bearcroft, blackArchive, parson];

  return (
    <div className="box alt">
      <div className="content-container">
        {images.map(source => (
          <div className="content-image">
            <span className="image fit">
              <Img fluid={source.childImageSharp.fluid} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesign;
