//DOC: FilterButtons.jsx
// Description:
// The FilterButtons component is a reusable React component designed to display a set of filter buttons based on the provided data array. It allows users to select a specific state from the data array by clicking on the corresponding button.

// Props:
// data: An array containing the list of items to be displayed as filter buttons.
// selectedState: The currently selected state from the data array.
// setSelectedState: A function to update the selected state when a button is clicked.
// Usage:
// const [selectedState, setSelectedState] = useState('all')
// <FilterButtons
//   data={/* Array of items */}
//   selectedState={/* Currently selected state */}
//   setSelectedState={/* Function to set selected state */}
// />

import React from 'react';

export const FilterButtons = ({ data, selectedState, setSelectedState }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((item) => (
        <button
          key={item}
          className={`${
            selectedState === item ? ' bg-secondary ' : ' '
          } rounded-full text-white px-5 py-1 text-sm font-medium capitalize transition-all duration-150`}
          onClick={() => setSelectedState(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
