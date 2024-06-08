import React from 'react';

export const FilterButtonsSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 11 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-200 rounded-full h-9 w-28"></div>
        </div>
      ))}
    </div>
  );
};
