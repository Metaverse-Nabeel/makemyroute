import { View, Image, ImageBackground } from "react-native";
import React, { useEffect } from "react";

const Welcome = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the login page after 5 seconds
      navigation.navigate("Login");
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/app-start.png")}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <Image
          source={require("../assets/images/logo-tagline.png")}
          className="h-100"
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
};

export default Welcome;
