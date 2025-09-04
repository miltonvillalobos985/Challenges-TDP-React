import { useEffect, useState } from "react";
import Product from "../Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <Product product={item} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
