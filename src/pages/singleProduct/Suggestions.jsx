import React, { useState, useEffect } from "react";
import ProductsContainer from "../../components/products/ProductsContainer";
import axios from "axios";

async function getSuggestions(cb, body) {
  const resp = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/products/suggestions/categories`,
    body
  );
  const data = await resp.data;
  console.log(data);
  cb(data);
}

function Suggestions({ product }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSuggestions(setProducts, {
      categories_id: product.categories_id,
      subcategories_id: product.subcategories_id,
      prodId: product._id,
    });
  }, []);

  return (
    <ProductsContainer title={"Suggested for you"} data={{ value: products }} />
  );
}

export default Suggestions;
