import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { destinations } from "../assets/images/dummyData/Data";
import { useNavigation } from "@react-navigation/native";

const Recomendations = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="mr-4 w-[170px] h-[130px] rounded-xl bg-white justify-center items-center"
      onPress={() => handlePress(item)}
    >
      <Image
        source={{ uri: item.image }}
        className="w-[170px] h-[105px] rounded-t-xl"
      />
      <Text className="font-bold text-center">{item.title}</Text>
    </TouchableOpacity>
  );

  const handlePress = (item) => {
    // Handle item press, you can navigate, show details, etc.
    navigation.navigate("Details", {
      cardInfo: {
        title: item.title,
        image: item.image,
        desc: item.desc,
        loc: item.loc,
        // Add other card information as needed
      },
    });
  };

  return (
    <View className="">
      <FlatList
        data={destinations}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Recomendations;
