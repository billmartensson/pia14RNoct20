import { APICategoryJoke } from "@/api/ChuckAPI";
import { JokeBox } from "@/components/JokeBox";
import { JokeButton } from "@/components/JokeButton";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

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

            <JokeButton 
                buttontext="New joke" 
                buttonclick={() => loadrandom()} 
            />

        </View>
    );
}