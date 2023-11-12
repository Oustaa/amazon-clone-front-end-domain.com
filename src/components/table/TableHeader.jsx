import {
  StyledTableHeader,
  StyledTh,
  StyledTr,
} from "../../styles/styled-table";

const TableHeader = ({ headers }) => {
  const headersToDisplay = Object.keys(headers).filter((field) => {
    return typeof headers[field] !== "function";
  });

  return (
    <StyledTableHeader>
      <StyledTr>
        {headersToDisplay.map((header, i) => (
          <StyledTh key={i}>{header}</StyledTh>
        ))}
      </StyledTr>
    </StyledTableHeader>
  );
};

export default TableHeader;
