import React from 'react';
import { View, Text, Button } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View>
      <Text>Main screen</Text>
      <Button
        title="Go to Main Screen again"
        onPress={() => navigation.push('Main')}
      />
      <Button title="Go back!" onPress={() => navigation.goBack()} />
      <Button title="Pop to top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

Main.navigationOptions = ({ navigation }) => {
  return {
    title: `Hi, ${navigation.getParam('name')}!`,
  };
};

export default Main;
