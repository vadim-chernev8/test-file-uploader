import React from 'react';

export const Button = ({ children, className, ...button }) => (
  <button className={`button ${className}`} {...button}>{children}</button>
);
