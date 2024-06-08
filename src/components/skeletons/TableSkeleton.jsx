import React from 'react';
import { Container } from '../container/Container';

export const TableSkeleton = () => {
  return (
    <Container className="grid grid-cols-6 grid-rows-6 gap-2 p-4 bg-white">
      <div className="h-10 col-start-1 row-start-1 rounded-md w-72 animate-pulse bg-neutral-200" />
      {[...Array(11)].map((_, index) => (
        <div key={index} className="h-10 col-span-5 rounded-md animate-pulse bg-neutral-200" />
      ))}
    </Container>
  );
};
