//DOC: Checkbox.jsx
// This is a reusable Checkbox component built using React.
// It renders a checkbox input with a label.
// Props:
// - `id`: string
// - `label`: string
// - `...inputProps`: Other props are passed to the input element

import React from 'react';

export const Checkbox = (props) => {
  const { id, label, ...inputProps } = props;

  return (
    <>
      <div className="py-1">
        <input
          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-transparent bg-center bg-no-repeat bg-contain border-2 rounded appearance-none cursor-pointer border-accent-secondary checked:border-primary checked:bg-primary focus:outline-none"
          type="checkbox"
          id={id}
          {...inputProps}
        />
        <label className="inline-block" htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};
