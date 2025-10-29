import { View } from "react-native";
import { Chuckjoke } from "./Chuckjoke";
import { JokeBox } from "./JokeBox";

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