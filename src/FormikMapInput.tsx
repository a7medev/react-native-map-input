import React from 'react';
import { useField } from 'formik';

import MapInput, { MapInputProps } from './MapInput';

export interface FormikMapInputProps extends MapInputProps {
  name: string;
}

const FormikMapInput: React.FC<FormikMapInputProps> = ({
  name,
  ...mapInputProps
}) => {
  const [field, , helpers] = useField(name);

  return (
    <MapInput
      {...mapInputProps}
      onChange={coordinate => helpers.setValue(coordinate)}
      region={field.value}
    />
  );
};

export default FormikMapInput;
