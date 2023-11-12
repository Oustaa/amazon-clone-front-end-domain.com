import { StyledProducts } from "../../styles/styled-product";
import styled from "styled-components";
import SavedForLaterProduct from "./SavedForLaterProduct";

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xxl);
  margin-top: var(--spacing-xl);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SavedForLaterProducts = ({ products }) => {
  return (
    <StyledProducts>
      {products.length ? (
        <>
          <hr />
          <h2>
            {products.length} Item{products.length > 1 ? "s" : ""} Saved For
            Later
          </h2>
          <StyledProductsContainer>
            {products.map((product) => (
              <SavedForLaterProduct {...product} />
            ))}
          </StyledProductsContainer>
        </>
      ) : null}
    </StyledProducts>
  );
};

export default SavedForLaterProducts;
