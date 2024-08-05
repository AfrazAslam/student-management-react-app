import styled from "styled-components";
import { colors } from "./Common";

// Dropdown menu styles
export const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownButton = styled.button`
  background: white;
  color: ${colors.blue};
  border: none;
  border-bottom: 1px solid ${colors.grey};
  padding: 8px 16px;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  width:100%;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${colors.grey};
  }
`