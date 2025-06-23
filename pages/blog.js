import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Proyecto SEO</title>
        <meta name="description" content="Lee los últimos artículos sobre SEO, rendimiento web y desarrollo moderno en nuestro blog." />
        <meta property="og:title" content="Blog | Mi Proyecto SEO" />
        <meta property="og:description" content="Lee los últimos artículos sobre SEO, rendimiento web y desarrollo moderno en nuestro blog." />
        <meta property="og:type" content="article" />
      </Head>
      <Navbar />
      <main style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #f1f5f9 0%, #c7d2fe 100%)",
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px 0"
      }}>
        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 4px 24px #c7d2fe55",
          padding: 32
        }}>
          <h1 style={{ color: "#3730a3" }}>Blog de SEO y Desarrollo Web</h1>
          <article style={{ marginTop: 24 }}>
            <h2 style={{ color: "#6366f1" }}>¿Por qué es importante el SEO en Next.js?</h2>
            <p>
              Next.js facilita la optimización para motores de búsqueda gracias al renderizado del lado del servidor y la gestión avanzada de meta tags.
            </p>
          </article>
          <article style={{ marginTop: 24 }}>
            <h2 style={{ color: "#6366f1" }}>Mejores prácticas para un sitio rápido</h2>
            <ul>
              <li>Optimiza imágenes y recursos estáticos.</li>
              <li>Utiliza meta tags adecuados en cada página.</li>
              <li>Genera un sitemap dinámico para Google.</li>
            </ul>
          </article>
        </div>
      </main>
    </>
  );
}