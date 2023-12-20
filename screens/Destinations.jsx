import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import DestinationCard from "../components/DestinationCard";

const destinations = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Badshahi Mosque",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Faisal Mosque",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Mahabat Khan Mosque",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Umer Mosque",
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Ali Mosque",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Noor Mosque",
  },
  {
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Haram Mosque",
  },
  {
    id: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Haram Mosque",
  },
  {
    id: 9,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Haram Mosque",
  },
  {
    id: 10,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Haram Mosque",
  },
  {
    id: 11,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Haram Mosque",
  },
  {
    id: 12,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg/1024px-Hunza_Valley%2C_view_from_Eagle%27s_Nest.jpg",
    title: "Haram Mosque",
  },
];

const Destinations = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-gray-200">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destImage={destination.image}
            destTitle={destination.title}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Destinations;
