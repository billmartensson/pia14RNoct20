import { Text, View } from "react-native";


export function SearchDetailScreen({ route }) {

    const { joke } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SEARCH DETAIL</Text>

            <Text>{ joke.value }</Text>
        </View>
    );
}