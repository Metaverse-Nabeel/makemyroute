import {
  View,
  Text,
  ImageBackground,
  DropDownPicker,
  TouchableOpacity,
} from "react-native";
// import Picker from "react-native-picker/picker";
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

  const handleSearch = () => {
    // You can navigate to the next screen or perform actions based on user inputs
    // For now, let's log the selected inputs
    console.log("Category:", category);
    console.log("City:", city);
    console.log("Province:", province);
  };

  return (
    <ImageBackground
      source={require("../assets/images/app-start.png")}
      resizeMode="cover"
      className="flex-1"
    >
      <View className="mt-12 p-4">
        <Text className="text-white text-4xl font-semibold text-center">
          Welcome Traveller !
        </Text>
        <Text className="text-white text-center">
          Please provide requested information to get recommendations
        </Text>
        {/* <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {cities.map((c) => (
            <Picker.Item label={c} value={c} />
          ))}
        </Picker> */}
        {/* <DropDownPicker
          items={categories}
          placeholder="Select Category"
          onChangeItem={(item) => setCategory(item.value)}
        />
        <DropDownPicker
          items={cities.map((c) => ({ label: c, value: c }))}
          placeholder="Select City"
          onChangeItem={(item) => setCity(item.value)}
        />
        <DropDownPicker
          items={provinces.map((p) => ({ label: p, value: p }))}
          placeholder="Select Province"
          onChangeItem={(item) => setProvince(item.value)}
        /> */}
        <TouchableOpacity className="flex my-6" onPress={handleSearch}>
          <Text className="py-4 px-6 text-center font-extrabold text-lg rounded-lg text-white bg-[#0ACF83]">
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
