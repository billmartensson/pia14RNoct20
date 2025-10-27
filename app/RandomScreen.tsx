import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Chuckjoke } from "./Chuckjoke";


export function RandomScreen() {


    const [joke, setJoke] = useState("NO JOKE")

    async function getapi() {
        console.log("HÄMTA FRÅN API!!")

        // https://api.chucknorris.io/jokes/random

        const response = await fetch("https://api.chucknorris.io/jokes/random")

        const resultjson: Chuckjoke = await response.json()

        console.log(resultjson.value)

        setJoke(resultjson.value)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>RANDOM</Text>

            <Text>{joke}</Text>

            <Button title="API"
                onPress={() => getapi()}
            />
        </View>
    );
}