import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <ul className="nav">
        <li className="nav-item">
          <Link href="/page/[slug]" as="/page/contact-us">
            <a className="nav-link">Contact us</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/page/[slug]" as="/page/privacy-policy">
            <a className="nav-link">Privacy Policy</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/page/[slug]" as="/page/about-us">
            <a className="nav-link">About us</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}