import React, { useEffect, useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  toggleQuantity,
  saveLater,
} from "../../features/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Loader from "../../components/Loader";
import {
  StyledCartProduct,
  StyledCartProductImage,
  StyledCartProductData,
  StyledCartProductHeader,
  StyledCartProductActions,
  StyledCartProductQte,
} from "../../styles/styled-cart";
import { getPrice } from "../../utils/changePrice";

const loaderExtraStyles = `
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--radius-lg);
  width: 100%;
  height: 100%;
  background: #d9d9d952;
`;

const CartProduct = ({ images, store, title, price, currency, _id }) => {
  const { currency: userCurrency } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [updateQte, setUpdateQte] = useState(false);
  const dispatch = useDispatch();
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
  }, [userCurrency, currency, price]);
  const { qte, saveLater: savedLater } = useSelector((state) => state.cart.ids)[
    _id
  ];

  const toggleProductQte = async (num) => {
    setLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/cart`,
        {
          product: _id,
          qte: num,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
    } catch (error) {
    } finally {
      setLoading(false);
      dispatch(toggleQuantity({ id: _id, number: num }));
    }
  };

  const deleteProducthandler = async () => {
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/cart/${_id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
    } catch (error) {
    } finally {
      setLoading(false);
      dispatch(deleteProduct(_id));
    }
  };

  const saveForLater = async () => {
    // /cart/savedForLater
    setLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/cart/savedForLater`,
        {
          product: _id,
          savedLater: !savedLater,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
    } catch (error) {
    } finally {
      setLoading(false);
      dispatch(saveLater(_id));
    }
  };

  return (
    <>
      <StyledCartProduct>
        {loading && <Loader loaderExtraStyles={loaderExtraStyles} />}
        <StyledCartProductImage>
          <img
            crossOrigin="anonymous"
            src={`${import.meta.env.VITE_BASE_URL}/images/${store}/products/${
              images[0]
            }`}
            alt={title}
            title={title}
          />
        </StyledCartProductImage>
        <StyledCartProductData>
          <StyledCartProductHeader>
            <h3>
              <Link to={`/product/${_id}`}>{title.substring(0, 80)}...</Link>
            </h3>
            <h2>
              {getSymbolFromCurrency(userCurrency)}
              {convertedPrice.toFixed(2)}
            </h2>
          </StyledCartProductHeader>
          <StyledCartProductActions>
            {!updateQte ? (
              <StyledCartProductQte>
                <h4>Qte:</h4>
                <button onClick={() => toggleProductQte(1)}>+</button>
                <h4 onDoubleClick={() => setUpdateQte(true)}>{qte}</h4>

                <button onClick={() => toggleProductQte(-1)}>-</button>
              </StyledCartProductQte>
            ) : (
              "updateQte"
            )}

            <button onClick={deleteProducthandler}>Delete</button>
            <button onClick={saveForLater}>Save For Later</button>
          </StyledCartProductActions>
        </StyledCartProductData>
      </StyledCartProduct>
    </>
  );
};

export default CartProduct;
