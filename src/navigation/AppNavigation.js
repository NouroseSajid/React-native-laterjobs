import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Main tabs
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import VacanciesScreen from "../screens/VacanciesScreen/VacanciesScreen";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import PlanningScreen from "../screens/Planning Screen/PlanningScreen";
import ApplicationScreen from "../screens/ApplicationScreen/ApplicationScreen";

// Other screens
import LastMinJob from "../screens/LastMinJobScreen/LastMinJob";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Create a stack navigator for screens that need to be nested within tabs
const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          animationEnabled: true,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 300 } },
            close: { animation: 'timing', config: { duration: 300 } }
          },
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="LastMinJob" 
          component={LastMinJob}
          options={{ 
            gestureDirection: 'horizontal',
            cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            })
          }}
        />
      </Stack.Navigator>
    );
  };

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator lazy>
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Vacancies" component={VacanciesScreen} />
        <Tab.Screen name="Application" component={ApplicationScreen} />
        <Tab.Screen name="Planning" component={PlanningScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;