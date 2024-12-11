import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1.5rem 1rem;
`;

const Text = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>© 2024 Tudo sobre JS. Todos os direitos reservados.</Text>
    </FooterContainer>
  );
};

export default Footer;