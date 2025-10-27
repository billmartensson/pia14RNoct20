import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


export function SearchScreen() {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SEARCH</Text>

            <Button
                title='SEARCH DETAIL'
                onPress={() => navigation.navigate('SearchDetail')}
            />
        </View>
    );
}