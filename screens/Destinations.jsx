import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../assets/images/dummyData/Data";

const Destinations = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-gray-200">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destData={destination} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Destinations;
