import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=<%= GOOGLE_UA %>" />
      <Script id='google-tag-manager-script'>
        {`window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '<%= GOOGLE_UA %>');`}
      </Script>

      <div className={styles.container}>
        <Head>
          <title>FRONTIN</title>
          <meta httpEquiv="refresh" content="3;URL='https://conteudo.frontinsampa.com.br/2022'" />
          <link rel="icon" href="/favicon.ico" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description"
            content="Com um alcance médio mensal de 350 mil nas redes sociais, nossos conteúdos estão disponíveis gratuitamente para qualquer pessoa. São mais de 10 anos de palestras no YouTube sobre tecnologia, 20 embaixadoras entre as maiores criadoras de conteúdo tech do Brasil, 20 anos de artigos no blog Tableless (agora parte da nossa comunidade) e novas iniciativas como o FRONTIN Cast nas plataformas de streaming." />
          <meta name="keywords"
            content="desenvolvedora frontend, desenvolvedor front-end, desenvolvedora frontend, desenvolvedor front-end, front-end em são paulo, eventos de front-end em são paulo, frontinsampa, frontinsampa, eventos de desenvolvimento, desenvolvimento, front-end, html, css, javascript, js, frontin, frontin senior, frontinsenior, eventos tech, comunidade tech, criadoras de conteúdo tech, influenciadores tech, frontin, frontin elas programam, elas programam, twilio, turing" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="http://www.frontinsampa.com.br" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="FRONTIN - Eventos e Conteúdo de Tecnologia" />
          <meta property="og:site_name" content="FRONTIN" />
          <meta property="og:description"
            content="Com um alcance médio mensal de 350 mil nas redes sociais, nossos conteúdos estão disponíveis gratuitamente para qualquer pessoa. São mais de 10 anos de palestras no YouTube sobre tecnologia, 20 embaixadoras entre as maiores criadoras de conteúdo tech do Brasil, 20 anos de artigos no blog Tableless (agora parte da nossa comunidade) e novas iniciativas como o FRONTIN Cast nas plataformas de streaming." />
          <meta property="og:image" content="https://i.imgur.com/XeWmhNh.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FRONTIN - Eventos e Conteúdo de Tecnologia" />
          <meta name="twitter:description"
            content="Com um alcance médio mensal de 350 mil nas redes sociais, nossos conteúdos estão disponíveis gratuitamente para qualquer pessoa. São mais de 10 anos de palestras no YouTube sobre tecnologia, 20 embaixadoras entre as maiores criadoras de conteúdo tech do Brasil, 20 anos de artigos no blog Tableless (agora parte da nossa comunidade) e novas iniciativas como o FRONTIN Cast nas plataformas de streaming." />
          <meta name="twitter:site" content="@frontinsp" />
          <meta name="twitter:image" content="https://i.imgur.com/XeWmhNh.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <a>FRONTIN</a>
          </h1>
          <h2 className={styles.title}>
            Eventos e produção de conteúdo para programação
          </h2>

          <p className={styles.description}>
            Impacto e transformação através da educação e tecnologia
          </p>


        </main>

        <footer className={styles.footer}>
          <a>
            FRONTIN @ 2022
          </a>
        </footer>
      </div>
    </>
  )
}
