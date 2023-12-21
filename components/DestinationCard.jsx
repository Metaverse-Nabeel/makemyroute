import React from "react";
import { Text, TouchableOpacity, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DestinationCard = (props) => {
  const navigation = useNavigation();
  const handleCardPress = () => {
    // Navigate to the "Details" screen
    navigation.navigate("Details", {
      cardInfo: {
        title: props.destData.title,
        image: props.destData.image,
        desc: props.destData.desc,
        loc: props.destData.loc,
        // Add other card information as needed
      },
    });
  };
  return (
    <TouchableOpacity className="flex-1" onPress={handleCardPress}>
      <View className="rounded-xl m-6 bg-white">
        <View className="flex justify-center items-center rounded-xl">
          <ImageBackground
            source={{ uri: props.destData.image }}
            resizeMode="cover"
            className="w-full h-[200] rounded-xl"
          />
        </View>
        <Text className="font-bold text-2xl text-center py-2">
          {props.destData.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DestinationCard;
