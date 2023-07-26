import { Suspense } from 'react'
import { PrismicRichText } from '@prismicio/react'
import dynamic from 'next/dynamic';

import Section from '../../components/Section';

export default function Relationship({ slice }) {
  const {
    primary: {
      type,
      title,
      content,
    },
  } = slice;

  const Component = dynamic(
    () => import(`../../sections/${type}`),
    { suspense: true, ssr: true },
  );

  console.log(content)

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

      {content && (
        <PrismicRichText field={slice.primary.content} />
      )}

      <Suspense fallback="Carregando...">
        <Component />
      </Suspense>
    </Section>
  );
}
