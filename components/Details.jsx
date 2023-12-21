import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, ScrollView, Image, Text, View } from "react-native";
import Recomendations from "./Recomendations";

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
        <View className="p-8 py-0 my-2">
          <Text className="text-2xl font-bold my-2">Similar Destinations</Text>
        </View>
        <View className="mt-2 mb-6">
          <Recomendations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
