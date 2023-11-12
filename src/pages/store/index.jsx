import { StyledStore } from "../../styles/styled-store";

import Loader from "../../components/Loader";

const Store = ({ store }) => {
  console.log(store);
  if (store?.loading) {
    return <Loader />;
  }

  return <StyledStore>store home page</StyledStore>;
};

export default Store;
