import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


export function CategoriesScreen() {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CATEGORIES</Text>

            <Button
                title='CATEGORY DETAIL'
                onPress={() => navigation.navigate('CategoryDetail')}
            />

            <Button
                title='RANDOM'
                onPress={() => navigation.navigate('Random')}
            />

            <Button
                title='SEARCH'
                onPress={() => navigation.navigate('Search')}
            />

            <Button
                title='SAVED'
                onPress={() => navigation.navigate('Saved')}
            />


        </View>
    );
}