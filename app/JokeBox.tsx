import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { checkSavedJoke, saveJoke } from "./ChuckAPI";

type JokeBoxProps = {
    joketext: string
}

export function JokeBox({ joketext }: JokeBoxProps) {

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        checksaved()
    }, [])

    async function checksaved() {
        const saved = await checkSavedJoke(joketext)
        setIsSaved(saved)
    }

    return (
        <View style={{ margin: 30, padding: 10, backgroundColor: "yellow" }}>
            <Text>{joketext}</Text>

            {isSaved == false &&
                <Button title="SAVE" onPress={() => {
                    saveJoke(joketext)
                }} />
            }
            {isSaved == true &&
                <Button title="DELETE" onPress={() => {
                    
                }} />
            }

        </View>
    )
}