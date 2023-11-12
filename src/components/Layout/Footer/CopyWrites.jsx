import styled from "styled-components";

const StyledFooterHr = styled.div`
  background-color: var(--dark-600);
  height: 1px;
  width: 100%;
  margin-block: var(--spacing-lg);
`;

const StyledCopyWriteWrapper = styled.div`
  padding-bottom: var(--spacing-lg);
  text-align: center;
  color: white;
  a {
    color: var(--primary);
  }
`;

const CopyWrites = () => {
  return (
    <>
      <StyledFooterHr />
      <StyledCopyWriteWrapper>
        <p>
          CopyRight By{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ousta-2f563.web.app/"
          >
            Oussama Tailba
          </a>{" "}
          2023
        </p>
      </StyledCopyWriteWrapper>
    </>
  );
};

export default CopyWrites;
