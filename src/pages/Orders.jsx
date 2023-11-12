import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { StyledContainer } from "../styles";
import Table from "../components/table/Table";
import getSymbolFromCurrency from "currency-symbol-map";

import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledOrders = styled.div`
  padding-block: var(--spacing-xl);

  h2 {
    margint-bottom: var(--spacing-lg);
  }
`;

const OrdersHeaders = {
  "Order Ref": { value: "_id" },
  Items: {
    checked: true,
    check: (data) => {
      return data.items.length;
    },
  },
  "Total Price": {
    checked: true,
    check: (data) => {
      return (
        getSymbolFromCurrency(data.currency) + data.total["$numberDecimal"]
      );
    },
  },
  State: { value: "state" },
  "Order On": { type: "date", value: "createdAt" },
};

const Orders = () => {
  const { token } = useSelector((state) => state.auth);
  const { data: orders, loading } = useFetch({
    url: `${import.meta.env.VITE_BASE_URL}/orders/user`,
    config: {
      headers: { Authorization: token },
    },
  });

  if (loading) return <Loader />;

  return (
    <StyledContainer>
      <StyledOrders>
        <h2>Your Orders</h2>
        <Table data={orders} headers={OrdersHeaders} />
      </StyledOrders>
    </StyledContainer>
  );
};

export default Orders;
