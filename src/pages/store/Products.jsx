import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import ProductsContainer from "../../components/products/ProductsContainer";
import { StyledContainer } from "../../styles";

async function getStoresProducts(id, cb) {
  const resp = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/products/store/${id}`
  );

  const products = await resp.data;

  cb({ value: products, loading: false });
}

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({ value: [], loading: true });

  useEffect(() => {
    getStoresProducts(id, setProducts);
  }, [id]);

  if (products.loading) return <Loader />;

  return (
    <StyledContainer>
      <ProductsContainer data={products} />
    </StyledContainer>
  );
};

export default Products;
