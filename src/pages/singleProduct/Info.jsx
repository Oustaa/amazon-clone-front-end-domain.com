import React, { useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "../../styles";
import { BsStarFill } from "react-icons/bs";
import getSymbolFromCurrency from "currency-symbol-map";
import { Link } from "react-router-dom";

const StyledInfoContainer = styled.div`
  width: 45%;
  color: var(--dark-800);

  h2.price {
    margin-bottom: var(--spacing-xl);
  }

  .fake-link {
    color: #5f9fff;
    text-decoration: underline;
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--warning);
    span {
      color: var(--dark-800);
    }
  }
`;

const StyledSpecifications = styled.div`
  h3 {
    color: var(--dark-800);
  }

  ul {
    padding: 0;
  }

  ul li {
    display: flex;
    align-items: flex-start;
    padding: 0;
    margin-bottom: var(--spacing-sm);

    h4 {
      margin: 0;
      color: var(--dark-500);
      font-weight: 500;
      &.title {
        margin-right: var(--spacing-lg);
        width: 40%;
        color: var(--dark-700);
        font-weight: 700;
      }
    }
  }
`;

const Info = ({ product }) => {
  return (
    <StyledInfoContainer>
      <h2>{product.title}</h2>
      <hr />
      <Link to={`/store/${product.store_id}/products`}>
        Item By {product.store}
      </Link>
      <FlexContainer gap={"var(--spacing-xl)"}>
        <div className="stars">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <span>5 ({product.reviews.length})</span>
        </div>
        {/* updated to number of questions */}
        <a href="#questions">{product.QandA.length} answered questions</a>
      </FlexContainer>
      <hr />
      <h2 className="price">
        {getSymbolFromCurrency(product.currency) + product.price.toFixed(2)}
      </h2>

      {product.specifications && product?.specifications?.length > 0 && (
        <StyledSpecifications>
          <ul>
            {product.specifications.map((specification, i) => (
              <li key={i}>
                <h4 className="title">{specification.name}</h4>
                <h4>{specification.value}</h4>
              </li>
            ))}
          </ul>
        </StyledSpecifications>
      )}
      {product?.about?.length ? (
        <>
          <hr />
          <h3>About This Item</h3>
          <ul>
            {product?.about?.map((about) => (
              <li key={about}>{about}</li>
            ))}
          </ul>
        </>
      ) : null}

      {product.description && (
        <>
          <hr />
          <p>{JSON.parse(product.description.replaceAll("\n", "<br />"))}</p>
        </>
      )}
    </StyledInfoContainer>
  );
};

export default Info;
