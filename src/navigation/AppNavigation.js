import react from "react";
import {
    View,
    Text,

} from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// the main tabs from the home scrren 
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import VacanciesScreen from "../screens/VacanciesScreen/VacanciesScreen";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import PlanningScreen from "../screens/Planning Screen/PlanningScreen";
import ApplicationScreen from "../screens/ApplicationScreen/ApplicationScreen";

// all the other screens
import LastMinJob from "../screens/LastMinJobScreen/LastMinJob";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator(); 

const AppNavigation = () => {
    return (

        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Vacancies" component={VacanciesScreen} />
            <Tab.Screen name="Application" component={ApplicationScreen} />
            <Tab.Screen name="Planning" component={PlanningScreen} />
            <Tab.Screen name="Chat" component={ChatScreen}/>
            </Tab.Navigator>


        </NavigationContainer>

    )
}
export default AppNavigation; 