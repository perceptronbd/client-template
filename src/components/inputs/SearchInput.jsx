//DOC: SearchInput.jsx
// This is a reusable SearchInput component built using React and Tailwind CSS.
// It supports various props to customize its appearance and behavior.
// - `onChange`: Function to handle change events on the input.
// - `searchQuery`: The current value of the search input.
// - `className`: Custom additional CSS classes.

import React from 'react';
import { cn } from '../../utils/cn';

export const SearchInput = React.forwardRef(({ onChange, searchQuery, className }, ref) => {
  return (
    <div className="relative my-2">
      <input
        autoComplete="off"
        placeholder="Search..."
        id="search"
        type="text"
        value={searchQuery}
        onChange={onChange}
        className={cn(
          'peer block h-10 w-72 rounded-lg border p-2 text-textColor-light placeholder:text-transparent hover:border-primary focus:border-primary focus:text-textColor focus:outline-none focus:ring-1',
          className
        )}
        ref={ref}
      />
      <label
        htmlFor="search"
        className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-6 scale-75 transform bg-white px-1 text-sm text-gray-500 duration-300 peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:text-primary"
      >
        Search...
      </label>
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
