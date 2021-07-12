import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    cm365Header: file(relativePath: { eq: "cm365-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Web1: file(relativePath: { eq: "cm365-web-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Web2: file(relativePath: { eq: "cm365-web-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Flyer1: file(relativePath: { eq: "cm365-flyer-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Flyer2: file(relativePath: { eq: "cm365-flyer-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone1: file(relativePath: { eq: "cm365-phone-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone2: file(relativePath: { eq: "cm365-phone-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cm365Phone3: file(relativePath: { eq: "cm365-phone-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Cyberman = () => {
  const {
    cm365Header,
    cm365Web1,
    cm365Web2,
    cm365Flyer1,
    cm365Flyer2,
    cm365Phone1,
    cm365Phone2,
    cm365Phone3,
  } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Cyberman</h2>
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
            <span className="image fit cyberman-img">
              <Img fluid={cm365Header.childImageSharp.fluid} />
            </span>
          </div>
        </div>
        <article className="py">
          <h2 className="title">Cyberman365</h2>
          <h5 className="title">
            Visual Identity and branding | Editorial and Marketing | Web
            design/UX &amp; UI | Social media
          </h5>

          <div className="description-container-row margin-top ml">
            <div className="description-item-single">
              <h4>Brief</h4>
              <p>
                Cyberman365 is a personal cyber insurance product from Node
                International, a cyber insurance company, for the American
                market. The task was to create all the materials needed to
                launch in 6 months and then ongoing support. I worked here as an
                in-house designer.
              </p>
            </div>
          </div>

          <div className="description-container-row ml">
            <div className="description-item-single">
              <h4>The Result</h4>
              <p>
                <ul className="description-ul">
                  <li>
                    50+ brokers in a week registered their interest in selling
                    the product using the landing page.
                  </li>
                  <li>
                    Empowered the Sales team with new marketing materials,
                    bringing onboard 40+ new brokers.
                  </li>
                  <li>
                    LinkedIn content saw follower count grow from 0 to 100+ in 6
                    months with some posts reaching creating high engagement
                    statistics.
                  </li>

                  <li>
                    Insurance materials were designed with ease in mind
                    featuring e-signs and interactive features to improve
                    usability and reduce friction.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </article>

        <article className="grey internal-padding">
          <div className="description-container-row margin-top max-width ml">
            <div className="description-item">
              <h4>Branding</h4>
              <p>
                The product consists of two separately sold services reflected
                in the colour choice. Red for IDNotify (identity theft
                protection) and midnight blue for HomeSafe internet-connected
                household devices cyber protection. The gradient is to be used
                for the product as a whole.
              </p>
            </div>
            <div className="content-column auto-margin">
              <div className="description-item row limit-width">
                <div className="square navy mx"></div>
                <div className="square red mx"></div>
                <div className="square maroon mx"></div>
              </div>
            </div>
          </div>
        </article>
        <div className="content-column mt">
          <div className="description-item max-width ml">
            <h4>Landing page UX and UI</h4>
            <p>
              The landing page includes product mock-ups to communicate to
              product well. High contrasting colours help the information stand
              out. We enabled brokers to add their logo on this page so that
              clients would have trust in the landing page.
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-image-duo">
              <Img fluid={cm365Web1.childImageSharp.fluid} />
            </div>
            <div className="content-image-duo">
              <Img fluid={cm365Web2.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="content-column mt grey internal-padding">
          <div className="description-item max-width ml">
            <h4>Editorial and marketing</h4>
            <p>
              After researching competitors, I created some base materials. I
              then interviewed brokers on their sales process to discover how we
              could support them sell. I also created useful resources like the
              ‘Identity Theft Recovery Plan’ to share on social media or
              directly with clients. The user-friendly materials included
              interactive features such as fill in boxes, e-signs and
              checkboxes.
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-image-duo">
              <Img fluid={cm365Flyer1.childImageSharp.fluid} />
            </div>
            <div className="content-image-duo">
              <Img fluid={cm365Flyer2.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="content-column mt">
          <div className="description-item max-width ml">
            <h4>Social media posts</h4>
            <p>
              I designed reusable templates to showcase employees, bring
              attention to news and also statistics through creative
              infographics.
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-image-mobile">
              <Img fluid={cm365Phone1.childImageSharp.fluid} />
            </div>
            <div className="content-image-mobile">
              <Img fluid={cm365Phone2.childImageSharp.fluid} />
            </div>
            <div className="content-image-mobile">
              <Img fluid={cm365Phone3.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default Cyberman;
