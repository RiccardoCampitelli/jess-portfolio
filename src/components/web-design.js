import React from 'react';

import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "webdesign" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const WebDesign = () => {
  const { allFile } = useStaticQuery(query);

  const images = allFile.edges.map(({ node }) => node.childImageSharp);

  return (
    <div className="box alt">
      <div className="content-container">
        {images.map(source => (
          <div className="content-image">
            <span className="image fit">
              <Img fluid={source.fluid} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDesign;
