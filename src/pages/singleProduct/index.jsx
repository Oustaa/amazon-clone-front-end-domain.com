import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Images from "./Images";
import Info from "./Info";
import Actions from "./Actions";
import axios from "axios";
import { StyledContainer } from "../../styles";
import Questions from "./Questions";
import Suggestions from "./Suggestions";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { getIds } from "../../features/cart-slice";
import { useDispatch, useSelector } from "react-redux";

async function getPrice({ from, to, value }) {
  const options = {
    method: "GET",
    url: "https://currency-converter-pro1.p.rapidapi.com/convert",
    params: {
      from: from,
      to: to,
      amount: value,
    },
    headers: {
      "X-RapidAPI-Key": "f8cdae9dd3msh8dcbc3f61ded3cep1d39d9jsn33b92ef93b96",
      "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getProduct(id, cb, userCurrency) {
  cb({ value: {}, loading: true });
  const resp = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/products/${id}`
  );

  const data = await resp.data;

  const toCurrency = userCurrency || localStorage.getItem("currency");

  if (data.currency !== toCurrency) {
    const priceConvert = await getPrice({
      from: data.currency,
      to: toCurrency,
      value: data.price,
    });
    console.log(priceConvert);
    data.price = priceConvert.result;
    data.currency = toCurrency;
  }

  cb({ value: data, loading: false });
}

const StyledDisplayProduct = styled.div`
  display: flex;
  gap: var(--spacing-xxl);
  position: relative;
  width: ${({ width }) => width || "100%"};
  height: calc(100% - 80px);
  padding-right: 5px;
  margin-block: var(--spacing-xxl);
`;

const DisplayProduct = ({ width }) => {
  const userCurrency = useSelector((state) => state.auth.currency);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState({
    value: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    dispatch(getIds());
  }, [dispatch]);

  useEffect(() => {
    getProduct(id, setProduct, userCurrency);

    const visitsArray = JSON.parse(localStorage.getItem("visits")) || [];
    localStorage.setItem(
      "visits",
      JSON.stringify(new Array(...new Set([id, ...visitsArray])))
    );
  }, [id, userCurrency]);

  if (product.loading) return <Loader />;

  return (
    <StyledContainer>
      {!product.loading ? (
        <>
          <StyledDisplayProduct width={width}>
            <Images product={product.value} />
            <Info product={product.value} />
            <Actions product={product.value} />
          </StyledDisplayProduct>
          <hr />
          <Questions product={product.value} />
          <hr />
          <Suggestions product={product.value} />
        </>
      ) : (
        "loading"
      )}
    </StyledContainer>
  );
};

export default DisplayProduct;
