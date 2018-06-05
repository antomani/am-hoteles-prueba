import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Routes from '../routes';
import styled from 'styled-components';
import './GlobalStyles';
import { BACKGROUND_GREY } from './GlobalStyles';

const MainLayoutContainer = styled.div`
    background-color: ${BACKGROUND_GREY};
    font-family: sans-serif;
`;

/**
 * @description MainLayout component
 */
const MainLayout = () => {
    return (
        <MainLayoutContainer>
            <Header />
            <Routes />
            <Footer />
        </MainLayoutContainer>
    );
};
  
export default MainLayout;
