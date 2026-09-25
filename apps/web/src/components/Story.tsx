const FACTS = [
  { value: "4", label: "bikupor på gården" },
  { value: "0 mil", label: "från kupa till burk" },
  { value: "100 %", label: "svensk sommarhonung" },
];

export function Story() {
  return (
    <section className="section story">
      <div className="story__text">
        <h2>Om biodlaren</h2>
        <p>
          Magnus har länge velat bli biodlare. Sommaren 2026 blev det äntligen av: fyra kolonier, en
          slunga i garaget och många lärorika timmar i skyddsdräkt. Honungen tappas för hand och
          säljs direkt – utan mellanhänder.
        </p>
      </div>
      <ul className="facts">
        {FACTS.map((f) => (
          <li key={f.label}>
            <strong>{f.value}</strong>
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
