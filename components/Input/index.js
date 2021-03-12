import React from 'react';
import { WrapperLabel, StyleInput, TextError } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faFileSignature } from '@fortawesome/free-solid-svg-icons'

const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  returnName,
  error,
  iconClick,
  showIcon,
  ...rest
}) => {

  const onChangeValue = (e) => {
    const { value } = e.target

    if (returnName) {
      onChange(name, value)
    } else {
      onChange(value)
    }
  }


  return (
    <>
      {
        label
          ? (<WrapperLabel>
            <label>{label}</label>
            <StyleInput
              name={name}
              type={type}
              value={value}
              onChange={onChangeValue}
              {...rest}
            />
            {showIcon && <FontAwesomeIcon icon={faEye} onClick={iconClick} />}
            {error && <TextError>{error}</TextError>}
          </WrapperLabel>)
          : <>
            <StyleInput
              name={name}
              type={type}
              value={value}
              onChange={onChangeValue}
              {...rest}
            />
            {error && <TextError>{error}</TextError>}
          </>
      }
    </>
  );
};

Input.defaultProps = {
  returnName: false,
  onChange: () => { },
  type: 'text',
  showIcon: false,
}

export default Input;