import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    cgHeader: file(relativePath: { eq: "cait-header.png" }) {
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
    clogoMain: file(relativePath: { eq: "cait-logo-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clogoMainGreen: file(relativePath: { eq: "cait-logo-main-green.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clogoSecondary: file(relativePath: { eq: "cait-secondary-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clogoSecondaryGreen: file(
      relativePath: { eq: "cait-secondary-logo-green.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const CaitlinGallagher = () => {
  const {
    cgHeader,
    cg2,
    cg3,
    clogoMain,
    clogoMainGreen,
    clogoSecondary,
    clogoSecondaryGreen,
  } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Caitlin Gallagher</h2>

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
        <div className="content-container grey">
          <div className="content-image-duo small-cait ">
            <span className="image fit paddingY">
              <Img fluid={cgHeader.childImageSharp.fluid} />
            </span>
          </div>
        </div>
        <article className="py">
          <h2 className="title">Caitlin Gallagher</h2>
          <h5 className="title">Visual Identity and branding | Digital</h5>

          <div className="description-container-row margin-top ml">
            <div className="description-item-single">
              <h4>Brief</h4>
              <p>
                Caitlin Gallagher approached me with the desire to build up her
                own personal brand as a book reviewer, reaching her target
                audience through Instagram and YouTube.
              </p>
            </div>
          </div>

          <div className="description-container-row ml">
            <div className="description-item-single">
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
        <article className="grey py">
          <div className="row-left-col-lg">
            <div className="half">
              <div className="description-item ml">
                <h4>Main Logo</h4>
                <p className="desc">
                  Created to reflect Caitlin’s personality and her brand as a
                  book reviewer. Combining illustration, images and vectors in a
                  logo design felt like a risk but it paid off, combining
                  elements of reality and fantasy, much as a reader gets lost in
                  a book. As the business is primarily on Instagram and YouTube,
                  this logo is a better fit for profile pictures.
                </p>
              </div>
            </div>
            <div className="images-duo">
              <div className="single-image p1">
                <Img fluid={clogoMain.childImageSharp.fluid} />
              </div>
              <div className="single-image p1">
                <Img fluid={clogoMainGreen.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="row-left-col-lg">
            <div className="half">
              <div className="description-item ml">
                <h4>Secondary Logo</h4>
                <p className="desc">
                  When space allows a wider logo can be used.
                </p>
              </div>
            </div>
            <div className="images-duo">
              <div className="single-image p1">
                <Img fluid={clogoSecondary.childImageSharp.fluid} />
              </div>
              <div className="single-image p1">
                <Img fluid={clogoSecondaryGreen.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className="row-left-col-lg">
            <div>
              <div className="description-item ml py">
                <h4>Colour Palette</h4>
                <p>
                  I created the colour palette from nature. Imagine a forest
                  from a fairy- tale, with colourful mushrooms, deep green
                  trees, butterflies and fairies.
                </p>
              </div>
              <div className="description-item ml">
                <h4>Keywords</h4>
                <div className="row-left">
                  <ul className="list">
                    <li>Mysterious</li>
                    <li>Enchanting</li>
                    <li>Books</li>
                    <li>Friendly</li>
                    <li>Fantasy</li>
                  </ul>
                  <ul className="list">
                    <li>Adventure</li>
                    <li>Reading</li>
                    <li>Fairytale</li>
                    <li>Magic</li>
                    <li>Medieval</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-column auto-margin">
              <div className="description-item row limit-width">
                <div className="square cait-brown mx"></div>
                <div className="square cait-light-brown mx"></div>
                <div className="square cait-grey mx"></div>
              </div>
              <div className="description-item row limit-width">
                <div className="square cait-red mx"></div>
                <div className="square cait-orange mx"></div>
                <div className="square cait-green mx"></div>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <div className="row-left-col-sm grey">
              <div className="image-description ml paddingY">
                <h4>YouTube Thumbnail</h4>
                <p>
                  Combining images with illustrations and typeface remains a
                  common theme. This is an introductory thumbnail and as she
                  reviews books the text will change to the name of the book
                  being reviewed.
                </p>
              </div>
              <div className="single-image">
                <Img fluid={cg2.childImageSharp.fluid} />
              </div>
            </div>
            <div className="row-left-col-sm reverse">
              <div className="single-image">
                <Img fluid={cg3.childImageSharp.fluid} />
              </div>
              <div className="image-description ml paddingY">
                <h4>Social Media Graphic</h4>
                <p>
                  Using a template like this enforces brand recognition and is
                  an easy way to brand simple photos quickly, keeping the feed
                  cohesive and attractive.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default CaitlinGallagher;
