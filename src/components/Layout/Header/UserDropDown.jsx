import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import { StyledButton } from "../../../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDropDownContainer = styled.div`
  position: relative;
  background-color: ${({ isDropdownOpen }) =>
    isDropdownOpen && "var(--dark-600)"};
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
`;

const StyledDropDown = styled.div`
  position: absolute;
  background-color: var(--dark-600);
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);

  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    padding: var(--spacing-sm) var(--spacing-xl);
  }
`;

const UserDropDown = () => {
  const username = useSelector((state) => state.auth.username);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return username ? (
    <>
      <StyledDropDownContainer isDropdownOpen={isDropdownOpen}>
        <StyledButton onClick={handleToggleDropdown}>
          {username} <BsPerson />
        </StyledButton>
        {isDropdownOpen && (
          <StyledDropDown>
            <Link onClick={handleToggleDropdown} to="/wishlist">
              WishList
            </Link>
            <Link onClick={handleToggleDropdown} to="/Orders">
              Orders
            </Link>
          </StyledDropDown>
        )}
      </StyledDropDownContainer>
      <Link onClick={logOut}>
        Log out <CiLogout />
      </Link>
    </>
  ) : (
    <Link to="/login">
      Log in <BsPerson />
    </Link>
  );
};

export default UserDropDown;
