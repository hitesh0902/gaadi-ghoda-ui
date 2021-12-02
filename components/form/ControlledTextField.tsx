import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface ControlledTextFieldProps extends UseControllerProps {
  label?: string;
  rightIcon?: React.ReactElement;
}

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  label,
  rightIcon,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
    formState: { isSubmitting },
  } = useController(rest);

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={field.name}>{label}</label>}
      <div className="relative">
        <input
          className="border border-black rounded p-1"
          id={field.name}
          type="text"
          {...field}
          disabled={isSubmitting}
        />
        {rightIcon && (
          <span className="absolute inset-y-0 right-2 pointer-events-none flex items-center">
            {rightIcon}
          </span>
        )}
      </div>
      <ErrorMessage message={error?.message} />
    </div>
  );
};

export default ControlledTextField;
