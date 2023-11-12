import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// styled components
import { StyledTableConainers, StyledTable } from "../../styles/styled-table";

const Table = ({
  TableHead,
  headers,
  data,
  emptyMessage,
  displayedComponentOnclick,
}) => {
  return (
    <StyledTableConainers>
      {TableHead}
      {data?.length > 0 ? (
        <StyledTable>
          <TableHeader headers={headers} />
          <TableBody
            displayedComponentOnclick={displayedComponentOnclick}
            data={data}
            headers={headers}
          />
        </StyledTable>
      ) : (
        emptyMessage
      )}
    </StyledTableConainers>
  );
};

export default Table;
