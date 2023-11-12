import React, { useState, useEffect } from "react";
import { StyledLinks, StyledNav } from "../../styles/styled-header";
import { FlexContainer } from "../../styles";
import {
  StyledStoreHeader,
  StyledBgimage,
  StyledHeader,
  StyledAvatar,
} from "../../styles/styled-store";
import { Link, Outlet, useParams } from "react-router-dom";
import axios from "axios";

async function getStore(id, cb) {
  cb({ value: {}, loading: true });
  const resp = await axios.get(`${import.meta.env.VITE_BASE_URL}/stores/${id}`);
  console.log(await resp.data);
  const data = await resp.data;

  cb({ value: data, loading: false });
}

const Layout = () => {
  const { id } = useParams();
  const [store, setStore] = useState({ value: {}, loading: true });
  useEffect(() => {
    getStore(id, setStore);
  }, [id]);

  return (
    <>
      <StyledStoreHeader>
        <StyledBgimage>
          <img
            src={`${import.meta.env.VITE_BASE_URL}/images/bg-image-size.jpg`}
            crossorigin="anonymous"
            alt=""
          />
        </StyledBgimage>
        <StyledHeader>
          <FlexContainer>
            <StyledAvatar>
              <img src={""} alt="" />
            </StyledAvatar>
            <h3>{store.value.name}</h3>
          </FlexContainer>
          <StyledNav>
            <StyledLinks>
              <Link to="">Home</Link>
              <Link to="products">Products</Link>
            </StyledLinks>
          </StyledNav>
        </StyledHeader>
      </StyledStoreHeader>
      <Outlet store={store} />
    </>
  );
};

export default Layout;
