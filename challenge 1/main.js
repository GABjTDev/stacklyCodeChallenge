import getQuoteAuthor from './assets/js/getQuoteAuthor.js';
import getQuoteRandom from './assets/js/getQuoteRandom.js';
import loader from './assets/js/load.js';

window.addEventListener('DOMContentLoaded', () => {

    const $random = document.querySelector('.random');

    $random.addEventListener('click', () => {

        const authors = ['bill gates', 'Kevin Smith', 'Jerry Saltz', 'Mark Twain', 'Henry Ford', 'Samuel Ullman', 'Robert Frost', 'Lady Gaga', 'Kurt Vonnegut', 'C. S. Lewis'];

        const random = Math.floor(Math.random() * 10);

        loader();
        getQuoteRandom(authors[random]);

    });


    const $form = document.querySelector('form');
    const $input = document.querySelector('input');

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        loader();
        getQuoteAuthor($input.value);
        $input.value = "";
    })



})