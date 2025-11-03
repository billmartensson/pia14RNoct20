import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { CategoriesScreen } from './app/CategoriesScreen';
import { CategoryDetailScreen } from './app/CategoryDetailScreen';
import { DetailsScreen } from './app/DetailsScreen';
import { HomeScreen } from './app/HomeScreen';
import { RandomScreen } from './app/RandomScreen';
import { SavedScreen } from './app/SavedScreen';
import { ThirdScreen } from './app/ThirdScreen';
import { SearchDetailScreen } from './app/search/SearchDetailScreen';
import { SearchScreen } from './app/search/SearchScreen';


const RootStack = createNativeStackNavigator({
    initialRouteName: 'Categories',
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'Hemmaskärm',
                headerStyle: {
                    backgroundColor: '#ffff00',
                },
            },
        },
        Details: DetailsScreen,
        Third: ThirdScreen,
        Categories: CategoriesScreen,
        CategoryDetail: CategoryDetailScreen,
        Random: RandomScreen,
        Search: SearchScreen,
        SearchDetail: SearchDetailScreen,
        Saved: SavedScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return (
        <Navigation />
    );
}