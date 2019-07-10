import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ type, size, icon, label }) => (
  <View>
    <ButtonBody {...{type, size}}>
      {getIcon(icon)}
      <ButtonLabel {...{type, size}}>
      {label}
      </ButtonLabel>
    </ButtonBody>
  </View>
)

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'outline', 'plain', 'destructive']),
  size: PropTypes.oneOf(['regular', 'small']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  label: PropTypes.string
}

Button.defaultProps = {
  type: 'primary',
  size: 'regular',
  label: ''
}

const getIcon = (Icon) => {
  if(typeof Icon === 'string') {
    return null;
  } else if (React.isValidElement(Icon)) {
    return <Icon/>;
  } else return null;
}

const ButtonBody = styled(TouchableOpacity)`
  background-color: ${({ type, theme }) => ({
    'primary': theme.palette.primary.main,
    'outline': 'transparent',
    'plain': 'transparent',
    'destructive': theme.palette.accent.error
  }[type] || theme.palette.primary.main)};

  border-color: ${({ type, theme }) => ({
    'outline': theme.palette.primary.main
  }[type] || 'transparent')};

  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
`;

const ButtonLabel = styled(Text)`
  color: ${({ type, theme }) => ({
    'primary': theme.palette.white,
    'outline': theme.palette.primary.main,
    'plain': theme.palette.primary.main,
    'destructive': theme.palette.white
  }[type] || theme.palette.white)};
  font-size: ${({ size }) => ({
    'regular': '16px',
    'small': '14px'
  }[size] || '14px')};
  font-weight: 500;
  margin: ${({ size }) => size === 'regular' ? '14px 24px' : '10px 16px'};
`;

export default Button;