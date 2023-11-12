import React, { useState } from "react";
import { InputGroup, StyledButton } from "../../styles/index";
import styled from "styled-components";

const StyledFotter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-xxl);
`;

// "user":{
//   "fullname": "Oussama Tailba",
//   "email": "otailba98@gmail.com",
//   "phone": "0641679994",
//   "adress":{
//       "county": "Morocco",
//       "city": "Marrakech",
//       "street": "Street bab ghmat 37 syba",
//       "zipCode": 40400
//   }
// },

const UserInfo = ({ setOrder, setStep }) => {
  const [userInfo, setUserInfo] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const setUserHadler = () => {
    const user = {
      fullname: userInfo.fullname,
      email: userInfo.email,
      phone: userInfo.phone,
      adress: {
        county: userInfo.county,
        city: userInfo.city,
        street: userInfo.street,
        zipCode: userInfo.zipCode,
      },
    };

    setOrder((prev) => {
      return { ...prev, user };
    });

    setStep((prev) => prev + 1);
  };

  return (
    <>
      <InputGroup>
        <label htmlFor="fullname">
          <h4>Full Name:</h4>
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          value={userInfo.fullname || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="email">
          <h4>Email:</h4>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={userInfo.email || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="phone">
          <h4>Phone:</h4>
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={userInfo.phone || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="county">
          <h4>County:</h4>
        </label>
        <input
          type="text"
          name="county"
          id="county"
          value={userInfo.county || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">
          <h4>City:</h4>
        </label>

        <input
          type="text"
          name="city"
          id="city"
          value={userInfo.city || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="street">
          <h4>street:</h4>
        </label>
        <input
          type="text"
          name="street"
          id="street"
          value={userInfo.street || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="zipCode">
          <h4>Zip Code:</h4>
        </label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={userInfo.zipCode || ""}
          onChange={changeHandler}
        />
      </InputGroup>
      <StyledFotter>
        <StyledButton onClick={setUserHadler}>Next</StyledButton>
      </StyledFotter>
    </>
  );
};

export default UserInfo;
