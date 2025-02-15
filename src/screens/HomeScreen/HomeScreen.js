import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>"Homescreen text, this is the shomescreen"</Text>
      <Button
        title="Go to Last Minute Jobs"
        onPress={() => navigation.navigate("LastMinJob")}
      />
    </View>
  );
};

export default HomeScreen;