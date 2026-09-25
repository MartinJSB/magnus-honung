import { Bee } from "./Brand";
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
          <p>
            Det har varit en dröm länge. Inte att göra något stort, utan att göra något som känns
            meningsfullt. Att lära sig, ta hand om bina och få dela med sig av honungen längs vägen.
          </p>
          <p>
            Och det är ungefär så han vill ha det. Nära naturen, i liten skala och med hjärtat med.
            En riktigt god honung blir en fin bonus.
          </p>
          <div className="signature">
            Magnus<span>Biodlare med hjärtat i det gröna</span>
          </div>
        </div>
      </section>
      <section className="nature-note">
        <Bee />
        <p>
          För Magnus börjar det med bina.
          <br />
          <em>Honungen är bara en del av det fina.</em>
        </p>
        <span>En nyfikenhet på naturen som aldrig riktigt tar slut.</span>
      </section>
    </>
  );
}
