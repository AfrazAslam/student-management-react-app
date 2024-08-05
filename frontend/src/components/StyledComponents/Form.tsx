import styled from "styled-components";
import { commonInputStyles } from "./Common";

// Styled components
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 400px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: grey;
`;

export const Input = styled.input`
  ${commonInputStyles};
  padding: 10px;
  font-size: 1rem;
`;

export const Select = styled.select`
  ${commonInputStyles};
  font-size: 1rem;
`;
