import React from 'react';

const BodyField = (props) => {
  return (
    <label>{props.label}
      <textarea
        className='form-field'
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  );
}

export default BodyField;
