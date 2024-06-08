// DOC: Text.jsx
// Description:
// The Text component is a reusable React component for rendering text with various styles and variants.
// It supports different heading levels and body text with customizable sizes and font weights.

// Props:
// - variant (string): Defines the HTML element to be used and the text size.
//   Options are: 'headerLarge', 'headerMedium', 'headerSmall', 'titleLarge', 'titleMedium', 'titleSmall', 'bodyMedium', 'bodySmall'.
//   Default is 'bodyMedium'.
// - type (string): Defines the font weight. Options are: 'b' (bold), 'sb' (semi-bold), 'm' (medium), 'normal'. Default is 'normal'.
// - children (node): The text content to be displayed inside the component.
// - className (string, optional): Additional custom classes for the component.

// Usage Example:
// <Text variant="headerLarge" type="b" className="custom-class">
//   This is a large header
// </Text>

import React from 'react';
import { cn } from '../../utils/cn';

export const Text = ({ variant = 'bodyMedium', type = 'normal', children, className }) => {
  const Component =
    (variant === 'headerLarge' && 'h1') ||
    (variant === 'headerMedium' && 'h2') ||
    (variant === 'headerSmall' && 'h3') ||
    (variant === 'titleLarge' && 'h4') ||
    (variant === 'titleMedium' && 'h5') ||
    (variant === 'titleSmall' && 'h6') ||
    (variant === 'bodyMedium' && 'p') ||
    (variant === 'bodySmall' && 'p');

  return (
    <Component
      className={cn(
        'text-textColor',
        {
          'text-7xl': variant === 'headerLarge',
          'text-5xl': variant === 'headerMedium',
          'text-3xl': variant === 'headerSmall',
          'text-2xl': variant === 'titleLarge',
          'text-xl': variant === 'titleMedium',
          'text-lg': variant === 'titleSmall',
          'text-base': variant === 'bodyMedium',
          'text-sm': variant === 'bodySmall',
        },
        {
          'font-bold': type === 'b',
          'font-semibold': type === 'sb',
          'font-medium': type === 'm',
          'font-normal': type === 'normal',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
