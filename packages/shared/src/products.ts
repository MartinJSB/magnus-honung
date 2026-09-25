export type Product = {
  id: string;
  name: string;
  sizeGrams: number;
  /** Consumer price in SEK, VAT included. */
  priceSek: number;
  description: string;
};

export const PRODUCTS = [
  {
    id: "sommarhonung-500",
    name: "Sommarhonung",
    sizeGrams: 500,
    priceSek: 170,
    description: "Årets skörd från gården i Nykvarn. Slungad och tappad på burk för hand.",
  },
] as const satisfies readonly Product[];

export type ProductId = (typeof PRODUCTS)[number]["id"];

export const PRODUCT_IDS = PRODUCTS.map((p) => p.id) as [ProductId, ...ProductId[]];

export function findProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

/** Price per 500 g jar when a school class buys to resell. */
export const CLASS_PRICE_SEK = 80;
export const CLASS_MIN_JARS = 20;
