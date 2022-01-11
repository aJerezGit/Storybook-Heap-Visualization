import * as React from 'react';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'primary' | 'secundary';
}

export const Button = ({children, ...props}: IButtonProps) => {
  return (
    <button {...props}>
        {children}
    </button>
  );
};