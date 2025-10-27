import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { APISearch } from "./ChuckAPI";
import { Chuckjoke } from "./Chuckjoke";


export function SearchScreen() {

    const navigation = useNavigation()

    const [searchjokes, setSearchjokes] = useState<Chuckjoke[]>([])

    const [searchtext, setSearchtext] = useState("")

    async function searchjoke() {
        const jokes = await APISearch(searchtext)

        setSearchjokes(jokes)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SEARCH</Text>

            <TextInput
                style={{ backgroundColor: "lightgray", width: "100%" }}
                onChangeText={setSearchtext}
                value={searchtext}
            />

            <Button
                title="Search"
                onPress={searchjoke}
            />

            <FlatList
                data={searchjokes}
                renderItem={(item) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchDetail', { joke: item.item })}
                    >
                        <Text>{item.item.value}</Text>
                    </TouchableOpacity>
                }
            />

        </View>
    );
}