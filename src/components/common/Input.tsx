import styled from "../../styles/themed-components";

export const Input = styled.input<{ width?: string; height?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.color.baseBlack};
  border: 1px solid #101010;
  border-radius: 5px;
  color: #aaacaa;
  font-size: 1.2em;
  padding: 10px;
  :hover {
    border: 1px solid black;
    transition: 0.3s;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.lightBlue};
  }
`;
