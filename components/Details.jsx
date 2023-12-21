import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView, Image, Text, View } from "react-native";

const Details = () => {
  const route = useRoute();
  const { cardInfo } = route.params;
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-gray-200 h-[50%]">
        <View className="h-[294] w-[413]">
          <Image
            source={{ uri: cardInfo.image }}
            resizeMode="cover"
            className="h-full w-full"
          />
        </View>
        <View className="p-8">
          <Text className="text-3xl font-bold">{cardInfo.title}</Text>
          <Text className="my-2 text-justify">{cardInfo.desc}</Text>
          <Text className="text-xl font-bold">Location</Text>
          <Text className="my-2 text-justify">{cardInfo.loc}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
