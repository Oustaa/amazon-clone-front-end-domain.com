import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProsuctsByCategory = styled.div`
  border: 1px dashed var(--dark-700);
  border-radius: var(--radius-lg);
  overflow: hidden;
`;

const StyledProsuctsByCategoryFooter = styled.div`
  background-color: var(--dark-700);
  padding: var(--spacing-sm);
  h4 {
    color: var(--white);
  }
`;

const StyledProsuctsByCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
`;

const StyledProsuctsByCategoryImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;

  img {
    width: 100%;
    aspect-ratio: 1 /1;
    object-fit: contain;
  }
`;

const ProductsCategory = ({ data }) => {
  return (
    <StyledProsuctsByCategory>
      <StyledProsuctsByCategoryContainer>
        {data.products.slice(0, 4).map((product) => (
          <StyledProsuctsByCategoryImage
            title={product.title}
            key={product._id}
          >
            <Link to={`/product/${product._id}`}>
              <img
                crossOrigin="anonymous"
                src={`${import.meta.env.VITE_BASE_URL}/images/${
                  product.store
                }/products/${product.images[0]}`}
                alt=""
              />
            </Link>
          </StyledProsuctsByCategoryImage>
        ))}
      </StyledProsuctsByCategoryContainer>
      <StyledProsuctsByCategoryFooter>
        <Link to={`/products/sub/${data._id}`}>
          <h4>{data._id}</h4>
        </Link>
      </StyledProsuctsByCategoryFooter>
    </StyledProsuctsByCategory>
  );
};

export default ProductsCategory;
