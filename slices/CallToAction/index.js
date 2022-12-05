import React from 'react';
import { PrismicRichText } from '@prismicio/react';

import Section from '../../components/Section';
import Button from '../../components/Button';

export default function CallToAction({ slice }) {
  const {
    primary: {
      title,
      content,
    },
    items,
  } = slice;

  return (
    <Section>
      <PrismicRichText
        field={title}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-3xl">
              {children}
            </h2>
          )
        }}
      />

      <PrismicRichText field={content} />

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-4
          space-between
          gap-8
        "
      >
        {items?.map((item, i) => (
          <div
            key={i}
            className="
              grid
              auto-cols-auto
            "
          >
            <div className="mb-4">
              <PrismicRichText
                field={item.title}
                // components={{
                //   heading3: ({ children }) => (
                //     <h3>
                //       {children}
                //     </h3>
                //   ),
                // }}
              />

              <PrismicRichText
                field={item.content}
              />
            </div>

            <Button
              href={item.link.url}
              target={item.link.target}
              className="
                w-full
                self-end
              "
            >
              <PrismicRichText
                field={item.link_label}
                // components={{
                //   heading2: ({ children }) => (
                //     <h2 className="text-3xl">
                //       {children}
                //     </h2>
                //   )
                // }}
              />
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
