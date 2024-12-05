import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './customDropDownStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/constants/colors';
import { strings } from '../../locales/i18n';

interface CustomDropDownProps {
  data: { name: string; value: string }[];
  selectedValue: string;
  placeholder: string;
  option: any;
  selectOption: any;
  oneSelectItem: any;
  CONSTANTS: {
    iconName: string;
  };
  selectedName: string;
}

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  data,
  selectedValue,
  placeholder,
  option,
  selectOption,
  oneSelectItem,
  CONSTANTS,
  selectedName
}) => {
  return (
    <View style={{}}>
      <TouchableOpacity style={styles.dropDownStyle} onPress={selectOption}>
        <Text>
          {selectedName?.length > 0
            ? selectedName
            : strings('labels.choose') + ' ' + placeholder}
        </Text>
        <Icon
          name={CONSTANTS.iconName}
          style={[
            {
              transform: [{ rotate: option ? '0deg' : '180deg' }]
            },
            styles.iconSize
          ]}></Icon>
      </TouchableOpacity>
      {option && (
        <View style={styles.openDropDown}>
          {data.map((val, i) => (
            <TouchableOpacity
              onPress={() => oneSelectItem(val)}
              style={{
                ...styles.optionName,
                backgroundColor:
                  val.value === selectedValue ? colors.primary : colors.white
              }}
              key={val.value}>
              <Text
                style={{
                  color:
                    val.value === selectedValue
                      ? colors.white
                      : colors['gray-500']
                }}>
                {val.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropDown;
