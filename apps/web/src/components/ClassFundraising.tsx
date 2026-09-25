import { CLASS_MIN_JARS, CLASS_PRICE_SEK, PRODUCTS } from "@magnus-honung/shared";

const retail = PRODUCTS[0].priceSek;

export function ClassFundraising() {
  return (
    <section id="klass" className="section fundraising">
      <h2>Samla till klassresan med honung</h2>
      <p className="lead">
        Klasser och föreningar köper honungen för {CLASS_PRICE_SEK} kr/burk och säljer den för{" "}
        {retail} kr. Något folk faktiskt vill ha – och som håller i månader.
      </p>
      <ol className="steps">
        <li>
          <strong>Beställ</strong> minst {CLASS_MIN_JARS} burkar (500 g) via formuläret nedan.
        </li>
        <li>
          <strong>Sälj</strong> till familj och grannar för {retail} kr/burk.
        </li>
        <li>
          <strong>Behåll</strong> {retail - CLASS_PRICE_SEK} kr per burk till klasskassan.
        </li>
      </ol>
      <p className="fundraising__example">
        Exempel: 40 burkar ger <strong>{40 * (retail - CLASS_PRICE_SEK)} kr</strong> till klassen.
      </p>
    </section>
  );
}
