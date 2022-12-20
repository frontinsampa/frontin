import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html
      className="
        bg-black
        text-white
      ">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MSH8CK3');`,
          }}
        />
      </Head>

      <body className="
        overflow-x-hidden
        antialiased
      ">
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSH8CK3" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
          }}
        />

        <Main />
        <NextScript />

        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=frontin"></script>
      </body>
    </Html>
  );
}
