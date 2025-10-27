import { Chuckjoke, ChuckSearchResult } from "./Chuckjoke"


export async function APIRandomJoke() {
    console.log("HÄMTA RANDOM!!")

    // https://api.chucknorris.io/jokes/random

    const response = await fetch("https://api.chucknorris.io/jokes/random")

    const resultjson: Chuckjoke = await response.json()

    console.log(resultjson.value)

    return resultjson.value
}

export async function APICategories() {

    try {
        console.log("HÄMTA KATEGORIER!!")

        // https://api.chucknorris.io/jokes/categories

        const response = await fetch("https://api.chucknorris.io/jokes/categories")

        console.log("HÄMTA KATEGORIER KLAR!!")

        if (response.ok == false) {
            return null
        }

        const resultjson: string[] = await response.json()

        console.log("HÄMTA KATEGORIER JSON KLAR!!")

        console.log(resultjson)

        return resultjson
    } catch(error) {
        console.log(error)
        return null
    }


}

export async function APICategoryJoke(category: string) {
    console.log("HÄMTA RANDOM!!")

    // https://api.chucknorris.io/jokes/random?category=food

    const response = await fetch("https://api.chucknorris.io/jokes/random?category=" + category)

    const resultjson: Chuckjoke = await response.json()

    console.log(resultjson.value)

    return resultjson.value
}

export async function APISearch(searchtext: string) {
    console.log("SÖK!!")

    // https://api.chucknorris.io/jokes/search?query=banana

    const response = await fetch("https://api.chucknorris.io/jokes/search?query=" + searchtext)

    const resultjson: ChuckSearchResult = await response.json()

    console.log(resultjson.result)

    return resultjson.result
}
