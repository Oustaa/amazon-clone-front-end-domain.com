import TableRow from "./TableRow";
import { StyledTableBody } from "../../styles/styled-table";

const TableBody = ({
  data,
  headers,
  endPoint,
  deletable,
  name,
  displayedComponentOnclick,
}) => {
  const fields = Object.values(headers).filter((field) => {
    return typeof field !== "function";
  });

  return (
    <StyledTableBody>
      {data.map((data, i) => {
        return (
          <TableRow
            endPoint={endPoint}
            deletable={deletable}
            key={i}
            id={data.id}
            data={data}
            fields={fields}
            name={name}
            displayedComponentOnclick={displayedComponentOnclick}
          />
        );
      })}
    </StyledTableBody>
  );
};

export default TableBody;
