import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Lee los últimos artículos sobre SEO y desarrollo web en nuestro blog." />
        <meta property="og:title" content="Blog | Mi Proyecto SEO" />
        <meta property="og:description" content="Lee los últimos artículos sobre SEO y desarrollo web en nuestro blog." />
        <meta property="og:type" content="article" />
      </Head>
      <h1>Blog</h1>
      <p>Próximamente artículos sobre SEO y desarrollo web.</p>
    </>
  );
}