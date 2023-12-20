import { SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

const Details = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-gray-200">
        <Image
          source={require("../assets/images/app-start.png")}
          resizeMode="cover"
          className="flex justify-center items-center"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
