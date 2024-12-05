import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './radioBoxStyles';

interface RadioBoxProps {
  items: Array<{ key: string; text: string }>;
  onChange: (value: string | null) => void;
  selectedKey: string | null;
}

interface RadioBoxState {
  value: string | null;
}

export default class RadioBox extends Component<RadioBoxProps, RadioBoxState> {
  constructor(props: RadioBoxProps) {
    super(props);
    this.state = {
      value: props.selectedKey ?? null
    };
  }

  handlePress = (key: string) => {
    const { onChange } = this.props;
    const { value } = this.state;

    const newValue = value === key ? null : key;

    this.setState({ value: newValue }, () => {
      onChange(newValue);
    });
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;

    return (
      <View style={styles.container}>
        {items.map((res: { key: string; text: string }) => {
          return (
            <View key={res.key}>
              <Text style={styles.radioText}>{res.text}</Text>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => this.handlePress(res.key)}>
                {value === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
