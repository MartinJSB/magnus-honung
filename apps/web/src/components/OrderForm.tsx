import { useState, type FormEvent } from "react";
import {
  CLASS_MIN_JARS,
  PRODUCTS,
  orderTotalSek,
  type OrderRequest,
  type ProductId,
} from "@magnus-honung/shared";
import { submitOrder } from "../api/client";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "done"; orderId: string }
  | { kind: "error"; message: string };

const initialQuantities = Object.fromEntries(PRODUCTS.map((p) => [p.id, 0])) as Record<
  ProductId,
  number
>;

export function OrderForm() {
  const [customerType, setCustomerType] = useState<OrderRequest["customerType"]>("private");
  const [quantities, setQuantities] = useState(initialQuantities);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[] | undefined>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const items = PRODUCTS.filter((p) => quantities[p.id] > 0).map((p) => ({
    productId: p.id,
    quantity: quantities[p.id],
  }));
  const total = orderTotalSek(items);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = (key: string) => (form.get(key) as string | null)?.trim() || undefined;

    const order: OrderRequest = {
      customerType,
      name: text("name") ?? "",
      email: text("email") ?? "",
      phone: text("phone"),
      className: text("className"),
      items,
      delivery: form.get("delivery") === "local-delivery" ? "local-delivery" : "pickup",
      message: text("message"),
      website: text("website"),
    };

    setStatus({ kind: "sending" });
    try {
      const result = await submitOrder(order);
      if (result.ok) {
        setStatus({ kind: "done", orderId: result.orderId });
      } else {
        setFieldErrors(result.fieldErrors);
        setStatus({ kind: "idle" });
      }
    } catch {
      setStatus({ kind: "error", message: "Något gick fel. Försök igen eller mejla oss direkt." });
    }
  }

  if (status.kind === "done") {
    return (
      <section id="bestall" className="section order order--done">
        <h2>Tack! 🐝</h2>
        <p className="lead">
          Din beställning <strong>{status.orderId}</strong> är skickad. Du får en bekräftelse på
          mejl, och Magnus hör av sig om betalning (Swish) och upphämtning.
        </p>
      </section>
    );
  }

  const error = (key: string) =>
    fieldErrors[key]?.[0] && <span className="field__error">{fieldErrors[key]?.[0]}</span>;

  return (
    <section id="bestall" className="section order">
      <h2>Beställ</h2>
      <p>Ingen betalning nu – du betalar med Swish när Magnus bekräftat beställningen.</p>

      <form onSubmit={onSubmit} noValidate>
        <fieldset className="toggle">
          <legend className="sr-only">Jag beställer som</legend>
          {(
            [
              ["private", "Privatperson"],
              ["school-class", "Klass / förening"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className={customerType === value ? "is-active" : ""}>
              <input
                type="radio"
                name="customerType"
                value={value}
                checked={customerType === value}
                onChange={() => setCustomerType(value)}
              />
              {label}
            </label>
          ))}
        </fieldset>

        <div className="quantities">
          {PRODUCTS.map((p) => (
            <label key={p.id} className="quantity">
              <span>
                {p.name} {p.sizeGrams} g <small>{p.priceSek} kr</small>
              </span>
              <input
                type="number"
                min={0}
                max={100}
                value={quantities[p.id]}
                onChange={(e) =>
                  setQuantities({ ...quantities, [p.id]: Math.max(0, Number(e.target.value)) })
                }
              />
            </label>
          ))}
          {error("items")}
          {customerType === "school-class" && (
            <p className="hint">
              Klasspris gäller från {CLASS_MIN_JARS} burkar – Magnus justerar summan.
            </p>
          )}
          <p className="total">
            Summa: <strong>{total} kr</strong>
          </p>
        </div>

        <div className="grid">
          <label className="field">
            Namn
            <input name="name" autoComplete="name" required />
            {error("name")}
          </label>
          <label className="field">
            E-post
            <input name="email" type="email" autoComplete="email" required />
            {error("email")}
          </label>
          <label className="field">
            Telefon (valfritt)
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          {customerType === "school-class" && (
            <label className="field">
              Skola och klass
              <input name="className" placeholder="t.ex. Solskolan 8B" />
              {error("className")}
            </label>
          )}
          <label className="field">
            Leverans
            <select name="delivery" defaultValue="pickup">
              <option value="pickup">Hämtar på gården</option>
              <option value="local-delivery">Leverans i närområdet</option>
            </select>
          </label>
        </div>

        <label className="field">
          Meddelande (valfritt)
          <textarea name="message" rows={3} />
        </label>

        {/* Honeypot for bots: hidden from people and screen readers. */}
        <input name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden />

        {status.kind === "error" && <p className="field__error">{status.message}</p>}
        <button className="button" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Skickar…" : "Skicka beställning"}
        </button>
      </form>
    </section>
  );
}
