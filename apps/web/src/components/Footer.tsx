import { Bee } from "./Brand";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a className="logo" href="#">
          <Bee />
          <span>
            magnus<span className="logo__sub">HONUNG</span>
          </span>
        </a>
        <p>
          Svensk honung
          <br />
          <em>från gården i Nykvarn.</em>
        </p>
        <a className="text-link" href="#magnus">
          Tillbaka till Magnus ↑
        </a>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Magnus Honung</span>
        <span>Magnus Brolin · Sundby i Spånga och Nykvarn</span>
      </div>
    </footer>
  );
}
