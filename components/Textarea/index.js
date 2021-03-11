import React from 'react';
import { WrapperLabel, StyleTextarea } from './styled'

const Textarea = ({
  label,
  name,
  value,
  onChange,
  returnName,
  rows,
  cols,
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
            <StyleTextarea
              name={name}
              value={value}
              rows={rows}
              cols={cols}
              onChange={onChangeValue}
              {...rest}
            />
          </WrapperLabel>)
          : <StyleTextarea
            name={name}
            value={value}
            rows={rows}
            cols={cols}
            onChange={onChangeValue}
            {...rest}
          />
      }
    </>
  );
};

Textarea.defaultProps = {
  returnName: false,
  onChange: () => { },
  rows: 5,
  cols: 100
}

export default Textarea;