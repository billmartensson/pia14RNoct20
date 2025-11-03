import { Text, TouchableOpacity, View } from "react-native";

type JokeButtonProps = {
    buttontext: string,
    buttonclick: () => void
}

export function JokeButton({ buttontext, buttonclick } : JokeButtonProps) {

    return (
        <TouchableOpacity onPress={() => buttonclick()}>
            <View style={{
                width: 100,
                height: 50,
                backgroundColor: "red"
            }}>
                <Text style={{ color: "white" }}>{ buttontext }</Text>
            </View>
        </TouchableOpacity>
    )
}