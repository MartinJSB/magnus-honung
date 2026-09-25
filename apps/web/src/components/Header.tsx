export function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span aria-hidden>⬢</span> Magnus Honung
      </a>
      <nav>
        <a href="#honung">Honungen</a>
        <a href="#klass">För klasser</a>
        <a href="#bestall" className="button button--small">
          Beställ
        </a>
      </nav>
    </header>
  );
}
