import React, { useState } from 'react';
import CustomDropDown from './CustomDropDown';

interface CustomDropDownContainerProps {
  data: { name: string; value: string }[];
  selectedValue: string;
  oneSelect: (item: string) => void;
  placeholder: string;
}

const CustomDropDownContainer: React.FC<CustomDropDownContainerProps> = ({
  data,
  selectedValue,
  oneSelect,
  placeholder
}) => {
  const [option, setOption] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState('');
  const CONSTANTS = {
    iconName: 'arrow-up-circle-outline'
  };

  const selectOption = () => {
    setOption(!option);
  };

  const oneSelectItem = (val: { name: string; value: string }) => {
    setOption(false);
    oneSelect(val.value);
    setSelectedName(val.name);
  };

  return (
    <CustomDropDown
      data={data}
      selectedValue={selectedValue}
      placeholder={placeholder}
      selectOption={selectOption}
      oneSelectItem={oneSelectItem}
      option={option}
      CONSTANTS={CONSTANTS}
      selectedName={selectedName}
    />
  );
};

export default CustomDropDownContainer;
