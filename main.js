const API_URL = "https://rickandmortyapi.com/api/character"

const data_main = document.querySelector("#data_main")


const getCharacters = async (url) => {

    const resp = await fetch(url)
    const data = await resp.json();

    console.log(data.results)
    let characters = []
    data.results.map((element) => {

        const main_article = document.createElement("article")
        main_article.classList.add("main_section_data_character")
        const first_section = document.createElement("section")
        first_section.classList.add("section_photo")
        const img = document.createElement("img")
        img.src = element.image;

        const span = document.createElement("span")
        element.status === "Alive" ?
            span.classList.add("span_alive") : element.status === "Dead" ? span.classList.add("span_dead") : span.classList.add("span_unknown")

        span.textContent = element.status

        first_section.append(img, span)


        const second_section = document.createElement("section")
        second_section.classList.add("section_info")
        const h4 = document.createElement("h4")
        h4.textContent = element.name
        const h3 = document.createElement("h3")
        h3.textContent = element.origin.name
        const h5 = document.createElement("h5")
        h5.textContent = element.species
        second_section.append(h4, h3, h5)

        main_article.append(first_section, second_section)

        characters.push(main_article)
    });

    data_main.append(...characters)
}

getCharacters(API_URL)