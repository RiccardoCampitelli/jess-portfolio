import React from 'react';

import Layout from '../components/Layout';

import Img from 'gatsby-image';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
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

const LogoDesign = () => {
  const { allFile } = useStaticQuery(query);

  const images = allFile.edges.map(({ node }) => node.childImageSharp);

  return (
    <Layout>
      <article id="main">
        <header>
          <h2>Generic Page</h2>
          <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                  {images.map(source => (
                    <div className="col-4">
                      <span className="image fit">
                        <Img fluid={source.fluid} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default LogoDesign;
