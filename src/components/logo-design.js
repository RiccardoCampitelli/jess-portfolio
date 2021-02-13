import React from 'react';

import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    bearcroft: file(relativePath: { eq: "Logo_Bearcroft.webp" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blackArchive: file(relativePath: { eq: "Logo_Black-Archive.webp" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    parson: file(relativePath: { eq: "Logo_parson.webp" }) {
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

  const images = [blackArchive, bearcroft, parson];

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
