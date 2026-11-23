const form = document.getElementById("fetch")
const input_element = document.getElementById("query")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const value_from_input = input_element.value
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
        const jsonData = await response.json()
        for (const item of jsonData) {
            console.log(item.show.name)
        }
    } catch (error) {
        console.log(error.message)
    }
})
