import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsContainer from "../components/products/ProductsContainer";
import axios from "axios";
import Loader from "../components/Loader";
import { StyledContainer } from "../styles";

async function getProductsBySubCategories(id, cb) {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/products/subcategory/${id}`
  );

  const data = await response.data;

  cb({ value: data, loading: false });
}

const ProductsSubByCategory = () => {
  const [products, setProducts] = useState({ value: [], loading: true });
  const { id } = useParams();

  useEffect(() => {
    setProducts({ value: [], loading: true });
    getProductsBySubCategories(id, setProducts);
  }, [id]);

  if (products.loading) return <Loader />;

  return (
    <StyledContainer>
      <ProductsContainer data={products} />
    </StyledContainer>
  );
};

export default ProductsSubByCategory;
