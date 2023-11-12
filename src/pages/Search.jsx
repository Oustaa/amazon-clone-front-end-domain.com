import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { StyledContainer } from "../styles";
import Loader from "../components/Loader";
import ProductsContainer from "../components/products/ProductsContainer";

async function getProducts(query, cb) {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/products/search?q=${query}`
  );

  const data = await response.data;
  console.log(data);
  cb({ value: data, loading: false });
}

const Search = () => {
  const [products, setProducts] = useState({ value: [], loading: true });
  const { query } = useParams();

  useEffect(() => {
    setProducts({ value: [], loading: true });
    getProducts(query, setProducts);
  }, [query]);

  if (products.loading) return <Loader />;

  return (
    <StyledContainer>
      <ProductsContainer
        title={`Search result for: ${query.replaceAll("%20", " ")}`}
        data={products}
      />
    </StyledContainer>
  );
};

export default Search;
