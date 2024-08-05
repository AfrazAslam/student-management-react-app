import styled from 'styled-components';
import { Button } from './Button';

// Theme colors
export const colors = {
  black: '#162f52',
  green: '#00cf83',
  blue: '#193A8C',
  grey: '#ebf6ff',
  yellow: '#ffdf50',
  orange: '#ffa700',
  lightBlue: '#0467d0',
  midBlue: '#0467d0',
};

// Common styles
export const commonInputStyles = `
  padding: 8px 12px;
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.green};
    outline: none;
  }
`;


export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.green};
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightBlue};
  }
`;

export const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${colors.blue};
  max-width: 1200px;
  min-height:100px
  margin: auto;
`;

export const H2 = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
`;
