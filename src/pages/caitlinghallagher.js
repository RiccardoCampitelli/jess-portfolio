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
        <article>
          <h2 className="title">Caitlin Gallagher</h2>
          <h5 className="title">Visual Identity and branding | Digital</h5>

          <div className="description-container-row margin-top">
            <div className="description-item">
              <h4>Brief</h4>
              <p>
                Caitlin Gallagher approached me with the desire to build up her
                own personal brand as a book reviewer, reaching her target
                audience through Instagram and YouTube.
              </p>
            </div>
            <div className="description-item">
              <h4>Unique Solution</h4>
              <p>
                Launch a brand with a cohesive look and feel, allowing the
                reader to instantly form a connection with followers and be
                memorable. The logo identity and branding reflect Caitlin’s
                personality and her brand. On the social media side, to design a
                reusable YouTube thumbnail template and Instagram social media
                template.
              </p>
            </div>
          </div>

          <div className="description-container-row">
            <div className="description-item">
              <h4>Challenges</h4>
              <p>
                To reflect Caitlin’s personality as a book reviewer through the
                logo and brand identity. Combining illustration, images and
                vectors in a logo design felt like a risk but it paid off.
              </p>
            </div>
            <div className="description-item">
              <h4>The Result</h4>
              <p>
                Caitlin Gallagher launched her Instagram and YouTube channel
                with a strong brand strategy and guidelines, receiving 50+ likes
                on her first few posts. Pleased with her branding, she would now
                like a website to post written book reviews.
              </p>
            </div>
          </div>
        </article>
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
