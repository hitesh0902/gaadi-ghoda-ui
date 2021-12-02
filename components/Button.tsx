import React from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label: string;
  onClick?(): void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isLoading,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded bg-primary text-white"
      disabled={disabled || isLoading}
      type={type}
    >
    {label}
    </button>
  );
};

export default Button;
