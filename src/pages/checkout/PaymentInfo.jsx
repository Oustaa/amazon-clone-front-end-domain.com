import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { InputGroup, StyledButton } from "../../styles";
import getSymbolFromCurrency from "currency-symbol-map";
import Loader from "../../components/Loader";
import axios from "axios";
import { deleteProduct } from "../../features/cart-slice";
import { useDispatch } from "react-redux";

const StyledPayment = styled.div``;
const StyledPaymentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaymentInfo = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const deleteProducthandler = async (_id) => {
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/cart/${_id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
    } catch (error) {
    } finally {
      dispatch(deleteProduct(_id));
    }
  };

  const passOrder = async () => {
    try {
      // shouled be replaced with a payment functionality
      if (Number(total) !== order.total) {
        alert("The entred amount is not equal to the order total amount");
        return;
      }
      setLoading(true);
      // send the order
      const orderResponse = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/orders`,
        order,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const orderData = await orderResponse.data;
      await orderData.items.forEach(async ({ product }) => {
        deleteProducthandler(product);
      });

      navigate("/orders/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <StyledPayment>
      <StyledPaymentInfo>
        <h3>Your total payment is:</h3>
        <h2>
          {getSymbolFromCurrency(order.currency)}
          {order.total}
        </h2>
      </StyledPaymentInfo>
      <InputGroup>
        <label htmlFor="price">Payment</label>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </InputGroup>
      <StyledButton onClick={passOrder}>Pay</StyledButton>
    </StyledPayment>
  );
};

export default PaymentInfo;
