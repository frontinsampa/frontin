import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';

import Section from '../../components/Section';

/**
 * @todo move to utils
 */
function toSnakeCase(str) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export default function Faq({ slice }) {
  const {
    items = [],
    primary: {
      title,
      content,
    },
  } = slice;

  return (
    <Section className="
      max-w-3xl
    ">
      <div className="mb-8">
        <PrismicRichText
          field={title}
        />

        <PrismicRichText
          field={content}
        />
      </div>

      {items?.map((item, i) => (
        <div
          id={toSnakeCase(
            asText(item.title)
          )}
          key={i}
          className="mb-8"
        >
          <div className="
            border-l-4
            px-4
            border-red
          ">
            <PrismicRichText field={item.title} />
          </div>

          <PrismicRichText field={item.content} />
        </div>
      ))}
    </Section>
  );
}
