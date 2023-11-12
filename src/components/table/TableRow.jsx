import React, { useEffect, useState } from "react";
import { StyledTr, StyledTd } from "../../styles/styled-table";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledImage = styled.img`
  width: 100px;
  aspect-ratio: 1 / 0.8;
  object-fit: contain;
`;

const TableRow = ({ data, fields, displayedComponentOnclick }) => {
  const [showDetailed, setShowDetailed] = useState(false);
  const displayedValues = fields.map((field, i) => {
    if (field.type === "image")
      return (
        <StyledTd key={i} className="image">
          <StyledImage
            crossOrigin="anonymous"
            src={`${import.meta.env.VITE_BASE_URL}/images//products/${
              data[field.value][0]
            }`}
          />
        </StyledTd>
      );
    else if (field.type === "date")
      return (
        <StyledTd key={i}>
          {new Date(data[field.value]).toLocaleDateString()}
        </StyledTd>
      );
    else if (
      data[field.value] !== null &&
      data[field.value] !== undefined &&
      data[field.value] !== ""
    ) {
      if (field.exec && field.exec instanceof Function)
        return <StyledTd key={i}>{field.exec(data[field.value])}</StyledTd>;
      else return <StyledTd key={i}>{data[field.value]}</StyledTd>;
    } else if (field.default)
      return <StyledTd key={i}>{field.defaultValue}</StyledTd>;
    else if (field.checked)
      return <StyledTd key={i}>{field.check(data, i)}</StyledTd>;
    else return <StyledTd key={i}>none</StyledTd>;
  });

  const handelClick = () => {
    setShowDetailed(!showDetailed);
  };

  useEffect(() => {
    return setShowDetailed(false);
  }, []);

  return (
    <>
      <StyledTr onClick={handelClick}>{displayedValues}</StyledTr>
      {showDetailed && displayedComponentOnclick && (
        <tr>{displayedComponentOnclick(data)}</tr>
      )}
    </>
  );
};

export default TableRow;
