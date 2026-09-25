export function Story() {
  return (
    <>
      <section id="magnus" className="section story">
        <div className="story__photos">
          <figure className="story__main-photo">
            <img
              src="/images/biodlare.webp"
              alt="Magnus i bidräkt vid kuporna tillsammans med sin son Henke i egen bidräkt"
              width="1000"
              height="1250"
              loading="lazy"
            />
            <figcaption>Magnus och hans son Henke</figcaption>
          </figure>
        </div>
        <div className="story__text">
          <p className="eyebrow">OM MAGNUS</p>
          <h2>
            Det här är Magnus.
            <br />
            <em>Han har fyra kupor</em>
            <br />
            på gården i Nykvarn.
          </h2>
          <p>
            Biodling har länge varit Magnus stora intresse – den som känner honom har säkert hört
            honom berätta om bina. Honungen slungas och tappas på burk för hand, i små mängder och
            efter säsongen.
          </p>
          <p>
            Magnus bor i Sundby i Spånga och är ofta på gården i Nykvarn. Honungen kan hämtas på
            båda ställena – ni kommer överens om tid och plats.
          </p>
          <div className="signature">
            Magnus<span>Biodlare i Nykvarn</span>
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
