import styled from "styled-components";
import { colors, commonInputStyles } from "./Common";
import { Button } from "./Button";

export const LookupInput = styled.input`
  ${commonInputStyles};
`;

export const LookupButton = styled(Button)`
  background-color: ${colors.green};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.lightBlue};
  }
`;