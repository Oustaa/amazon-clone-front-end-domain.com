import styled from "styled-components";

export const StyledStore = styled.header`
  width: 100%;
`;

export const StyledStoreHeader = styled.header`
  width: 100%;
`;

export const StyledBgimage = styled.div`
  background-color: var(--dark-100);
  width: 100%;
  aspect-ratio: 1 / 0.2;
  position: relative;

  input {
    position: absolute;
    inset: 0 0 0 0;
    opacity: 0;
    &:hover,
    &:focus {
      cursor: pointer;
    }
    z-index: 10;
  }

  button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xl);
  }

  img {
    width: 100%;
    max-height: 100%;
    aspect-ratio: 1 / 0.2;
    object-fit: cover;
  }
`;

export const StyledHeader = styled.header`
  background-color: var(--dark-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  padding-left: var(--spacing-xxl);
  h3 {
    font-weight: 300;
  }
`;

export const StyledAvatar = styled.div`
  position: relative;
  width: 50px;
  aspect-ratio: 1 / 1;
  background-color: var(--white);
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: fill;
  }

  input {
    position: absolute;
    inset: 0 0 0 0;
    opacity: 0;
    z-index: 10;

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }

  button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xl);
  }
`;
