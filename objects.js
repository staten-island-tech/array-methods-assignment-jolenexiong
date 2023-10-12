const movies = [
    {
        name: "500 Days of Summer",
        actors: ["Joseph Gordon Levitt, Zooey Deschanel"],
        genre: "RomCom",
        rating: "85%",
        oscar: false
    }, {
        name: "Superbad",
        actors: ["Michael Cera, Jonah Hill, Christopher Mintz-Plasse"],
        genre: "Comedy",
        rating: "88%",
        oscar: false
    }, {
        name: "Black Swan",
        actors: ["Natalie Portman, Mila Kunis"],
        genre: "85",
        rating: "85%",
        oscar: true
    }, {
        name: "American Psycho",
        actors: ["Christian Bale, Jared Leto, Williem Dafoe"],
        genre: "Thriller",
        rating: "68%",
        oscar: false
    }
]

movies.forEach((movie)=> console.log(movie.name));


const oscar = movies.filter((movie) => movie.oscar !== true)
console.log(oscar)

movies.forEach((movie)=> console.log(movie.name




