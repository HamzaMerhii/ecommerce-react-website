import { Link } from "react-router-dom";

function ProductCard({ product: {id, image, name, price } }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-title">{name}</h3>
        <p className="product-card-price">${price}</p>
        <div className="product-card-actions">
          <Link
            to="/"
            className="btn btn-secondary"
            to={`/products/${id}`}
          >
            View Details
          </Link>
          <Link className="btn btn-primary">Add To Card</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
