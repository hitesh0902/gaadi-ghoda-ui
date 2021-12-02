import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface ControlledTextFieldProps extends UseControllerProps {
  label?: string;
}

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  label,
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
      <input
        className="border border-gray-400 rounded p-1"
        id={field.name}
        type="text"
        {...field}
        disabled={isSubmitting}
      />
      <ErrorMessage message={error?.message} />
    </div>
  );
};

export default ControlledTextField;
