import styled from "styled-components";

export const StyledContainer = styled.div`
  width: calc(100% - var(--spacing-xxl));
  max-width: 1700px;
  margin-inline: auto;
  ${({ extraStyles }) => extraStyles};
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: ${({ mg }) => mg || "var(--spacing-lg)"};

  label {
    margin-bottom: var(--spacing-sm);
    display: inline-block;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: var(--spacing-sm);
    border: 1px solid var(--dark-300);
    border-radius: var(--radius-lg);
    margin-bottom: ${({ mg }) => mg || "var(--spacing-lg)"};
  }
  textarea {
    height: auto;
    resize: none;
  }
  &.invalid {
    label,
    p {
      color: var(--danger);
    }
    input {
      border-color: var(--danger);
      background-color: var(--danger-100);
    }
  }

  & > div {
    margin-bottom: var(--spacing-lg);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${({ y }) => (y ? y : "center")};
  padding-block: var(--spacing-sm);
  gap: ${({ gap }) => (gap ? gap : "var(--spacing-sm)")};
  ${({ extraStyles }) => extraStyles};
`;

export const StyledButton = styled.button`
  padding: ${({ padding }) =>
    padding ? padding : "var(--spacing-sm) var(--spacing-xl)"};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var( --primary-dark) "};
  border: none;
  border-radius: var(--radius-lg);
  color: ${({ color }) => (color ? color : "var(--white)")};
  a {
    color: white;
  }
  ${({ extraStyles }) => extraStyles};
`;

export const StyledBigInput = styled.input`
  width: 100%;
  padding: var(--spacing-lg);
  border: 1px solid var(--dark-800);
  border-radius: var(--radius-lg);
  margin-block: var(--spacing-sm);
`;

export const StyledLoader = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : "80vh")};
  display: flex;
  gap: var(--spacing-xl);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ loaderExtraStyles }) => loaderExtraStyles}
`;
