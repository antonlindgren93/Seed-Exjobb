import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import HomePage from '../Screens/HomePage';
import RatingPage from '../Screens/RatingPage';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
    <Tab.Navigator >
        <Tab.Screen name="Profile" component={HomePage} />
        <Tab.Screen name="Rating" component={RatingPage}/>
    </Tab.Navigator>
    )}


    export default BottomTabNavigator