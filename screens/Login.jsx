import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlerlogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={handlerlogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
