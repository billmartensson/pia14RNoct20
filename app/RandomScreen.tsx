import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { APIRandomJoke } from "./ChuckAPI";
import { JokeBox } from "./JokeBox";


export function RandomScreen() {


    const [joke, setJoke] = useState("NO JOKE")

    useEffect(() => {
        loadrandom()
    }, [])

    async function loadrandom() {
        const joke = await APIRandomJoke()

        setJoke(joke)
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <JokeBox joketext={joke} />

            <Button title="New joke"
                onPress={() => loadrandom()}
            />
        </View>
    );
}