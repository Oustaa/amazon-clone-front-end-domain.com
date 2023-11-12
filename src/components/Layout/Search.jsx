import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledSearchForm } from "../../styles/styled-header";

const StyledSearchContainer = styled.div`
  position: relative;
`;

const StyledSearchHistory = styled.div`
  width: 100%;
  background-color: var(--dark-600);
  padding: var(--spacing-sm);
  border-bottom-right-radius: var(--radius-lg);
  border-bottom-left-radius: var(--radius-lg);
  position: absolute;
  z-index: 1000;
`;

const StyledSearchBackDrop = styled.div`
  position: absolute;
  inset: 0 0 0 0;
`;

const StyledSearchLink = styled.div`
  padding: var(--spacing-lg) var(--spacing-sm);
  span {
    color: var(--white);
    width: 100%;
    display: inline-block;
  }

  &:hover {
    background-color: var(--dark-500);
    cursor: pointer;
  }
`;

const Search = () => {
  const searchInputRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQueries, setSearchQueries] = useState(
    JSON.parse(localStorage.getItem("search")) || []
  );
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    console.log(e.nativeEvent.key);
    const { value } = e.target;
    if (value === "") {
      setSearchQueries(JSON.parse(localStorage.getItem("search")) || []);
    } else {
      const regex = new RegExp(value, "g");
      setSearchQueries((prev) => {
        const queries = prev.filter((query) => regex.test(query));
        return new Array(...new Set([...queries]));
      });
    }
    setQuery(value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (query.length <= 2) return;
    const searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    localStorage.setItem(
      "search",
      JSON.stringify(new Array(...new Set([query, ...searchHistory])))
    );
    setShowSearch(false);
    searchInputRef.current.blur();
    navigate(`/search/${query}`);
  };

  const clickSearchHandler = (value) => {
    const searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    localStorage.setItem(
      "search",
      JSON.stringify(new Array(...new Set([value, ...searchHistory])))
    );
    setShowSearch(false);
    searchInputRef.current.blur();
    navigate(`/search/${value}`);
  };

  const escClickHandler = (e) => {
    if (e.keyCode === 27) {
      setShowSearch(false);
      searchInputRef.current.blur();
    }
    changeHandler(e);
  };

  return (
    <>
      {showSearch ? (
        <StyledSearchBackDrop onClick={() => setShowSearch(false)} />
      ) : null}

      <StyledSearchContainer onKeyDown={escClickHandler}>
        <StyledSearchForm onSubmit={searchHandler}>
          <input
            ref={searchInputRef}
            placeholder="Search...."
            type="text"
            value={query}
            onFocus={() => setShowSearch(true)}
            onChange={changeHandler}
          />
          <button>Search</button>
        </StyledSearchForm>
        {showSearch && searchQueries.length ? (
          <StyledSearchHistory>
            {searchQueries.slice(0, 6).map((search, i) => (
              <StyledSearchLink
                onClick={() => clickSearchHandler(search)}
                key={i}
              >
                <span>{search}</span>
              </StyledSearchLink>
            ))}
          </StyledSearchHistory>
        ) : null}
      </StyledSearchContainer>
    </>
  );
};

export default Search;
