import React from 'react';
import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

export const LinkButton = (props) => {
  const { children, className, icon: Icon } = props;
  return (
    <Link to={props.to}>
      <button
        className={cn(
          `bg-accent-primary w-52 h-12 px-4 rounded-lg font-semibold text-white hover:bg-opacity-80 transition-all ease-in-out duration-300 `,
          className
        )}
      >
        <span className="flex justify-center items-center">
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </span>
      </button>
    </Link>
  );
};
