import { addToCart, deleteProduct, saveLater } from "../../features/cart-slice";
import getSymbolFromCurrency from "currency-symbol-map";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";

const StyledProduct = styled.div`
  max-width: 100%;
  position: relative;
`;

const StyledProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1/0.6;
  // background-color: var(--dark-400);
  border-radius: var(--radius-sm);

  img {
    width: 100%;
    aspect-ratio: 1/0.6;
    object-fit: contain;
  }
`;

const StyledProductBody = styled.div`
  h2 {
    font-size: 1.2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: var(--dark-200);
      border: none;
      border-radius: var(--radius-sm);
      color: var(--dark-700);
      padding: 5px 10px;
    }
  }
`;

const loaderExtraStyles = `
  position: absolute;
  top: 0;
  left: 0;
  border-radius: var(--radius-lg);
  width: 100%;
  height: 100%;
  background: #d9d9d952;
`;

const SavedForLaterProduct = ({
  _id,
  store,
  images,
  title,
  price,
  currency,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
          savedLater: false,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
    } catch (error) {
    } finally {
      setLoading(false);
      dispatch(addToCart(_id));
    }
  };

  return (
    <StyledProduct key={_id}>
      {loading ? <Loader loaderExtraStyles={loaderExtraStyles} /> : null}
      <StyledProductImage>
        <img
          crossOrigin="anonymous"
          src={`${import.meta.env.VITE_BASE_URL}/images/${store}/products/${
            images[0]
          }`}
          alt=""
        />
      </StyledProductImage>
      <StyledProductBody>
        <h2>{title}</h2>
        <h2>
          {getSymbolFromCurrency(currency)}
          {price}
        </h2>
        <div>
          <button onClick={saveForLater}>Move to cart</button>
          <button onClick={deleteProducthandler}>Delete</button>
        </div>
      </StyledProductBody>
    </StyledProduct>
  );
};

export default SavedForLaterProduct;
