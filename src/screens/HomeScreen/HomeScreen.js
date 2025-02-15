import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>"Homescreen text, this is the shomescreen"</Text>
      <Button
        title="Go to Last Minute Jobs"
        onPress={() => navigation.navigate("LastMinJob")}
      />
    </View>
  );
};

export default HomeScreen;