import loader from "./load.js";

export default function showError(){

    const $author = document.querySelector('h1');
    $author.textContent = "Author Not Found";

    const $gridContainer = document.querySelector('.grid-container');

    while($gridContainer.firstElementChild){
        $gridContainer.removeChild($gridContainer.firstElementChild);
    }

    loader();
}