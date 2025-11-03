import { APIRandomJoke } from "@/api/ChuckAPI";
import { JokeBox } from "@/components/JokeBox";
import { JokeButton } from "@/components/JokeButton";
import { useEffect, useState } from "react";
import { View } from "react-native";


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

            <JokeButton 
                buttontext="New joke" 
                buttonclick={() => loadrandom()} 
            />

        </View>
    );
}