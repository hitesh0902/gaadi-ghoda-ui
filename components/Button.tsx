import React from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label: string;
  onClick?(): void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: ButtonType;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isLoading,
  type,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded bg-primary text-white flex items-center gap-2"
      disabled={disabled || isLoading}
      type={type}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {label && <span>{label}</span>}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
