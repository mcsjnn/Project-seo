import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      background: "linear-gradient(90deg, #6366f1 0%, #3730a3 100%)",
      padding: "16px 0",
      boxShadow: "0 2px 8px #6366f122"
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px"
      }}>
        <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.3rem", letterSpacing: 1 }}>
          Mi Proyecto SEO
        </span>
        <div>
          <Link href="/" style={{ color: "#fff", margin: "0 16px", textDecoration: "none", fontWeight: "500" }}>Inicio</Link>
          <Link href="/blog" style={{ color: "#fff", margin: "0 16px", textDecoration: "none", fontWeight: "500" }}>Blog</Link>
          <Link href="/contacto" style={{ color: "#fff", margin: "0 16px", textDecoration: "none", fontWeight: "500" }}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
}