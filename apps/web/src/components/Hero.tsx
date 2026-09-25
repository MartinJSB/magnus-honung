export function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eyebrow">Närproducerad · Slungad på gården</p>
        <h1>
          Honung från <em>fyra kupor</em> och en gammal dröm
        </h1>
        <p className="lead">
          Magnus pratade om bin i många år. Nu surrar fyra kolonier på gården, och den första
          sommarens skörd står på burk.
        </p>
        <div className="hero__actions">
          <a href="#bestall" className="button">
            Beställ honung
          </a>
          <a href="#klass" className="button button--ghost">
            Sälj med din klass
          </a>
        </div>
      </div>
      <div className="hero__art" aria-hidden>
        <div className="comb">
          {Array.from({ length: 7 }, (_, i) => (
            <span key={i} className={`cell cell--${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
