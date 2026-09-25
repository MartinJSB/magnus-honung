import { CLASS_MIN_JARS, CLASS_PRICE_SEK, PRODUCTS } from "@magnus-honung/shared";
import { Arrow } from "./Brand";
const retail = PRODUCTS[0].priceSek;
export function ClassFundraising() {
  return (
    <section id="klass" className="fundraising">
      <div className="fundraising__intro">
        <p className="eyebrow">FÖR KLASSER OCH FÖRENINGAR</p>
        <h2>
          Små burkar.
          <br />
          <em>Pengar till klasskassan.</em>
        </h2>
        <p>
          Ska klassen eller laget på resa, cup eller något annat? Köp honung till klasspris, sälj
          till ordinarie pris och behåll mellanskillnaden.
        </p>
        <a href="#bestall" className="button button--light">
          Beställ till klassen <Arrow />
        </a>
      </div>
      <div className="fundraising__numbers">
        <div className="fundraising__amount">
          {retail - CLASS_PRICE_SEK}
          <span>
            kr per burk
            <br />
            till er klass
          </span>
        </div>
        <ol className="steps">
          <li>
            <span>01</span>
            <p>
              <strong>Beställ tillsammans</strong>Minst {CLASS_MIN_JARS} burkar à 500 g för{" "}
              {CLASS_PRICE_SEK} kr styck.
            </p>
          </li>
          <li>
            <span>02</span>
            <p>
              <strong>Sälj vidare</strong>Familj och grannar köper för {retail} kr per burk.
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              <strong>Behåll skillnaden</strong>40 burkar ger {40 * (retail - CLASS_PRICE_SEK)} kr
              till klasskassan.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
