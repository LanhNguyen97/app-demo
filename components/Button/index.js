import React from 'react';
import PropTypes from 'prop-types';
import { StyleButton } from './styled'

const Button = (props) => {
  return (
    <StyleButton onClick={props.onClick} disabled={props.disabled} className={`btn btn-${props.theme} ${props.className}`}>
      {props.children}
    </StyleButton>
  );
};

Button.defaultProps = {
  theme: 'primary'
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