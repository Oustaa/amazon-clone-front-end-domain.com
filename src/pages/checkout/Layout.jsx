import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLogo } from "../../styles/styled-header";
import { StyledContainer } from "../../styles";

const StyledHeader = styled.header`
  background: var(--dark-700);

  h1,
  h2 {
    font-size: 1rem;
    color: white;
  }
`;

const extraStyles = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: var(--spacing-lg);
`;

const Layout = ({ title }) => {
  return (
    <StyledHeader>
      <StyledContainer extraStyles={extraStyles}>
        <Link to={"/"}>
          <StyledLogo>
            <div className="img"></div>
            <span>Logo</span>
          </StyledLogo>
        </Link>
        <h2>{title}</h2>
        <h1>CheckOut</h1>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Layout;
