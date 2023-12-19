import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

const DestinationCard = () => {
  return (
    <View className="">
      <TouchableOpacity className="w-[80%] h-[30%] bg-white rounded-lg">
        <Image
          source={require("../assets/images/app-start.png")}
          resizeMode="cover"
          className="flex-1 flex-col justify-center items-center"
        />
        <Text className="bg-white py-2 font-bold">Faisal Mosque</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DestinationCard;
