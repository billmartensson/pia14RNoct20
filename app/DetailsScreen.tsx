import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


export function DetailsScreen({ route }) {

    const navigation = useNavigation()

    const { fruit } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detta är Details</Text>

            <Text>Frukten är {fruit}</Text>

            <Button
                title="Hem"
                onPress={() => navigation.navigate("Home")}
            />

            <Button
                title="Tredje"
                onPress={() => navigation.navigate("Third")}
            />
        </View>
    );
}