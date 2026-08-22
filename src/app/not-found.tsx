import Link from "next/link"

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--sans)",
        background: "var(--background)",
        color: "var(--foreground)",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          marginBottom: "0.5rem",
          color: "var(--olive-800)",
        }}
      >
        Coming Soon
      </h1>
      <p
        style={{
          fontSize: "1.125rem",
          color: "var(--stone)",
          maxWidth: "28rem",
          lineHeight: 1.6,
          marginBottom: "2rem",
        }}
      >
        This page is still being cultivated. Check back soon.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          background: "var(--olive-800)",
          color: "var(--bone)",
          borderRadius: "9999px",
          textDecoration: "none",
          fontSize: "0.9375rem",
          fontWeight: 500,
          transition: "background 0.2s",
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}
