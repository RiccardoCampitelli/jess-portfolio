import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import config from '../../config';

import { Spotlight } from '../components/Spotlight';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    bearcroft: file(relativePath: { eq: "bearcroft.png" }) {
      childImageSharp {
        fluid(maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { bearcroft } = useStaticQuery(query);

  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="one">
                <a href="/#" className="button primary">
                  Explore
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="one">
          <a href="#one" className="more">
            Learn More
          </a>
        </Scroll>
      </section>

      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>
              Arcu aliquet vel lobortis ata nisl
              <br />
              eget augue amet aliquet nisl cep donec
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
              ullamcorper.
            </p>
          </header>
          {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
        </div>
      </section>

      <section id="two" className="wrapper alt style2">
        <Spotlight
          imageSrc={bearcroft}
          title={'Title'}
          subtitle={'subtitle'}
          to="/logo-design"
        />
        <Spotlight
          imageSrc={bearcroft}
          title={'Title'}
          subtitle={'subtitle'}
          to="/Generic"
        />
        <Spotlight
          imageSrc={bearcroft}
          title={'Title'}
          subtitle={'subtitle'}
          to="/Generic"
        />
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Arcue ut vel commodo</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
              amet eleifend fringilla.
            </p>
          </header>
          <ul className="actions stacked">
            <li>
              <a href="/#" className="button fit primary">
                Activate
              </a>
            </li>
            <li>
              <a href="/#" className="button fit">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
