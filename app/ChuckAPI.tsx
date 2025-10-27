import { Chuckjoke } from "./Chuckjoke"


export async function APIRandomJoke() {
    console.log("HÄMTA FRÅN API!!")

    // https://api.chucknorris.io/jokes/random

    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const resultjson: Chuckjoke = await response.json()

    console.log(resultjson.value)

    return resultjson.value
}


