const API_URL = "https://rickandmortyapi.com/api/character"

const data_main = document.querySelector(".data_main")
let data = " "
const button_prev = document.querySelector(".button_prev")
const button_next = document.querySelector(".button_next")

const getCharacters = async (url) => {
    const resp = await fetch(url)
    data = await resp.json();

    let characters = []
    data.info.prev == null ? button_prev.style.display = "none" : button_prev.style.display="inline";
    data.info.next == null ? button_next.style.display = "none" :button_next.style.display="inline";

    data.results.forEach((element) => {

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

const render_delete = () => {
    let old_info = document.querySelectorAll(".main_section_data_character")
    old_info.forEach(element => {
        element.remove();
    });
}
button_next.addEventListener("click", next = () => {
    render_delete()
    getCharacters(data.info.next)
})
button_prev.addEventListener("click", prev = () => {
    render_delete()
    getCharacters(data.info.prev)
})