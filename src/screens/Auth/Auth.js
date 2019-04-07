import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: '30%',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },
  textInput: {
    height: 40,
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
});

const Auth = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name: 'Patrick' });
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Hello!</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button color="tomato" title="Login" onPress={handleLogin} />
    </View>
  );
};

Auth.navigationOptions = {
  title: 'Login',
};

export default Auth;
