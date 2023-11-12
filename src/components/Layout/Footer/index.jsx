import { StyledContainer } from "../../../styles";
import styled from "styled-components";
import Currency from "./Currency";
import Categories from "./Categories";
import CopyWrites from "./CopyWrites";

const StyledFooter = styled.footer`
  background-color: var(--dark-700);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Currency />
        <Categories />
        <CopyWrites />
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
