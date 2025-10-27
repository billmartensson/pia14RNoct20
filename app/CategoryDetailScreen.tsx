import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { APICategoryJoke } from "./ChuckAPI";


export function CategoryDetailScreen({ route }) {

    const { category } = route.params;

    const [joke, setJoke] = useState("NO JOKE")

    useEffect(() => {
        loadrandom()
    }, [])

    async function loadrandom() {
        const joke = await APICategoryJoke(category)

        setJoke(joke)
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CATEGORY</Text>

            <Text>{category}</Text>

            <Text>{joke}</Text>

            <Button title="API"
                onPress={() => loadrandom()}
            />
        </View>
    );
}