import React, { useState } from "react";
import { authReciever } from "../firebase";
import {signInWithEmailAndPassword} from "@react-native-firebase/auth"
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
  const [error, setError]=useState("");

  

  const isEmailValid = (email) => 
  {
    const emailRegX = /\S+@\S+\.\S+/;
    return emailRegX.test(email)
  }


  const handleLogin = async () => {
    // try {
    //   //   await auth().signInWithEmailAndPassword(email, password);
      if (email === "" || password === "" )
      {
        // setError("Please Enter Required Information!");
        ToastAndroid.show("Please Enter Required Information!", ToastAndroid.LONG);
      }
      else
      {
        if (!isEmailValid(email))
        {
          // setError ("Invalid Email Format !");
          ToastAndroid.show("Invalid Email Format !", ToastAndroid.LONG);
        }

        try {
          const userCredentialIdentifier = await signInWithEmailAndPassword(authReciever,email,password)
          ToastAndroid.show("Login successful!", ToastAndroid.LONG);
          navigation.navigate("Home");
        } catch (error) { 
          // setError ("Invalid Credentials !"); 
          ToastAndroid.show("Invalid Credentials !", ToastAndroid.LONG);
        }
      }
      
    // } catch (error) {
    //   ToastAndroid.show(`Login Failed! ${error.message}`, ToastAndroid.LONG);
    // }
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
        <Text className="mt-40 text-white text-center text-3xl font-semibold">
          Login
        </Text>
        <View className="flex-1 w-[90%] h-[80%] p-4">
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
