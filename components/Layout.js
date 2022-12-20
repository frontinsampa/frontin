import Head from 'next/head';
import * as prismicH from '@prismicio/helpers';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({
  settings,
  children,
  title,
  metaDescription: inheritedMetaDescription = '',
  metaKeywords: inheritedMetaKeywords = '',
  languages = [],
  header = true,
}) => {
  const description = inheritedMetaDescription || settings?.meta_description;
  const keywords = inheritedMetaKeywords || settings?.meta_keywords;

  return (
    <>
      <Head>
        <title>
          {prismicH.asText(title)} | {settings.title}
        </title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className="
        bg-black
        text-white
        relative
      ">
        {header && (
          <div className="
            sticky
            top-0
            mb-16
          ">
            <Header
              settings={settings}
              languages={languages}
            />
          </div>
        )}

        <div className="
          container
          mx-auto
        ">
          <main>
            {children}
          </main>

          <Footer settings={settings} />
        </div>
      </div>
    </>
  );
};
