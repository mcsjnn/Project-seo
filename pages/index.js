import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Proyecto SEO</title>
        <meta name="description" content="Bienvenido a la página principal de Mi Proyecto SEO, aprende sobre optimización web y SEO moderno." />
        <meta property="og:title" content="Inicio | Mi Proyecto SEO" />
        <meta property="og:description" content="Bienvenido a la página principal de Mi Proyecto SEO, aprende sobre optimización web y SEO moderno." />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, sans-serif"
      }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1e293b" }}>Bienvenido a Mi Proyecto SEO</h1>
        <p style={{ fontSize: "1.2rem", color: "#334155", maxWidth: 600, textAlign: "center" }}>
          Aprende cómo mejorar el rendimiento y SEO en Next.js con ejemplos prácticos y recursos útiles.
        </p>
      </main>
    </>
  );
}