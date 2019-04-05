/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import List from './src/components/List//List';
import ListInput from './src/components/ListInput/ListInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
  };

  placeSubmitHandler = value => {
    this.setState(prevState => {
      return { places: prevState.places.concat(value) };
    });
  };

  placeDeleteHandler = index => {
    this.setState(prevState => {
      return { places: prevState.places.filter((place, i) => i !== index) };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ListInput onSubmit={this.placeSubmitHandler} />
        <List
          items={this.state.places}
          onItemDelete={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  listContainer: {
    width: '100%',
  },
});
