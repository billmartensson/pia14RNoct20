import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { APICategories } from "./ChuckAPI";


export function CategoriesScreen() {

    const navigation = useNavigation()

    const [categories, setCategories] = useState(["A", "B", "C"])

    useEffect(() => {
        loadCategories()
    }, [])

    async function loadCategories() {
        const loadedcategories = await APICategories()

        setCategories(loadedcategories)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>CATEGORIES</Text>

            <Button
                title='RANDOM'
                onPress={() => navigation.navigate('Random')}
            />

            <Button
                title='SEARCH'
                onPress={() => navigation.navigate('Search')}
            />

            <Button
                title='SAVED'
                onPress={() => navigation.navigate('Saved')}
            />


            <FlatList
                data={categories}
                renderItem={(item) =>
                    <TouchableOpacity onPress={() => navigation.navigate('CategoryDetail', { category: item.item })}>
                        <Text>{item.item}</Text>
                    </TouchableOpacity>
                }
            />



        </View>
    );
}