const quoteEl = document.querySelector(".quote__text");
const animeEl = document.querySelector(".anime__name");
const reloadBtn = document.getElementById("reload");

async function getQuote() {
    // const res = await fetch("https://animechan.vercel.app/api/random");
    // return res.json();
    return {
        character: "Nobara Kugisaki",
        quote: "I always get stuck with unfortunate circumstances.",
        anime: "Jujutsu Kaisen",
    };
}

async function main() {
    const { character, quote, anime } = await getQuote();
    if (character.split(" ").length > 20 || anime.split(" ").length > 4) {
        main();
    } else {
        quoteEl.innerHTML = `<div><span class="character">${character} 🚀</span></div> <p>${quote}</p>`;
        animeEl.textContent = anime;
    }
}
main();

reloadBtn.addEventListener("click", () => {
    quoteEl.innerHTML = `
    <div class="spinner-border" role="status">
        <span class="sr-only"></span>
    </div>`;

    animeEl.textContent = "loading...";

    setTimeout(main, 500);
});
