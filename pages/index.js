import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Bienvenido a la página principal de Mi Proyecto SEO, aprende sobre optimización web." />
        <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
        <meta property="og:description" content="Bienvenido a la página principal de Mi Proyecto SEO, aprende sobre optimización web." />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}