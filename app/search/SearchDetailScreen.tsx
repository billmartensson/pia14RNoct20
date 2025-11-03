import { JokeBox } from "@/components/JokeBox";
import { Chuckjoke } from "@/models/Chuckjoke";
import { View } from "react-native";

type SearchDetailScreenProps = {
    route: {
        params: {
            joke: Chuckjoke
        }
    }
}

export function SearchDetailScreen({ route } : SearchDetailScreenProps) {

    const { joke } = route.params

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <JokeBox joketext={ joke.value } />
        </View>
    );
}