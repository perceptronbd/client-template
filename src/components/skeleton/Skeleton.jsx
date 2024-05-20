import React, { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

export const Skeleton = ({ className, props, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 5);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? (
    <div className={cn('animate-pulse rounded-md bg-white', className)} {...props} />
  ) : null;
};
