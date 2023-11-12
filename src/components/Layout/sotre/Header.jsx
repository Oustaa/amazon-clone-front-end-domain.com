import {
  StyledNavBar,
  StyledHeader,
  StyledLogo,
  StyledActions,
  StyledNav,
  StyledLinks,
} from "../../../styles/styled-header";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <StyledNavBar>
      <StyledHeader>
        <StyledLogo>
          <div className="img"></div>
          <span>store Logo</span>
        </StyledLogo>
        <StyledActions>
          <Link>log in</Link>
          <Link to={"/store.com/create/"}>create store</Link>
        </StyledActions>
      </StyledHeader>
      {/* <StyledNav>
        <StyledLinks>
          <Link to="/">Home</Link>
          <Link to="/">DashBoard</Link>
          <Link to="/">Orders</Link>
        </StyledLinks>
      </StyledNav> */}
    </StyledNavBar>
  );
};

export default Header;
