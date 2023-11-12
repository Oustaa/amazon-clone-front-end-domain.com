import React, { useState } from "react";
import Layout from "./Layout";
import OrderItems from "./OrderItems";
import UserInfo from "./UserInfo";
import PaymentInfo from "./PaymentInfo";
import { StyledContainer } from "../../styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";

/*
    Order Structure
    {
    "items": [
        {"product": "645f68a2b7c9d7aeba02917e","qte": 1,  "price": 149.99, "store": "64526532d9ed0e00d6daa6ce"},
        {"product": "646a33d311d4019feb856ddf","qte": 1,  "price": 349, "store": "64526532d9ed0e00d6daa6ce"},
        {"product": "646224ee9eac75a615ef36ea","qte": 1,  "price": 21.92, "store": "646224ee9eac75a615ef36ea"}
    ],
    "user":{
        "fullname": "Oussama Tailba",
        "email": "otailba98@gmail.com",
        "phone": "0641679994",
        "adress":{
            "county": "Morocco",
            "city": "Marrakech",
            "street": "Street bab ghmat 37 syba",
            "zipCode": 40400
        }
    },
    "total":125.99
    "Currency": "USD",
    }
*/

const extraStyles = `
    max-width: 800px;
    margin-block: var(--spacing-xxl);
`;

const COMPONENTS = [OrderItems, UserInfo, PaymentInfo];
const TITLE = ["Order's Items", "User Info", "Payment"];

const CheckOut = () => {
  const { currency } = useSelector((state) => state.auth);

  const [order, setOrder] = useState({
    items: [],
    user: {},
    total: 0,
    currency: currency || "USD",
  });
  const [step, setStep] = useState(0);

  const RendredStep = COMPONENTS[step];

  return (
    <>
      <Layout title={TITLE[step]} />
      <main>
        <StyledContainer extraStyles={extraStyles}>
          <RendredStep setOrder={setOrder} order={order} setStep={setStep} />
        </StyledContainer>
      </main>
    </>
  );
};

export default CheckOut;
