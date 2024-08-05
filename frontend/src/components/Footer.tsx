import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  text-align: center;
  padding-bottom: 10px;
  width: 100%;
`;

const P = styled.p`
  color: white !important;
  padding-top: 20px;  
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <P>&copy; {new Date().getFullYear()} Safepay</P>
    </FooterContainer>
  );
};

export default Footer;
