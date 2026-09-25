import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Products } from "./components/Products";
import { ClassFundraising } from "./components/ClassFundraising";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <ClassFundraising />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
