import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  return (
    <div className={`alert alert-${props.className} alert-dismissible`}>
      {props.showClose &&
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={props.onClose}
        >
          &times;
        </button>
      }
      {props.message}
    </div>
  );
};

Alert.defaultProps = {
  className: 'success',
  showClose: true,
  message: '',
  onClose: () => { }
}

Alert.propTypes = {
  className: PropTypes.oneOf([
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

export default Alert;