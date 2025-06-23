import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Proyecto SEO</title>
        <meta name="description" content="Ponte en contacto con nosotros para consultas sobre SEO, desarrollo web y optimización de tu sitio." />
        <meta property="og:title" content="Contacto | Mi Proyecto SEO" />
        <meta property="og:description" content="Ponte en contacto con nosotros para consultas sobre SEO, desarrollo web y optimización de tu sitio." />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <form style={{
          background: "#fff",
          padding: 32,
          borderRadius: 12,
          boxShadow: "0 4px 24px #6366f155",
          minWidth: 320
        }}>
          <h1 style={{ color: "#3730a3" }}>Contáctanos</h1>
          <label style={{ display: "block", marginTop: 16 }}>
            Nombre:
            <input type="text" name="nombre" style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 6,
              border: "1px solid #c7d2fe"
            }} />
          </label>
          <label style={{ display: "block", marginTop: 16 }}>
            Email:
            <input type="email" name="email" style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 6,
              border: "1px solid #c7d2fe"
            }} />
          </label>
          <label style={{ display: "block", marginTop: 16 }}>
            Mensaje:
            <textarea name="mensaje" rows={4} style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 6,
              border: "1px solid #c7d2fe"
            }} />
          </label>
          <button type="submit" style={{
            marginTop: 24,
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 24px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>Enviar</button>
        </form>
      </main>
    </>
  );
}