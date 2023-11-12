import styled from "styled-components";

export const StyledCartProduct = styled.div`
  position: relative;
  display: flex;
  gap: var(--spacing-xl);
  border: 1px dashed var(--dark-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
`;

export const StyledCartProductImage = styled.div`
  width: 20%;
  aspect-ratio: 1 / 1;
  padding-inline: var(--spacing-xl);
  border-right: 1px dashed var(--dark-300);
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    aspect-ratio: 1 /1;
    object-fit: contain;
  }
`;

export const StyledCartProductData = styled.div`
  width: 80%;
`;

export const StyledCartProductHeader = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
`;

export const StyledCartProductActions = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: var(--spacing-xl);
  }

  & > button {
    border: none;
    background-color: transparent;
    color: var(--dark-800);
  }
`;

export const StyledCartProductQte = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-inline: 5px;
  }

  h5 {
  }

  button {
    background-color: var(--dark-200);
    border: none;
    border-radius: var(--radius-sm);
    color: var(--dark-700);
    padding: 5px 10px;
  }
`;
