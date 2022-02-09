// const getAllHeroes = async = () => {
//     let offset = 0;
//     const heroes = []
//     for(offset; offset < 800; offset += 100) {
//         fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1000&apikey=a7504bd82b277f21fdc99afa18c260fe&hash=eee6c63d6b79cb2b8206b0cfc4dab17f&limit=100&offset=${offset}`)
//             .then(res => {
//                 return res.json()
//             })
//             .then(json => {
//                 heroes.push(json.data.results)
//                 console.log(heroes);
//             })
//     }
//     return heroes;
// }

// const heroes = getAllHeroes()

const searchHeroes = (e) => {
    console.log(e.target.value);
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${e.target.value}&ts=1000&apikey=a7504bd82b277f21fdc99afa18c260fe&hash=eee6c63d6b79cb2b8206b0cfc4dab17f`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json.data.results)
        })
}
const search = document.querySelector('.search');
search.addEventListener('change', searchHeroes);
