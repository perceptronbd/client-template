//DOC: Container.jsx
// This is a reusable Container component built using React and Tailwind CSS.
// It provides a container with flexible width and height, centered content, and padding.
//
// Props:
// - `children`: React node(s) to be rendered inside the container.
// - `className`: Additional CSS classes to be applied to the container.
// - `width`: Width of the container. Default is 'w-full'.
// - `height`: Height of the container. Default is 'h-full'.

import React from 'react';
import { cn } from '../../utils/cn';

export const Container = ({ children, className, width = 'w-full', height = 'h-full' }) => {
  return (
    <section className={cn(`${width} ${height} p-2 mx-auto max-w-screen-xl`)}>
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center rounded-md',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};
