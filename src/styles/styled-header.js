import styled from "styled-components";

export const StyledNavBar = styled.div`
  background-color: var(--dark-700);
`;

export const StyledHeader = styled.header`
  display: flex;
  aling-item: center;
  justify-content: space-between;
  padding-block: var(--spacing-lg);
  padding-inline: var(--spacing-xxl);
  border-bottom: 1px solid var(--dark-600);
`;

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: var(--dark-600);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  input {
    width: 500px;
    border: none;
    padding: var(--spacing-sm);
    background-color: var(--dark-600);
    color: var(--white);

    &::-webkit-input-placeholder {
      color: var(--white);
    }
    &::-ms-input-placeholder {
      color: var(--white);
    }
    &:-ms-input-placeholder {
      color: var(--white);
    }

    &:hover,
    &:focus {
      border: none;
      outline: none;
    }
  }
  button {
    background-color: var(--primary);
    border: none;
    padding: var(--spacing-sm) 10px;
    color: var(--white);
    border-radius: var(--radius-sm);
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  color: var(--white);

  .img {
    width: 40px;
    aspect-ratio: 1 / 1;
    background-color: var(--white);
  }
`;

export const StyledActions = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;

  button,
  a {
    color: var(--white);
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);

    svg {
      font-size: 1.7rem;
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: ${({ openMenu }) => (openMenu ? "flex-start" : "center")};
  justify-content: space-between;
  padding-inline: var(--spacing-xxl);

  color: var(--white) !important;
`;

export const StyledLinks = styled.div`
  display: flex;
  aling-item: center;
 
  gap: var(--spacing-xl);
  padding-block: var(--spacing-lg);

  &:first-of-type {
    gap: var(--spacing-xxl);
  }

  a,
  button {
    color: var(--white);
    background-color: transparent;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }
  .category {
    ${({ openMenu }) =>
      openMenu &&
      `font-weight: bold;
      font-size: 1.1rem;`}}
  }
`;
