import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import auth from "@react-native-firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      //   await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
      ToastAndroid.show("Login successful!", ToastAndroid.LONG);
    } catch (error) {
      ToastAndroid.show(`Login Failed! ${error.message}`, ToastAndroid.LONG);
    }
  };

  const handleSignup = async () => {
    navigation.navigate("Signup");
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/login-logout.png")}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <View className="flex-1 mt-40 w-[90%] h-[80%] p-4">
          <Text className="text-white py-2 font-semibold">Email</Text>
          <TextInput
            className="py-2 px-4 rounded-lg text-white bg-gray-400"
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
          />
          <Text className="text-white py-2 font-semibold">Password</Text>
          <TextInput
            className="py-2 px-4 rounded-lg text-white bg-gray-400"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity className="flex my-6" onPress={handleLogin}>
            <Text className="py-4 px-6 text-center font-extrabold text-lg rounded-lg text-white bg-[#0ACF83]">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-2 w-[85%] h-[20%] justify-end items-center mb-2">
          <TouchableOpacity className="" onPress={handleSignup}>
            <Text className="flex text-white">
              Don’t have an account?{" "}
              <Text className="text-[#0ACF83] text-lg font-extrabold px-4">
                Signup
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
