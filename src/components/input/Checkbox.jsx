import React from 'react';

export const Checkbox = (props) => {
  const { id, label, ...inputProps } = props;

  return (
    <div className="px-2 py-1 ">
      <input
        className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-transparent bg-center bg-no-repeat bg-contain border-2 border-gray-300 rounded appearance-none cursor-pointer checked:border-blue-600 checked:bg-blue-600 focus:outline-none "
        type="checkbox"
        id={id}
        {...inputProps}
      />
      <label className="inline-block" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
