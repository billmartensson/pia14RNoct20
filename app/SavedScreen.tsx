import { loadSavedJokes } from "@/api/ChuckAPI";
import { JokeBox } from "@/components/JokeBox";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";


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