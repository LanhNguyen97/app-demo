import React from 'react';
import { Label } from './styled'

const Checkbox = (props) => {

  const onChange = () => {
    props.onChange(props.name)
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={props.checked}
        name={props.name}
        onChange={onChange}
      />
      <label className="ml-2">{props.label}</label>
    </div>
  );
};

export default Checkbox;