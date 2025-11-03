import { checkSavedJoke, deleteSavedJoke, saveJoke } from "@/api/ChuckAPI";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

type JokeBoxProps = {
    joketext: string,
    onDelete?: () => void
}

export function JokeBox({ joketext, onDelete }: JokeBoxProps) {

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        checksaved()
    }, [])

    async function checksaved() {
        const saved = await checkSavedJoke(joketext)

        setIsSaved(saved)
    }

    async function deleteJoke() {
        await deleteSavedJoke(joketext)
        if(onDelete != undefined) {
            onDelete()
        }
    }

    return (
        <View style={{ margin: 30, padding: 10, backgroundColor: isSaved ? "cyan" : "yellow" }}>
            <Text>{joketext}</Text>

            {isSaved == false &&
                <Button title="SAVE" onPress={() => {
                    saveJoke(joketext)
                    setIsSaved(true)
                }} />
            }
            {isSaved == true &&
                <Button title="DELETE" onPress={() => {
                    deleteJoke()
                    setIsSaved(false)
                }} />
            }

        </View>
    )
}