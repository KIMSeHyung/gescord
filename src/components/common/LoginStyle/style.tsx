import styled from "../../../styles/themed-components";

export const TitleLabel = styled.span`
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.fullWhite};
  font-weight: 900;
`;

export const Label = styled.span`
  margin-top: 25px;
  color: ${({ theme }) => theme.color.labelGrey};
`;

export const BlueLabel = styled.span`
  color: ${({ theme }) => theme.color.lightBlue};
  :hover {
    text-decoration: underline;
  }
`;

export const ActionButton = styled.div`
  display: felx;
  height: 45px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.blurple};
  justify-content: center;
  align-items: center;
  color: white;
  :hover {
    background-color: rgb(79, 98, 167);
    transition: 0.3s;
  }
  font-size: 1.1em;
`;
