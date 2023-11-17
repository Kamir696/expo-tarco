import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    Alert.alert('Welcome', `Hey ${username}`);
  };

  return (
    <View>
      <Text>Bienvenido</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sing in" onPress={onLogin} />
      <Button title="Sing up" onPress={() => { /* Aquí va la lógica de redirección al registro */ }} />
      <Text>Versión de la aplicación: 1.0.0</Text>
    </View>
  );
};

export default LoginScreen;