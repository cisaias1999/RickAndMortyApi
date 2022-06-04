const API_URL = "https://rickandmortyapi.com/api/character"

const datainfo = document.querySelector("#data_main")


const getCharacters = async (url) => {

    const resp = await fetch(url)
    const data = await resp.json();

    console.log(data.results)

    data.results.map((element) => {

        let content = `
<article class="main_section_data">
            <section class="section_photo">
        <img src="${element.image}" alt="Imagen de personaje">
        <span> ${element.status}</span>
    </section>
    <section class="section_info">
        <h4>${element.name}</h4>
        <h3>${element.origin.name}</h5>
        <h5>${element.species}</h5>
    </section>
    </article>
`
        datainfo.innerHTML += content;
    });


}

getCharacters(API_URL)