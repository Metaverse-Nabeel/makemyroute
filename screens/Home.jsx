import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

import React, { useState } from "react";

const Home = ({ navigation }) => {
  const [category, setCategory] = useState(null);
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);

  const categories = [
    { label: "Religious", value: "Religious" },
    { label: "Mosque", value: "Mosque" },
    { label: "Natural", value: "Natural" },
    { label: "Mountain", value: "Mountain" },
  ];

  const cities = ["Islamabad", "Hyderabad", "Sialkot", "Multan", "Murree"];

  const provinces = [
    "Punjab",
    "Balochistan",
    "Sindh",
    "KPK",
    "Islamabad Capital Territory",
  ];

  const go_to_Home = () => {
    navigation.navigate("Details");
  };

  return (
    <ImageBackground
      source={require("../assets/images/app-start.png")}
      resizeMode="cover"
      className="flex-1 justify-center"
    >
      <Text className="text-3xl font-bold text-white text-center">
        Welcome Traveller!
      </Text>
      <Text className="text-lg text-white text-center tracking-wide">
        Please provide requested infotmation to get recomendations
      </Text>
      <View className="bg-[#0ACF83]/50">
        {/* Input 1 */}
        <Text className="text-lg text-white font-bold">Category</Text>
        {/* <TextInput
          className="bg-white rounded-lg h-[55px] -mb-2 px-3 text-black"
          placeholder="Select"
          value={category}
          onChangeText={(text) => setCategory(text)}
        /> */}
        <RNPickerSelect
          className="bg-white rounded-lg h-[40px] px-3 text-white
          "
          // className="h-[40px] rounded-xl px-3"
          placeholder="Select"
          value={category}
          items={categories}
          onValueChange={(value) => setInput1Value(value)}
        />
        {/* <Text className="text-lg mb-1 mr-[220px] text-white font-bold">
          City
        </Text>
        <TextInput
          className="bg-white rounded-lg h-[55px] -mb-2 px-3 text-black"
          placeholder="Select"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <RNPickerSelect
          className="h-[40px] rounded-xl px-3"
          value={city}
          items={cities}
          onValueChange={(value) => setCity(value)}
        />
        <Text className="text-lg mb-1 mr-[220px] text-white font-bold">
          Province
        </Text>
        <TextInput
          className="bg-white rounded-lg h-[55px] -mb-2 px-3 text-black"
          placeholder="Select"
          value={province}
          onChangeText={(text) => setProvince(text)}
        />
        <RNPickerSelect
          className="h-[40px] rounded-xl px-3"
          value={province}
          items={provinces}
          onValueChange={(value) => setProvince(value)}
        /> */}
      </View>
      <TouchableOpacity className="flex" onPress={go_to_Home}>
        <Text className="py-4 px-6 text-center font-extrabold text-lg rounded-lg text-white bg-[#0ACF83]">
          Let's Explore
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;
