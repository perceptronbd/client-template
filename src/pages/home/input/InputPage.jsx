import React from 'react';
import { Checkbox } from '../../../components/input/Checkbox';
import { FormInput } from '../../../components/input/FormInput';

const InputPage = () => {
  return (
    <div className="grid gap-6">
      <Checkbox id="checkbox1" label="Checkbox" />
      <FormInput placeholder="Form Input" />
    </div>
  );
};

export default InputPage;
