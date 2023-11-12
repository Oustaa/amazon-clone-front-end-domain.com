import styled from "styled-components";

export const StyledTableConainers = styled.div`
  width: ${({ width }) => (width ? `${width}` : "100%")};
`;

export const StyledTableHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between !important;
  background-color: var(--white);
  margin-bottom: var(--spacing-sm);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--white);
  padding-block: var(--spacing-sm);
  & > * {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  min-width: max-content;
  overflow-x: scroll;
  width: ${({ width }) => (width ? `${width} !important` : "100%")};
  min-width: max-content;
  box-shadow: var(--boxShadow);
  position: relative;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.thead`
  background-color: var(--white);
  position: sticky;
  top: 46px;
  z-index: 100;
  background-color: var(--primary);
  & > * {
    color: var(--white) !important;
  }
`;

export const StyledTr = styled.tr`
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTh = styled.th`
  // color: var(--dark-800);
  padding: var(--spacing-lg) var(--spacing-sm);
  font-size: 0.9rem;
  font-weight: 300;
  border: 1px solid var(--dark-100);
`;

export const StyledTd = styled.td`
  color: var(--dark-700);
  padding-block: var(--spacing-lg);
  padding-inline: var(--spacing-sm);
  font-weight: 500;
  text-align: center;
  border: 1px solid var(--dark-100);

  &.image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTableBody = styled.tbody`
  background-color: var(--white);
`;
