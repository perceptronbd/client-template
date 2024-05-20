import React from 'react';
import { cn } from '../../utils/cn';

export const TextInput = (props) => {
  const { children, label, id, className, errorMessage, onChange, ...inputProps } = props;

  return (
    <div className="relative my-4">
      <textarea
        id={id}
        {...inputProps}
        onChange={onChange}
        className={cn(
          'peer block border rounded-xl w-full h-28 p-2 focus:outline-none focus:ring-1 focus:border-accent-secondary placeholder:px-2 placeholder:text-transparent',
          className
        )}
      />
      {label && (
        <label
          htmlFor={id}
          className="absolute text-sm px-1 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white"
        >
          {label}
        </label>
      )}
      <span className="text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {errorMessage}
      </span>
    </div>
  );
};
