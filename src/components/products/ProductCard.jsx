import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  StyledProduct,
  StyledProductImage,
  StyledProductBody,
} from "../../styles/styled-product";
import getSymbolFromCurrency from "currency-symbol-map";
import axios from "axios";
import { useSelector } from "react-redux";
import { getPrice } from "../../utils/changePrice";

function isElementVisible(element) {
  if (!element) return;
  const rect = element?.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewportHeight;
}

async function viewedProduct(id) {
  axios.put(`${import.meta.env.VITE_BASE_URL}/products/viewed/${id}`);
}

const ProductCard = ({
  _id,
  title,
  price,
  images,
  currency,
  store,
  titleLong,
}) => {
  const userCurrency = useSelector((state) => state.auth.currency);
  const productRef = useRef();
  const [visible, setVisible] = useState(false);
  const [convertedPrice, setConvertedPrice] = useState(0.0);

  useEffect(() => {
    getPrice(
      {
        from: currency,
        to: userCurrency || localStorage.getItem("currency") || currency,
        value: price,
      },
      setConvertedPrice
    );

    if (isElementVisible(productRef.current)) {
      setVisible(true);
    }
  }, [userCurrency, currency, price]);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementVisible(productRef.current)) {
        setVisible(true);
      }
    };

    if (visible) {
      window.removeEventListener("scroll", handleScroll);
      viewedProduct(_id);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [_id, visible]);

  return (
    <Link ref={productRef} to={`/product/${_id}`}>
      <StyledProduct title={title}>
        <StyledProductImage>
          {images && (
            <img
              crossOrigin="anonymous"
              src={`${import.meta.env.VITE_BASE_URL}/images/${store}/products/${
                images[0]
              }`}
              alt={title}
            />
          )}
        </StyledProductImage>
        <StyledProductBody>
          <h2 title={title}>{title?.substring(0, titleLong || 150)}...</h2>
          <div>
            <h3>
              {getSymbolFromCurrency(
                userCurrency || localStorage.getItem("currency") || currency
              )}
              {convertedPrice?.toFixed(2)}
            </h3>
            <h3>New</h3>
          </div>
        </StyledProductBody>
      </StyledProduct>
    </Link>
  );
};

export default ProductCard;
