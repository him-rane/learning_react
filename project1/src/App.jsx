import Header from "./components/Header";
import ProductGrid from "./components/ProductsGrid";

export default function App() {
  return (
    <div>
      <Header></Header>
      <ProductGrid></ProductGrid>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
