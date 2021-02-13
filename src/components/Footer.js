import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>
          Made with ♥️ by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RiccardoCampitelli"
          >
            Riccardo Campitelli
          </a>
        </li>
      </ul>
    </footer>
  );
}
