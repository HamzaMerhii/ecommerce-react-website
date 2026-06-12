import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome To ShopHub</h1>
        <p className="home-subtitle">
          Discover Amazing products at great prices
        </p>
      </div>
      <div className="container">
        <h3 className="page-title">Our Products</h3>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
