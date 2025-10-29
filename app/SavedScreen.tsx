import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { loadSavedJokes } from "./ChuckAPI";
import { JokeBox } from "./JokeBox";


export function SavedScreen() {

    const [jokes, setJokes] = useState<string[]>(["A", "B", "C"])

    useEffect(() => {
        loadjokes()
    }, [])

    async function loadjokes() {
        const loadedjokes = await loadSavedJokes()

        setJokes(loadedjokes)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <FlatList
                style={{ width: "100%" }}
                data={jokes}
                renderItem={(item) =>
                    <JokeBox 
                        joketext={item.item} 
                        onDelete={() => {
                            loadjokes()
                        }}
                    />
                }
                keyExtractor={(item) => item}
            />
        </View>
    );
}