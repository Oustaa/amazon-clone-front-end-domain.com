import React, { useState, useEffect } from "react";
import ProductsContainer from "../../components/products/ProductsContainer";
import axios from "axios";

async function getProducts(cb) {
  const resp = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/products/latest`
  );
  const data = await resp.data;

  cb({ value: data, loading: false });
}

const LatestUploaded = () => {
  const [latest, setLatest] = useState({ value: [], loading: false });

  useEffect(() => {
    setLatest({ value: [], loading: true });
    getProducts(setLatest);
  }, []);

  return <ProductsContainer title="Latest uploaded items" data={latest} />;
};

export default LatestUploaded;
