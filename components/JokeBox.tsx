import { checkSavedJoke, deleteSavedJoke, saveJoke } from "@/api/ChuckAPI";
import { jokebackground, jokebordersaved } from "@/constants/jokecolors";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type JokeBoxProps = {
    joketext: string,
    onDelete?: () => void
}

export function JokeBox({ joketext, onDelete }: JokeBoxProps) {

    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        checksaved()
    }, [joketext])

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
        <View style={[ styles.jokeview, isSaved ? styles.jokeviewsaved : styles.jokeviewnotsaved ]}>
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


const styles = StyleSheet.create({
    jokeview: {
        width: "100%",
        height: 200,
        padding: 10, 
        backgroundColor: jokebackground,
        borderWidth: 10,
        borderRadius: 20,
    },
    jokeviewsaved: {
        borderColor: jokebordersaved,
    },
    jokeviewnotsaved: {
        borderColor: jokebackground,
    },
})