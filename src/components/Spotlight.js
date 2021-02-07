import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Spotlight = ({ imageSrc, title, subtitle, to }) => (
  <section className="spotlight">
    <div className="image">
      <Link to={to}>
        <Img fluid={imageSrc.childImageSharp.fluid} alt="" />
      </Link>
    </div>
    <div className="content">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </section>
);

export { Spotlight };
