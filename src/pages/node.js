import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import ContactFooter from '../components/ContactFooter';

const query = graphql`
  query {
    nodeHeader: file(relativePath: { eq: "node-header.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeWeb1: file(relativePath: { eq: "node-web-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeWeb2: file(relativePath: { eq: "node-web-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePoster1: file(relativePath: { eq: "node-poster-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePoster2: file(relativePath: { eq: "node-poster-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePhone1: file(relativePath: { eq: "node-phone-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePhone2: file(relativePath: { eq: "node-phone-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodePhone3: file(relativePath: { eq: "node-phone-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Node = () => {
  const {
    nodeHeader,
    nodeWeb1,
    nodeWeb2,
    nodePoster1,
    nodePoster2,
    nodePhone1,
    nodePhone2,
    nodePhone3
  } = useStaticQuery(query);
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>Node International</h2>
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
          <span className="image fit">
            <Img fluid={nodeHeader.childImageSharp.fluid} />
          </span>
        </div>
        <article className="py">
          <h2 className="title">Node International</h2>
          <h5 className="title">
            Visual Identity and branding | Editorial and Marketing | Web
            design/UX &amp; UI | Social media
          </h5>

          <div className="description-container-row margin-top ml">
            <div className="description-item-single">
              <h4>Brief</h4>
              <p>
                Node International is a cyber insurance start-up, based in
                London with a strong focus on North America, who wants to stand
                out from the corporate world of insurance with forward-thinking
                ideas and a strong digital design presence. As a B2B business
                they’re sold through insurance brokers; I worked here as an
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
                    Fast forward a year, the website is pulling in triple the
                    number of web impressions.
                  </li>
                  <li>
                    The Sales team is empowered with their new marketing
                    materials, bringing onboard 200+ new brokers.
                  </li>
                  <li>
                    Node’s followers grew x5 with some posts reaching engagement
                    highs of 15%! (2% average). Overall, consistently achieving
                    high engagement.
                  </li>

                  <li>
                    Established Node as a trusted market leader with quotes
                    hitting record highs. They also received positive comments
                    externally on the marketing materials, website, and social
                    media content.
                  </li>
                  <li>
                    User-friendly materials increased the turnaround of quotes
                    and purchases.
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
                Through my research, I found that the blue logo colour is common
                with insurance companies, so I differentiated with unique
                complementary colours, highlighting the added value of
                Prevention and Detection alongside Insurance. There was a fine
                balance between differentiating in an over-saturated market and
                instilling trust and reliability.
              </p>
            </div>
            <div className="content-column auto-margin">
              <div className="description-item row limit-width">
                <div className="square node-dark-blue mx"></div>
                <div className="square node-blue mx"></div>
                <div className="square node-green mx"></div>
              </div>
              <div className="description-item row limit-width">
                <div className="square node-yellow mx"></div>
                <div className="square node-blue mx"></div>
              </div>
            </div>
          </div>
        </article>
        <div className="content-column mt">
          <div className="description-item max-width ml">
            <h4>Website UX and UI</h4>
            <p>
              Considering UX and UI principles, I overhauled the old website
              with a new site map, responsive design and branding to reflect the
              new guidelines. As a result, the website now receives triple the
              number of web impressions. 45 days to complete a website overhaul,
              new design, site map including copy, created in Wordpress (which I
              quickly learnt on the job) so it was more accessible for employees
              who don’t know code.
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-image-duo">
              <Img fluid={nodeWeb1.childImageSharp.fluid} />
            </div>
            <div className="content-image-duo">
              <Img fluid={nodeWeb2.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="content-column mt grey internal-padding">
          <div className="description-item max-width ml">
            <h4>Editorial and marketing</h4>
            <p>
              Previously working in Word, they needed a re-design with more
              direction and consistency. I created over 20 files in just 2
              months, alongside other tasks. This empowered the Sales team to
              increase submissions and to be professional when issuing policy
              documents to customers. The interactive documents were user
              friendly, e.g. a linked contents page for the 50+ page ‘Policy
              wording’ and e-signs.
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-image-duo">
              <Img fluid={nodePoster1.childImageSharp.fluid} />
            </div>
            <div className="content-image-duo">
              <Img fluid={nodePoster2.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="content-column mt">
          <div className="description-item max-width ml">
            <h4>Social media posts</h4>
            <p>
              Creating social media LinkedIn graphics that inspired likes,
              shares and comments. Infographics were a fan favourite. Reusable
              templates with brand designs and colours.
            </p>
          </div>
          <div className="content-container max-width">
            <div className="content-image-mobile">
              <Img fluid={nodePhone1.childImageSharp.fluid} />
            </div>
            <div className="content-image-mobile">
              <Img fluid={nodePhone2.childImageSharp.fluid} />
            </div>
            <div className="content-image-mobile">
              <Img fluid={nodePhone3.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
};

export default Node;
