import { PRODUCTS } from "@magnus-honung/shared";

export function Products() {
  return (
    <section id="honung" className="section">
      <h2>Honungen</h2>
      <div className="products">
        {PRODUCTS.map((p) => (
          <article key={p.id} className="product">
            <div className={`jar jar--${p.sizeGrams}`} aria-hidden />
            <h3>{p.name}</h3>
            <p className="product__size">{p.sizeGrams} g</p>
            <p>{p.description}</p>
            <p className="product__price">{p.priceSek} kr</p>
          </article>
        ))}
      </div>
    </section>
  );
}
