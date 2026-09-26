import { Arrow, Bee } from "./Brand";
export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="little-line" /> SVENSK HONUNG FRÅN NYKVARN
          </p>
          <h1>
            En liten burk.
            <br />
            En hel sommar.
            <br />
            <em>En gammal dröm.</em>
          </h1>
          <p className="hero__intro">
            Magnus har pratat om bin i många år.
            <br className="desktop-break" /> Nu står fyra kupor på gården i Nykvarn,
            <br className="desktop-break" /> och årets honung finns att beställa.
          </p>
          <div className="hero__actions">
            <a href="#honung" className="button">
              Upptäck honungen <Arrow />
            </a>
            <a href="#magnus" className="text-link">
              Lär känna Magnus <span aria-hidden="true">↓</span>
            </a>
          </div>
          <a className="hero__person" href="#magnus">
            <img src="/images/springa.jpg" alt="" />
            <span>
              Magnus Brolin<small>Lär känna biodlaren</small>
            </span>
          </a>
        </div>
        <div className="hero__visual">
          <img
            className="hero__photo"
            src="/images/honung.webp"
            alt="En sked lyfter krämig honung ur en öppen glasburk med guldlock på ett träbord"
            fetchPriority="high"
          />
          <div className="hero__seal">
            <span>FRÅN BLOMMA</span>
            <Bee />
            <span>TILL BURK</span>
          </div>
          <span className="hero__caption">SMAKEN AV EN SVENSK SOMMAR</span>
        </div>
      </section>
      <div className="values-strip">
        <span>Svensk honung</span>
        <i>✳</i>
        <span>Slungad för hand</span>
        <i>✳</i>
        <span>Kvalitetsbedömd 2026</span>
        <i>✳</i>
        <span>Direkt från biodlaren</span>
      </div>
    </>
  );
}
