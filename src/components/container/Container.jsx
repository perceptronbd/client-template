import React from 'react';
import { cn } from '../../utils/cn';

export const Container = ({ children, className, width = 'w-full', height = 'h-full' }) => {
  return (
    <section className={cn(`${width} ${height}  p-2`)}>
      <div
        className={cn(
          `flex h-full w-full flex-col items-center justify-center rounded-md `,
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};
