import React from "react";
import { Text, TouchableOpacity, ImageBackground, View } from "react-native";

const DestinationCard = ({ destImage, destTitle }) => {
  const handleClick = () => {
    
  }
  return (
    <TouchableOpacity className="flex-1" onPress={handleClick}>
      <View className="rounded-xl m-6 bg-white">
        <View className="flex justify-center items-center rounded-xl">
          <ImageBackground
            source={{ uri: destImage }}
            resizeMode="cover"
            className="w-full h-[200] rounded-xl"
          />
        </View>
        <Text className="font-bold text-2xl text-center py-2">{destTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DestinationCard;
