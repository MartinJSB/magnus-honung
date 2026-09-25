import { PRODUCTS } from "@magnus-honung/shared";
import { Arrow, Bee } from "./Brand";
export function Products() {
  return (
    <section id="honung" className="section honey-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FRÅN KUPAN TILL KÖKSBORDET</p>
          <h2>
            Lite sommar.
            <br />
            <em>Att ta med hem.</em>
          </h2>
        </div>
        <p>
          I en kopp te. På en varm smörgås. Eller en liten sked precis som den är. Välj en burk till
          dig själv eller någon du tycker om.
        </p>
      </div>
      <div className="products">
        {PRODUCTS.map((p, i) => (
          <article key={p.id} className="product">
            <div className={`product__visual product__visual--${i}`}>
              <span className="product__note">
                {i === 0 ? "Till vardagens goda stunder" : "En liten gåva från naturen"}
              </span>
              <div
                className={`jar jar--${p.sizeGrams}`}
                role="img"
                aria-label={`Illustration av honungsburk, ${p.sizeGrams} gram`}
              >
                <div className="jar__lid" />
                <div className="jar__label">
                  <Bee />
                  <span>magnus</span>
                  <small>SVENSK HONUNG</small>
                  <i>{p.sizeGrams} g · Med omtanke</i>
                </div>
              </div>
              <span className="product__weight">{p.sizeGrams} G</span>
            </div>
            <div className="product__details">
              <div>
                <h3>{i === 0 ? "Sommarhonung" : "En liten sommarhonung"}</h3>
                <p>
                  {i === 0
                    ? "Den stora burken för små, goda vardagsstunder."
                    : "Till någon du tycker om. Eller bara till dig."}
                </p>
              </div>
              <span className="product__price">
                {p.priceSek}
                <small> kr</small>
              </span>
            </div>
            <a className="product__link" href="#bestall">
              Beställ {p.sizeGrams} g <Arrow />
            </a>
          </article>
        ))}
      </div>
      <p className="honey-footnote">
        Småskalig honung följer säsongen. Magnus bekräftar tillgången när du beställer.
      </p>
    </section>
  );
}
