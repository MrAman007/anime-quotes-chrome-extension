const quoteEl = document.querySelector(".quote__text");
const animeEl = document.querySelector(".anime__text");

async function getQuote() {
    const res = await fetch("https://animechan.vercel.app/api/random");
    return res.json();
}

async function main() {
    const { character, quote, anime } = await getQuote();
    if (character.split(" ").length > 20 || anime.split(" ").length > 4) {
        main();
    } else {
        quoteEl.innerHTML = `<span class="character">${character}</span>: <br>${quote}`;
        animeEl.innerHTML = `<strong>Anime</strong>: ${anime}`;
    }
}
main();

document.querySelector(".refresh").addEventListener("click", () => {
    main();
});
