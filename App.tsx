import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { DetailsScreen } from './app/DetailsScreen';
import { HomeScreen } from './app/HomeScreen';
import { ThirdScreen } from './app/ThirdScreen';


const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'Hemmaskärm',
            },
        },
        Details: DetailsScreen,
        Third: ThirdScreen
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return (
        <Navigation />
    );
}