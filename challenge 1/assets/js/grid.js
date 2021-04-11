import loader from "./load.js";

export default function grid(data){

    const $author = document.querySelector('h1');
    $author.textContent = data[0].quoteAuthor;

    const $gridContainer = document.querySelector('.grid-container');

    while($gridContainer.firstElementChild){
        $gridContainer.removeChild($gridContainer.firstElementChild);
    }

    const filter = data.filter(m => m.quoteAuthor === data[0].quoteAuthor)

    filter.forEach(author => {
        $gridContainer.innerHTML += `
            <div class="phrase">
                <h2>${author.quoteGenre}</h2>
                <p>
                    ${author.quoteText}
                </p>
            </div>
        `
    });

    loader();
}