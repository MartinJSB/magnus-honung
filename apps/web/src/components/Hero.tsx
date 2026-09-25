import { Arrow, Bee } from "./Brand";
export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="little-line" /> SMÅSKALIGT. SVENSKT. PERSONLIGT.
          </p>
          <h1>
            En liten burk.
            <br />
            En hel sommar.
            <br />
            <em>En gammal dröm.</em>
          </h1>
          <p className="hero__intro">
            Det började med att Magnus pratade om bin.
            <br className="desktop-break" /> Och pratade lite till. Nu får drömmen ta plats
            <br className="desktop-break" /> – en kupa och en burk i taget.
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
              Från Magnus, med omtanke.<small>För bina, naturen och det goda i vardagen.</small>
            </span>
          </a>
        </div>
        <div className="hero__visual">
          <img
            className="hero__photo"
            src="/images/honey-still-life.png"
            alt="Stämningsbild av gyllene honung, vaxkaka och sommarblommor i varmt solljus"
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
        <span>Småskalig biodling</span>
        <i>✳</i>
        <span>Direkt från Magnus</span>
        <i>✳</i>
        <span>Med naturen nära</span>
      </div>
    </>
  );
}
