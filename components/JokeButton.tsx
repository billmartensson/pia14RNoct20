import { Pressable, Text, View } from "react-native";

type JokeButtonProps = {
    buttontext: string,
    buttonclick: () => void
}

export function JokeButton({ buttontext, buttonclick }: JokeButtonProps) {

    return (
        <Pressable onPress={() => buttonclick()}>

            {({ pressed }) => (
                <View style={{
                    minWidth: 100,
                    height: 50,
                    backgroundColor: "red",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    paddingHorizontal: 10,
                    opacity: pressed ? 0.5 : 1.0,
                    borderWidth: 5,
                    borderColor: pressed ? "black" : "red"
                }}>
                    <Text style={{ color: "white" }}>{buttontext}</Text>
                </View>
            )}

        </Pressable>
    )
}