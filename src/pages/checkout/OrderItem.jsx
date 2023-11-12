import styled from "styled-components";
import {
  StyledCartProduct,
  StyledCartProductImage,
  StyledCartProductData,
  StyledCartProductHeader,
  StyledCartProductActions,
  StyledCartProductQte,
} from "../../styles/styled-cart";
import getSymbolFromCurrency from "currency-symbol-map";

const StyledOrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
`;
const OrderItem = ({ product, orderItems, setOrderItems }) => {
  const toggleSelectItem = (id) => {
    const updatedItems = orderItems.map((elem) => {
      if (elem._id === id) {
        return { ...elem, selected: !elem.selected };
      }
      return elem;
    });
    setOrderItems(updatedItems);
  };

  return (
    <StyledOrderItem key={product._id}>
      <input
        type="checkbox"
        checked={product.selected}
        onChange={() => {
          toggleSelectItem(product._id);
        }}
      />
      <StyledCartProduct>
        <StyledCartProductImage>
          <img
            crossOrigin="anonymous"
            src={`${import.meta.env.VITE_BASE_URL}/images/${
              product.store
            }/products/${product.images[0]}`}
            alt={product.title}
            title={product.title}
          />
        </StyledCartProductImage>
        <StyledCartProductData>
          <StyledCartProductHeader>
            <h3>{product.title.substring(0, 80)}...</h3>
            <h2>
              {getSymbolFromCurrency(product.currency)}
              {product.price}
            </h2>
          </StyledCartProductHeader>
          <StyledCartProductActions>
            <StyledCartProductQte>
              <h4>Qte:</h4>
              <h4>
                {
                  JSON.parse(localStorage.getItem("cart_products"))[product._id]
                    .qte
                }
              </h4>
            </StyledCartProductQte>
          </StyledCartProductActions>
        </StyledCartProductData>
      </StyledCartProduct>
    </StyledOrderItem>
  );
};

export default OrderItem;
