import { Chuckjoke } from "./Chuckjoke"


export async function APIRandomJoke() {
    console.log("HÄMTA RANDOM!!")

    // https://api.chucknorris.io/jokes/random

    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const resultjson: Chuckjoke = await response.json()

    console.log(resultjson.value)

    return resultjson.value
}

export async function APICategories() {
    console.log("HÄMTA KATEGORIER!!")

    // https://api.chucknorris.io/jokes/categories

    const response = await fetch("https://api.chucknorris.io/jokes/categories")

    const resultjson: string[] = await response.json()

    console.log(resultjson)

    return resultjson
}

export async function APICategoryJoke(category: string) {
    console.log("HÄMTA RANDOM!!")

    // https://api.chucknorris.io/jokes/random?category=food

    const response = await fetch("https://api.chucknorris.io/jokes/random?category=" + category)

    const resultjson: Chuckjoke = await response.json()

    console.log(resultjson.value)

    return resultjson.value
}
