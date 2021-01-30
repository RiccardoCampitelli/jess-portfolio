import React from 'react';
import { Link } from 'gatsby';

const Spotlight = ({ imageSrc, title, subtitle, to }) => (
  <section className="spotlight">
    <div className="image">
      <Link to={to}>
        <img src={imageSrc} alt="" />
      </Link>
    </div>
    <div className="content">
      <h2>
        {title}
        <br />
        sed ullamcorper
      </h2>
      <p>{subtitle}</p>
    </div>
  </section>
);

export { Spotlight };
