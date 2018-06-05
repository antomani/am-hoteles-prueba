import React from 'react';
import styled from 'styled-components';
import { DESKTOP_CONTENT_MAX_WIDTH, AM_BLUE, MOBILE_MAX_WIDTH } from './GlobalStyles';

const HeaderElement = styled.header`
    height: 90px;
    width: 100%;
    background-color: ${AM_BLUE};

    @media (max-width: ${MOBILE_MAX_WIDTH}px) {
        height: 65px;
    }
`;

const NavContainer = styled.div`
    max-width: ${DESKTOP_CONTENT_MAX_WIDTH};
    margin: auto;    
`;

const Logo = styled.img`
    padding: 20px;

    @media (max-width: ${MOBILE_MAX_WIDTH}px) {
        height: 34px;
    }
`;

/**
 * @description Header component
 */
const Header = () => {
    return (
        <HeaderElement>
            <NavContainer>
                <Logo src={require("../assets/images/logo-almundo.svg")} alt="" />
            </NavContainer>
        </HeaderElement>
    );
};
  
export default Header;
