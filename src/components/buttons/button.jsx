//DOC: Button.jsx
// This is a reusable Button component built using React and Tailwind CSS.
// It supports various props to customize its appearance and behavior.
// - `className`: Custom additional CSS classes.
// - `variant`: Style variants for different button types (default: 'default').
// - `disabled`: Disables the button if set to true (default: false).
// - `loading`: Shows a loading spinner if set to true (default: false).
// - `size`: Size variants for the button (default: 'default').
// - `asChild`: Renders the button as a different component if set to true (default: false).
// - `children`: The content inside the button.
// - `...props`: Other props are passed to the button element.

import { Slot } from '@radix-ui/react-slot';
import { LucideLoader2 } from 'lucide-react';
import React from 'react';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef(
  (
    {
      className,
      variant = 'default',
      disabled = false,
      loading = false,
      size = 'default',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-white hover:bg-primary/90': variant === 'default',
            'bg-red-500 text-white hover:bg-red-500/90': variant === 'destructive',
            'border border-secondary bg-background text-secondary hover:bg-secondary hover:text-white':
              variant === 'outline',
            'bg-accent text-white hover:bg-accent/80': variant === 'primary',
            'text-accent hover:bg-accent hover:text-white': variant === 'ghost',
            'text-primary underline-offset-4 hover:underline': variant === 'link',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <div className="flex items-center justify-center w-4 h-4 rounded-full animate-spin">
              <LucideLoader2 />
            </div>
            {children && <span>{children}</span>}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
