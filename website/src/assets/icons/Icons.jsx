import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  margin-right: -7px;
`;

const Path = styled.path`
  ${props => props.color && css`
    fill: ${props.color};
  `}
`;
  
const Icon = ({ icon, size, color }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 1024 1024">
      <Path color={color} d={icon}></Path>
    </Svg>
  )
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  size: 32,
};

export default Icon;
