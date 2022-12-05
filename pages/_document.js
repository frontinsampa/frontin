import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Head>

      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=frontin"></script>
      </body>
    </Html>
  );
}
