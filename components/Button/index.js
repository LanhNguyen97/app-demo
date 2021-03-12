import React from 'react';
import PropTypes from 'prop-types';
import { StyleButton } from './styled'

const Button = ({ onClick, disabled, theme, className = '', children, ...rest }) => {
  return (
    <StyleButton
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${theme} ${className}`}
      {...rest}
    >
      {children}
    </StyleButton>
  );
};

Button.defaultProps = {
  theme: 'primary',
  disabled: false,
  className: ''
}


Button.propTypes = {
  theme: PropTypes.oneOf([
    'success',
    'danger',
    'info',
    'warning',
    'primary',
    'secondary',
    'light',
    'dark'
  ]),
};

export default Button;