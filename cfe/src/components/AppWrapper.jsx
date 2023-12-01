import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  
  /* Resto de estilos que originalmente estaban bajo el selector * en styles.css */
`;

const AppWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppWrapper;