import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


export function DetailsScreen() {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detta är Details</Text>

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