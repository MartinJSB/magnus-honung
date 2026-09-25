export function Story() {
  return (
    <>
      <section id="magnus" className="section story">
        <div className="story__photos">
          <figure className="story__main-photo">
            <img
              src="/images/springa.jpg"
              alt="Magnus ute på en löprunda i grönskan"
              loading="lazy"
            />
            <figcaption>Magnus, som gärna är där det grönskar.</figcaption>
          </figure>
          <figure className="story__small-photo">
            <img
              src="/images/rhodos.jpg"
              alt="Magnus tillsammans med sällskap på semester vid havet"
              loading="lazy"
            />
            <figcaption>Lite ledigt, mycket liv.</figcaption>
          </figure>
        </div>
        <div className="story__text">
          <p className="eyebrow">MÄNNISKAN BAKOM HONUNGEN</p>
          <h2>
            Det här är Magnus.
            <br />
            <em>Han gillar bin.</em>
            <br />
            Väldigt mycket.
          </h2>
          <p>
            Alla som känner Magnus har nog hört honom prata om biodling. Om bina, om blommorna och
            om hur fint det är att få vara en liten del av allt som växer.
          </p>
          <p>
            Till vardags bor han i en villa i Sundby. Annars hittar man honom gärna på gården i
            Nykvarn. Vill du hämta en burk honung går det bra på någon av platserna – ni bestämmer
            tillsammans var och när det passar.
          </p>
          <div className="signature">
            Magnus<span>Biodlare med hjärtat i det gröna</span>
          </div>
        </div>
      </section>
      <section className="quality" aria-labelledby="quality-heading">
        <div className="quality__inner">
          <a
            className="quality__preview"
            href="/documents/kvalitetsintyg-2026-magnus-brolin.pdf"
            aria-label="Visa Magnus Brolins kvalitetsintyg 2026 som PDF"
          >
            <img
              src="/images/kvalitetsintyg-2026-magnus-brolin.webp"
              alt="Kvalitetsintyg 2026 tilldelat Magnus Brolin"
              width="778"
              height="1100"
              loading="lazy"
            />
          </a>
          <div className="quality__text">
            <p className="eyebrow">GODKÄND HONUNGSBEDÖMNING · 2026</p>
            <h2 id="quality-heading">
              Mycket hjärta.
              <br />
              <em>Och noga med honungen.</em>
            </h2>
            <p>
              Magnus pratar gärna om sina bin. Men honungen får också tala för sig själv. Den har
              bedömts med godkänt resultat enligt Sveriges Biodlares Riksförbunds honungsreglemente
              – förpackning, färg, renhet, konsistens och vattenhalt.
            </p>
            <a className="text-link" href="/documents/kvalitetsintyg-2026-magnus-brolin.pdf">
              Läs kvalitetsintyget <span className="quality__format">PDF · 1 MB</span>
              <span aria-hidden="true">↗</span>
            </a>
            <p className="quality__issued">
              Utfärdat av SSB – Biodlarförening den 23 september 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
