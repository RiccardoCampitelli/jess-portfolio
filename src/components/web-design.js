import React from 'react';

import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    desktop: file(relativePath: { eq: "desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file(relativePath: { eq: "laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tablet: file(relativePath: { eq: "tablet.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const WebDesign = () => {
  const { desktop, laptop, tablet } = useStaticQuery(query);

  const images = [tablet, laptop, desktop];

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

export default WebDesign;
