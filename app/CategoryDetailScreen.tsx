import { Text, View } from "react-native";


export function CategoryDetailScreen({ route }) {

    const { category } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CATEGORY</Text>

            <Text>{category}</Text>
        </View>
    );
}