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
        "
      >
        {items?.map((item, i) => (
          <div key={i}>
            <PrismicRichText
              field={item.title}
              // components={{
              //   heading2: ({ children }) => (
              //     <h2 className="text-3xl">
              //       {children}
              //     </h2>
              //   )
              // }}
            />

            <PrismicRichText
              field={item.content}
              // components={{
              //   heading2: ({ children }) => (
              //     <h2 className="text-3xl">
              //       {children}
              //     </h2>
              //   )
              // }}
            />

            <Button
              href={item.link.url}
              target={item.link.target}
              className="w-full"
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
