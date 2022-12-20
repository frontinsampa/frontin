import Head from 'next/head';
import { SliceZone } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '../prismicio';
import { components } from '../slices';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';

const Page = (props) => {
  const {
    page: {
      data: {
        title,
        content,
        slices,
      },
      alternate_languages: languages,
    },
    settings,
  } = props;

  return (
    <Layout
      settings={settings}
      languages={languages}
      title={title}
    >
      <PrismicRichText field={title} />
      <PrismicRichText field={content} />

      <SliceZone
        slices={slices}
        components={components}
      />
    </Layout>
  );
};

export default Page;

export async function getStaticProps(props) {
  const {
    params,
    locale: lang,
    previewData
  } = props;

  const client = createClient({ previewData });

  const page = await client.getByUID(
    'page',
    params.uid,
    { lang },
  );

  const settings = await client.getSingle(
    'settings',
    { lang },
  );

  return {
    props: {
      page,
      settings: settings.data,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,

  };
}
