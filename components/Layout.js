import Head from 'next/head';
import * as prismicH from '@prismicio/helpers';

import { Footer } from './Footer';

export const Layout = ({
  alternateLanguages,
  settings,
  children,
  title,
  metaDescription: inheritedMetaDescription = '',
  metaKeywords: inheritedMetaKeywords = '',
}) => {
  const description = inheritedMetaDescription || settings.data?.meta_description;
  const keywords = inheritedMetaKeywords || settings.data?.meta_keywords;

  return (
    <>
      <Head>
        <title>
          {prismicH.asText(title)} |{" "}
          {settings.data.title}
        </title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className="
        bg-black
        text-white
      ">
        <div className="
          container
          mx-auto
        ">
          {/* <Header
            alternateLanguages={alternateLanguages}
            navigation={navigation}
            settings={settings}
          /> */}
          <main>{children}</main>

          <Footer settings={settings} />
        </div>
      </div>
    </>
  );
};
