import { View, Text } from "react-native";
import React from "react";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    id: 1,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
  {
    id: 2,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
  {
    id: 3,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
  {
    id: 4,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
  {
    id: 5,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
  {
    id: 6,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
  {
    id: 7,
    image: "../assets/images/app-start.png",
    title: "Faisal Mosque",
  },
];

const Destinations = () => {
  return (
    <View className="flex flex-col justify-center items-center">
      <DestinationCard />
    </View>
  );
};

export default Destinations;
