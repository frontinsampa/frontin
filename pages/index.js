import * as React from 'react';
import { SliceZone, PrismicRichText } from '@prismicio/react';
import Typed from 'typed.js';
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from '../prismicio';
import { components } from '../slices';
import { Layout } from '../components/Layout';

export default function Home(props) {
  const {
    page,
    navigation,
    settings,
  } = props;

  const {
    content,
    title,
    logo,
    slices,
    ...data
  } = page.data;

  const headingRef = React.useRef();

  /**
   * @todo transform in a component
   */
  React.useEffect(() => {
    const headingTyped = new Typed(
      headingRef.current,
      {
        strings: [
          headingRef.current.dataset.typed,
        ],
        showCursor: true,
        typeSpeed: 30,
      }
    );

    return () => {
      headingTyped.destroy();
    }
  }, []);

  return (
    <Layout
      alternateLanguages={page.alternate_languages}
      navigation={navigation}
      settings={settings}
      title={title}
      metaDescription={data?.meta_description}
      metaKeywords={data?.meta_keywords}
      header={false}
    >
      <div className="
        lg:h-[800px]
        lg:py-0
        py-12
      ">
        <div className="
          h-full
          grid
          lg:grid-cols-2
          grid-cols-1
          items-center
        ">
          <div className="
            mx-auto
            mb-12
            lg:mb-0
            lg:mx-0
          ">
          <PrismicNextImage
            field={settings.logo_full}
            width={383}
            className="
              md:w-[383px]
              w-full
            "
          />
          </div>

          <div className="
            lg:text-right
            text-center
          ">
            <PrismicRichText
              field={content}
              components={{
                heading2: ({ text }) => (
                  <h2 className="
                    font-heading
                    lg:text-4xl
                    text-3xl
                    mb-0
                  ">
                    <span
                      ref={headingRef}
                      data-typed={text}
                    />
                  </h2>
                ),
              }}
            />
          </div>
        </div>
      </div>

      <SliceZone
        slices={slices}
        components={components}
      />
    </Layout>
  );
}

export async function getStaticProps(props) {
  const {
    locale: lang,
    previewData
  } = props;

  const client = createClient({ previewData });

  const page = await client.getSingle(
    'home',
    { lang: 'pt-br' },
  );

  const settings = await client.getSingle(
    'settings',
    { lang: 'pt-br' },
  );

  return {
    props: {
      page,
      settings: settings.data,
    },
  };
}
