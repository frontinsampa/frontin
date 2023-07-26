import React from 'react';
import Link from '../../components/Link';

export default function Social({ slice }) {
  const list = slice.items;

  if (!list) {
    return null;
  }

  return (
    <>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <Link
              link={item.link}
              target="_blank"
              title={item.label}
              aria-label={item.a11y}
            >
              <span className="sr-only">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* <style jsx>{`
          section {
            max-width: 600px;
            margin: 4em auto;
            text-align: center;
          }
          .title {
            color: #8592e0;
          }
      `}</style> */}
    </>
  );
}
