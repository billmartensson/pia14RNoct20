import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";


export function HomeScreen() {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen är starten</Text>

            <Button 
                title='Go to details'
                onPress={() => navigation.navigate('Details')}
            />

            <Button 
                title='Gå tredje'
                onPress={() => navigation.navigate('Third')}
            />


        </View>
    );
}