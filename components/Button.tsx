import React from 'react';

interface ButtonProps {
  label: string;
  onClick?(): void;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded bg-primary text-white"
      disabled={disabled}
    >
      <p>{label}</p>
    </button>
  );
};

export default Button;
