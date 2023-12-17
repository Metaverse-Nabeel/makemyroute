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

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    navigation.navigate("Login");
  };

  const handleSignup = async () => {
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/login-logout.png")}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <Text className="mt-12 text-white text-center text-3xl font-semibold">
          Signup
        </Text>
        <View className="flex-1 w-[90%] h-[80%] p-4">
          <Text className="text-white py-2 font-semibold">User Name</Text>
          <TextInput
            className="py-2 px-4 rounded-lg text-white bg-gray-400"
            placeholder="User Name"
            value={username}
            onChangeText={setUsername}
          />
          <Text className="text-white py-2 font-semibold">E-mail</Text>
          <TextInput
            className="py-2 px-4 rounded-lg text-white bg-gray-400"
            placeholder="E-mail Address"
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
          <Text className="text-white py-2 font-semibold">
            Confirm Password
          </Text>
          <TextInput
            className="py-2 px-4 rounded-lg text-white bg-gray-400"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity className="flex my-6" onPress={handleSignup}>
            <Text className="py-4 px-6 text-center font-extrabold text-lg rounded-lg text-white bg-[#0ACF83]">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-2 w-[85%] h-[20%] justify-end items-center mb-2">
          <TouchableOpacity className="" onPress={handleLogin}>
            <Text className="flex text-white">
              Already have an account?{" "}
              <Text className="text-[#0ACF83] text-lg font-extrabold px-4">
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Signup;
