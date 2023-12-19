import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DropDown from "../components/DropDown";

const categories = [
  { label: "Religious", value: "Religious" },
  { label: "Mosque", value: "Mosque" },
  { label: "Natural", value: "Natural" },
  { label: "Mountain", value: "Mountain" },
];

const cities = [
  { label: "Islamabad", value: "Islamabad" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Sialkot", value: "Sialkot" },
  { label: "Multan", value: "Multan" },
  { label: "Murree", value: "Murree" },
];

const provinces = [
  { label: "Punjab", value: "Punjab" },
  { label: "Balochistan", value: "Balochistan" },
  { label: "Sindh", value: "Sindh" },
  { label: "KPK", value: "KPK" },
  { label: "ICT", value: "ICT" },
];

const Home = ({ navigation }) => {
  const [category, setCategory] = useState(null);
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);

  const handleDropDownCategoryValueChange = (value) => {
    setCategory(value);
  };
  const handleDropDownCityValueChange = (value) => {
    setCity(value);
  };
  const handleDropDownProvinceValueChange = (value) => {
    setProvince(value);
  };

  const go_to_Home = () => {
    navigation.navigate("Details");
  };

  return (
    <ImageBackground
      source={require("../assets/images/app-start.png")}
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
      <Text className="text-3xl font-bold text-white text-center">
        Welcome Traveller!
      </Text>
      <Text className="text-lg text-white text-center tracking-wide">
        Please provide requested infotmation to get recomendations
      </Text>
      <View className="bg-[#0ACF83]/50 w-[90%] rounded-xl py-4 my-4">
        <Text className="text-lg text-white font-bold pl-5">Category</Text>
        <DropDown
          data={categories}
          onValueChange={handleDropDownCategoryValueChange}
        />
        <Text className="text-lg text-white font-bold pl-5">City</Text>
        <DropDown data={cities} onValueChange={handleDropDownCityValueChange} />
        <Text className="text-lg text-white font-bold pl-5">Province</Text>
        <DropDown
          data={provinces}
          onValueChange={handleDropDownProvinceValueChange}
        />
      </View>
      <TouchableOpacity className="flex mt-12" onPress={go_to_Home}>
        <Text className="py-4 px-20 text-center font-extrabold text-lg rounded-md text-white bg-[#0ACF83]">
          Let's Explore
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;
