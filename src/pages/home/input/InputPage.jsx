import React from 'react';
import { Checkbox } from '../../../components/input/Checkbox';
import { FormInput } from '../../../components/input/FormInput';
import { ImgInput } from '../../../components/input/ImgInput';
import { Input } from '../../../components/input/Input';
import { SearchInput } from '../../../components/input/SearchInput';
import { SelectInput } from '../../../components/input/SelectInput';
import { TextInput } from '../../../components/input/TextInput';

const InputPage = () => {
  const selectOpts = {
    fruits: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
    vegetables: [
      { value: 'aubergine', label: 'Aubergine' },
      { value: 'broccoli', label: 'Broccoli' },
    ],
  };
  return (
    <div className="grid gap-6">
      <Checkbox id="checkbox1" label="Checkbox" />
      <FormInput placeholder="Form Input" />
      <ImgInput />
      <Input placeholder="Input" />
      <SearchInput />
      <SelectInput selectOpts={selectOpts} placeholder="Select Input" />
      <TextInput label="Text Input" />
    </div>
  );
};

export default InputPage;
