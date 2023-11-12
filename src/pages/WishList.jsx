import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ProductsContainer from "../components/products/ProductsContainer";
import { StyledContainer } from "../styles";
import styled from "styled-components";

const StyledEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);

  padding-block: 150px;
`;

const request = {
  url: `${import.meta.env.VITE_BASE_URL}/products/ids`,

  config: {
    data: {
      ids: JSON.parse(localStorage.getItem("wishlist")),
    },
    method: "POST",
  },
};

const Orders = () => {
  const { data: wishlist, loading, error } = useFetch(request);

  if (loading) return <Loader />;

  if (error || !wishlist.length)
    return (
      <StyledEmptyContainer>
        <h2>Empty</h2>
        <p>Your wish list is empty</p>
      </StyledEmptyContainer>
    );

  return (
    <>
      <StyledContainer>
        <ProductsContainer data={{ value: wishlist }} />
      </StyledContainer>
    </>
  );
};

export default Orders;
