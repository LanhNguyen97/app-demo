import React from 'react';
import { WrapperLabel, StyleInput, TextError } from './styled'

const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  returnName,
  error,
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
  type: 'text'
}

export default Input;