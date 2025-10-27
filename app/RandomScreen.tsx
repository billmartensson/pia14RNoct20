import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { APIRandomJoke } from "./ChuckAPI";


export function RandomScreen() {


    const [joke, setJoke] = useState("NO JOKE")

    useEffect(() => {
        loadrandom()
    },[])

    async function loadrandom() {
        const joke = await APIRandomJoke()
        
        setJoke(joke)
    }
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>RANDOM</Text>

            <Text>{joke}</Text>

            <Button title="API"
                onPress={() => loadrandom()}
            />
        </View>
    );
}