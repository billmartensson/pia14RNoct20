import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { APICategoryJoke } from "./ChuckAPI";
import { JokeBox } from "./JokeBox";

type CategoryDetailScreenProps = {
    route: {
        params: {
            category: string
        }
    }
}

export function CategoryDetailScreen({ route } : CategoryDetailScreenProps) {

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

            <Text>{category}</Text>

            <JokeBox joketext={joke} />

            <Button title="API"
                onPress={() => loadrandom()}
            />
        </View>
    );
}