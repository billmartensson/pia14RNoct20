import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { APISearch } from "./ChuckAPI";
import { Chuckjoke } from "./Chuckjoke";


export function SearchScreen() {

    const navigation = useNavigation()

    const [searchjokes, setSearchjokes] = useState<Chuckjoke[]>()

    const [searchtext, setSearchtext] = useState("")

    async function searchjoke() {
        const jokes = await APISearch(searchtext)

        setSearchjokes(jokes)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: "100%", flexDirection: "row" }}>
                <TextInput
                    style={{ backgroundColor: "lightgray", flex: 1 }}
                    onChangeText={setSearchtext}
                    value={searchtext}
                />

                <Button
                    title="Search"
                    onPress={searchjoke}
                />
            </View>

            { searchjokes == undefined &&
                <Text>Type something to search</Text>
            }

            { searchjokes != undefined && searchjokes.length == 0 &&
                <Text>No jokes found!!</Text>
            }

            <FlatList
                data={searchjokes}
                renderItem={({item, index}) =>
                    <TouchableOpacity
                        style={{ backgroundColor: index%2==0 ? "white" : "lightgray" }}
                        onPress={() => navigation.navigate('SearchDetail', { joke: item })}
                    >
                        <View style={{ marginHorizontal: 50, marginVertical: 10 }}>
                            <Text numberOfLines={1} style={{ }}>{item.value}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />

        </View>
    );
}

