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
          En gammal dröm.
          <br />
          <em>Något gott att dela.</em>
        </p>
        <a className="text-link" href="#magnus">
          Tillbaka till Magnus ↑
        </a>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Magnus Honung</span>
        <span>Småskaligt. Svenskt. Med omtanke.</span>
      </div>
    </footer>
  );
}
