import styled, { css } from "../../styles/themed-components";

export const ListHoverBox = styled.div<{ active: boolean }>`
  border-radius: 5px;
  color: ${({ theme }) => theme.color.labelGrey};
  ${(props) =>
    props.active
      ? css`
          background-color: ${({ theme }) => theme.color.chat};
          color: #ffffff;
        `
      : css`
          :hover {
            background-color: #36393faa;
            color: #a8a8a8;
            cursor: pointer;
          }
        `}
  :hover {
    cursor: pointer;
  }
`;
