import React from 'react';

const TitleField = (props) => {
  return (
    <label>{props.label}
      <input
        className='form-field'
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  );
}

export default TitleField;
