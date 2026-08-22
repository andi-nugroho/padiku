import Link from "next/link"

const columns = [
  {
    title: "Platform",
    links: [
      "Enterprise Console",
      "Field Agent App",
      "API Documentation",
      "Status Page",
    ],
  },
  {
    title: "Resources",
    links: ["EUDR Compliance Guide", "Whitepaper", "Case Studies", "Blog"],
  },
  {
    title: "Contact",
    links: ["hello@panora.farm", "Jakarta, Indonesia", "Privacy Policy", "Terms of Service"],
  },
] as const

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-name">Panora</div>
          <p className="footer-brand-desc">
            First-mile traceability and EUDR compliance infrastructure for
            global commodity supply chains.
          </p>
        </div>
        <div className="footer-columns">
          {columns.map(({ title, links }) => (
            <div key={title}>
              <div className="footer-col-title">{title}</div>
              <ul className="footer-links">
                {links.map((label) => (
                  <li key={label}>
                    <Link href="#">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Panora. All rights reserved.</span>
      </div>
    </footer>
  )
}
