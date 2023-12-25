import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 16px;

  border-radius: 10px;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  resize: none;

  margin-bottom: 8px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
