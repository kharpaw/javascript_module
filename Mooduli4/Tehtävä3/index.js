const form = document.getElementById("fetch")
const input_element = document.getElementById("query")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const value_from_input = input_element.value
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
        const jsonData = await response.json()
        console.log(jsonData)

        const results = document.getElementById("results")
        results.innerHTML = ""

        for (const tvShow of jsonData) {
            const article = document.createElement("article")

            const h2 = document.createElement("h2")
            h2.textContent = tvShow.show.name
            article.appendChild(h2)

            const link = document.createElement("a")
            link.href = tvShow.show.url
            link.textContent = "More details"
            link.target = "_blank"
            article.appendChild(link)

            const img = document.createElement("img")
            img.src = tvShow.show.image?.medium
            img.alt = tvShow.show.name
            article.appendChild(img)

            const summary = document.createElement("div")
            summary.innerHTML = tvShow.show.summary
            article.appendChild(summary)

            results.appendChild(article)
        }
    } catch (error) {
        console.log(error.message)
    }
})