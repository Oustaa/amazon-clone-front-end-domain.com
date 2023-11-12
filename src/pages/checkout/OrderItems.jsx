import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts, getIds } from "../../features/cart-slice";
import { useEffect } from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import { StyledButton } from "../../styles";

const StyledFotter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-xxl);
`;

const StyledOrderItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const OrderItems = ({ setOrder, setStep }) => {
  const dispatch = useDispatch();
  const { products: cartProduct, savedLater } = useSelector(
    (state) => state.cart
  );
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    if (cartProduct.length === 0) {
      dispatch(getCartProducts());
    }
  }, [cartProduct.length, dispatch]);

  useEffect(() => {
    setOrderItems([
      ...cartProduct.map((elem) => {
        return { ...elem, selected: true };
      }),
      ...savedLater.map((elem) => {
        return { ...elem, selected: false };
      }),
    ]);
  }, [cartProduct, savedLater]);

  const setItemsHandler = () => {
    const items = orderItems
      .filter((item) => item.selected)
      .map((item) => {
        return {
          product: item._id,
          store: item.store_id,
          price: item.price,
          qte: JSON.parse(localStorage.getItem("cart_products"))[item._id].qte,
        };
      });

    const total = items.reduce(
      (total, item) => total + item.price * item.qte,
      0
    );

    if (items.length === 0) {
      return;
    }

    setStep((prev) => prev + 1);
    setOrder((prev) => {
      return { ...prev, items: items, total: total };
    });
  };

  return (
    <>
      <StyledOrderItemsContainer>
        {orderItems.map((product) => (
          <OrderItem
            product={product}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />
        ))}
      </StyledOrderItemsContainer>
      <StyledFotter>
        <StyledButton onClick={setItemsHandler}>Next</StyledButton>
      </StyledFotter>
    </>
  );
};

export default OrderItems;
