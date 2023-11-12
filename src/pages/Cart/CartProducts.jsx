import React, { useState } from "react";
import styled from "styled-components";
import CartProduct from "./CartProduct";
import { useEffect } from "react";
import { getPrice } from "../../utils/changePrice";

const StyledCartContainer = styled.div`
  padding: var(--spacing-xl);
  width: 60%;
  background-color: var(--dark-000);
  border-radius: var(--radius-lg);
  box-shadow: var(--boxShadow);

  hr {
    margin-block: var(--spacing-lg) var(--spacing-xl);
  }
`;

const StyledCartPrductsContainer = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  flex-direction: column;
`;
const StyledCartSubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CartEmpty = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: var(--dark-200);
  }
`;

const CartProducts = ({ products, ids }) => {
  const [totle, setTotal] = useState(0);

  useEffect(() => {
    const totle = products.reduce(
      (current, product) => current + product.price * ids[product._id].qte,
      0
    );

    setTotal(totle);
  }, [products, ids]);

  return (
    <StyledCartContainer>
      <h2>Shopping Cart</h2>
      <hr />
      <StyledCartPrductsContainer>
        {products.length ? (
          products.map((product) => (
            <CartProduct key={product._id} {...product} />
          ))
        ) : (
          <CartEmpty>
            <h3>Your cart is empty</h3>
          </CartEmpty>
        )}
      </StyledCartPrductsContainer>
      <hr />
      <StyledCartSubTotal>
        <h2>
          Subtotal (
          {Object.values(ids).reduce(
            (sum, item) => (item.saveLater ? sum : sum + item.qte),
            0
          )}
          items): ${totle.toFixed(2)}
        </h2>
      </StyledCartSubTotal>
    </StyledCartContainer>
  );
};

export default CartProducts;
