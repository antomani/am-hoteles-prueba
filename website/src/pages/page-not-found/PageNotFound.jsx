import React from 'react';
import styled from 'styled-components';

const PageNotFoundContainer = styled.div`
  min-height: 400px;
  text-align: center;
  padding: 50px 0;
`;

const Title = styled.h1`
  padding: 20px;
`;

const Subtitle = styled.h2`
  font-weight: 200;
`;

/**
 * @description 404 PageNotFound component
 */
const PageNotFound = () => {
    return (
        <PageNotFoundContainer>
            <Title>404 - Pagina no encontrada</Title>
            <Subtitle>Oops intente nuevamente</Subtitle>
        </PageNotFoundContainer>
    );
};
  
export default PageNotFound;
