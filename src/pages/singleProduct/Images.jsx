import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledImagesContainer = styled.div`
  width: 35%;
  position: sticky;
  top: 0;
`;

const StyledBigImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 0.8;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  img {
    object-fit: contain;
    width: 100%;
    aspect-ratio: 1 / 0.8;
  }
`;

const StyledImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-sm);
  border-radius: var(--radius-lg);

  div {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm);

    img {
      object-fit: contain;
      width: 100%;
      aspect-ratio: 1 / 0.8;
    }

    &:hover {
      cursor: pointer;
    }

    &.selected {
      border-bottom: 1px solid var(--dark-700);
    }

    button {
      background-color: transparent;
      color: var(--dark-800);
      border: none;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Images = ({ product }) => {
  const [displayedImage, setDisplayedImage] = useState(0);

  return (
    <StyledImagesContainer>
      <>
        <StyledBigImage>
          <img
            crossOrigin="anynomos"
            src={`${import.meta.env.VITE_BASE_URL}/images/${
              product.store
            }/products/${product.images[displayedImage]}`}
            alt=""
          />
        </StyledBigImage>
        <StyledImages>
          {product.images.map((img, i) => (
            <div
              className={i === displayedImage ? "selected" : ""}
              key={i}
              onClick={() => setDisplayedImage(i)}
            >
              <img
                crossOrigin="anynomos"
                src={`${import.meta.env.VITE_BASE_URL}/images/${
                  product.store
                }/products/${img}`}
                alt=""
              />
            </div>
          ))}
        </StyledImages>
      </>
    </StyledImagesContainer>
  );
};

export default Images;
