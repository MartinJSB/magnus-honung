import { Arrow, Bee } from "./Brand";
export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Hoppa till innehållet
      </a>
      <header className="header">
        <a href="#" className="logo" aria-label="Magnus Honung, startsida">
          <Bee />
          <span>
            magnus<span className="logo__sub">HONUNG</span>
          </span>
        </a>
        <nav aria-label="Huvudmeny">
          <a href="#magnus">Möt Magnus</a>
          <a href="#honung">Honungen</a>
          <a href="#klass">För klasser</a>
          <a href="#bestall" className="button button--small">
            Beställ honung <Arrow />
          </a>
        </nav>
      </header>
    </>
  );
}
