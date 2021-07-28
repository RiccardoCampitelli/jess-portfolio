import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    daisyHeader: file(relativePath: { eq: "daisy-box.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyInstagram: file(relativePath: { eq: "daisy-instagram.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyEmail: file(relativePath: { eq: "daisy-email.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyModel: file(relativePath: { eq: "daisy-model.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisylogo11: file(relativePath: { eq: "daisy-logo-11.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisylogo12: file(relativePath: { eq: "daisy-logo-12.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisylogo13: file(relativePath: { eq: "daisy-logo-13.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisylogo14: file(relativePath: { eq: "daisy-logo-14.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyCircleLogo28: file(relativePath: { eq: "daisy-circle-logos-28.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyCircleLogo29: file(relativePath: { eq: "daisy-circle-logos-29.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyCircleLogo30: file(relativePath: { eq: "daisy-circle-logos-30.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daisyCircleLogo31: file(relativePath: { eq: "daisy-circle-logos-31.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const DaisyJewellery = () => {
  const {
    daisyHeader,
    daisyInstagram,
    daisyEmail,
    daisyModel,
    daisylogo11,
    daisylogo12,
    daisylogo13,
    daisylogo14,
    daisyCircleLogo28,
    daisyCircleLogo29,
    daisyCircleLogo30,
    daisyCircleLogo31
  } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Daisy Jewellery</h2>
        </div>
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
        <Scroll type="id" element="two">
          <a href="#two" className="more">
            Learn More
          </a>
        </Scroll>
      </section>
      <section id="two" className="wrapper alt style5">
        <div className="full-width grey">
          <div className="row">
            <span className="image fit cyberman-img py">
              <Img fluid={daisyHeader.childImageSharp.fluid} />
            </span>
          </div>
        </div>
        <article className="py">
          <h2 className="title">Daisy Jewellery</h2>
          <h5 className="title">
            Packaging | Visual Identity and branding | Social media | Email design
          </h5>

          <div className="description-container-row margin-top ml">
            <div className="description-item-single">
              <h4>Brief</h4>
              <p>
                Daisy Jewellery, a passion project, sells beautiful everyday pieces with meaning. Daisy is all about adventure, exploring and living life to the full. Getting lost in the moment wearing their life-proof jewellery. Creation of a digital identity including a logo, brand colours, photos, fonts, social media posts and an email design to produce a cohesive brand identity.  
              </p>
            </div>
          </div>
        </article>

        <article className="grey internal-padding">
          <div className="description-container-row margin-top max-width ml">
            <div className="description-item">
              <h4>Branding</h4>
              <p>
                For the colour palette I chose daisy, flower and nature themed colours to convey the feelings of wonder and carefree vibes. 
              </p>
              <div className="description-item row">
                <div className="imp-square">
                  <Img fluid={daisylogo11.childImageSharp.fluid} />
                </div>
                <div className="imp-square">
                  <Img fluid={daisylogo12.childImageSharp.fluid} />
                </div>
                <div className="imp-square">
                  <Img fluid={daisylogo13.childImageSharp.fluid} />
                </div>
                <div className="imp-square">
                  <Img fluid={daisylogo14.childImageSharp.fluid} />
                </div>
              </div>
              <div className="description-item row">
                <div className="imp-square">
                  <Img fluid={daisyCircleLogo28.childImageSharp.fluid} />
                </div>
                <div className="imp-square">
                  <Img fluid={daisyCircleLogo29.childImageSharp.fluid} />
                </div>
                <div className="imp-square">
                  <Img fluid={daisyCircleLogo30.childImageSharp.fluid} />
                </div>
                <div className="imp-square">
                  <Img fluid={daisyCircleLogo31.childImageSharp.fluid} />
                </div>
              </div>
            </div>
            <div className="content-column auto-margin">
              <div className="side-image">
                <Img fluid={daisyModel.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </article>
        <div className="content-column mt">
          <div className="description-item max-width ml">
            <h4>Social Media</h4>
            <p>
              Here I selected images that reflected the brand, combining with a fun display font and daises to get across the carefree nature of the brand.
            </p>
          </div>
          <div className="content-container single-img">
            <div className="image fit">
              <Img fluid={daisyInstagram.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="content-column mt grey internal-padding">
          <div className="description-item max-width ml">
            <h4>Email design</h4>
            <p>
              This email design displays their jewellery in a creative and simplistic way, encouraging customers to click through to purchase. Again with a fun display font and brand colours. 
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-container single-img">
              <div className="image fit">
                <Img fluid={daisyEmail.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default DaisyJewellery;
