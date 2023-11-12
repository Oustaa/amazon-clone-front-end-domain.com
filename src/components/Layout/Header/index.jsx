import {
  StyledNavBar,
  StyledHeader,
  StyledLogo,
  StyledActions,
  StyledNav,
  StyledLinks,
} from "../../../styles/styled-header";
import { StyledButton } from "../../../styles";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleMenu } from "../../../features/ui-slice";
import Search from "../Search";
import UserDropDown from "./UserDropDown";

const StyledSubCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
`;

const Header = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.value);
  const openMenu = useSelector((state) => state.ui.openMenu);

  return (
    <StyledNavBar>
      <StyledHeader>
        <Link to="/">
          <StyledLogo>
            <div className="img"></div>
            <span>Logo</span>
          </StyledLogo>
        </Link>
        <Search />
        <StyledActions>
          <Link to={"/cart"}>
            Your Cart <BsCart />
          </Link>
          <UserDropDown />
        </StyledActions>
      </StyledHeader>
      <StyledNav openMenu={openMenu}>
        <StyledLinks openMenu={openMenu}>
          <StyledButton
            color="var(--white)"
            onClick={() => dispatch(toggleMenu())}
          >
            {!openMenu ? <RxHamburgerMenu /> : <AiOutlineClose />}
          </StyledButton>
          {categories?.map((category) => (
            <Link key={category._id} to={`/products/${category._id}`}>
              <span className="category">{category.name}</span>
              {openMenu && (
                <StyledSubCategories>
                  {category.subCategories?.map((subCategory) => (
                    <Link
                      key={subCategory.name}
                      to={`/products/sub/${subCategory.name}`}
                    >
                      {subCategory.name}
                    </Link>
                  ))}
                </StyledSubCategories>
              )}
            </Link>
          ))}
        </StyledLinks>
        <StyledLinks>
          <Link target="_blank" to="http://localhost:3001/login">
            Create Store
          </Link>
          <Link target="_blank" to="http://localhost:3001/">
            Your Store
          </Link>
        </StyledLinks>
      </StyledNav>
    </StyledNavBar>
  );
};

export default Header;
