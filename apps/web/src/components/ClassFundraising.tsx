import { CLASS_MIN_JARS, CLASS_PRICE_SEK, PRODUCTS } from "@magnus-honung/shared";
import { Arrow } from "./Brand";
const retail = PRODUCTS[0].priceSek;
export function ClassFundraising() {
  return (
    <section id="klass" className="fundraising">
      <div className="fundraising__intro">
        <p className="eyebrow">NÅGOT GOTT ATT GÖRA TILLSAMMANS</p>
        <h2>
          Små burkar.
          <br />
          <em>Stora klassdrömmar.</em>
        </h2>
        <p>
          En klassresa, en lagcup eller något helt annat att längta till? Sälj honung som familj och
          grannar kan njuta av, och låt en del gå till er gemensamma dröm.
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
              <strong>Sälj något gott</strong>Familj och grannar köper för {retail} kr per burk.
            </p>
          </li>
          <li>
            <span>03</span>
            <p>
              <strong>Kom närmare er dröm</strong>40 burkar ger {40 * (retail - CLASS_PRICE_SEK)} kr
              till klasskassan.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
