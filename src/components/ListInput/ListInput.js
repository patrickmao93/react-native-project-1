import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const ListInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = val => {
    setInputValue(val);
  };

  const onButtonPress = () => {
    if (!inputValue.trim()) {
      return;
    }
    onSubmit(inputValue);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An awesome place"
        value={inputValue}
        onChangeText={onInputChange}
      />
      <Button title="Add" style={styles.placeButton} onPress={onButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

export default ListInput;
