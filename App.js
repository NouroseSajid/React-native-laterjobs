import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import AppNavigator from "../Nowjobs/src/navigation/AppNavigation"

const App = () => {
  return (

      <AppNavigator></AppNavigator>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
