import React from 'react';
import { Checkbox } from '../../../components/input/Checkbox';
import { FormInput } from '../../../components/input/FormInput';
import { ImgInput } from '../../../components/input/ImgInput';

const InputPage = () => {
  return (
    <div className="grid gap-6">
      <Checkbox id="checkbox1" label="Checkbox" />
      <FormInput placeholder="Form Input" />
      <ImgInput />
    </div>
  );
};

export default InputPage;
