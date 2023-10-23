const movies = [
    {
        name: "500 Days of Summer",
        actors: ["Joseph Gordon Levitt", "Zooey Deschanel"],
        genre: "RomCom",
        rating: "85%",
        oscar: false
    }, {
        name: "Superbad",
        actors: ["Michael Cera", "Jonah Hill", "Christopher Mintz-Plasse"],
        genre: "Comedy",
        rating: "88%",
        oscar: false
    }, {
        movieName: "Black Swan",
        movieStars: ["Natalie Portman, Mila Kunis"],
        movieGenre: "Psychological Thriller",
        movieRating: "85%",
        oscar: true
    }, {
        name: "American Psycho",
        actors: ["Christian Bale", "Jared Leto", "Williem Dafoe"],
        genre: "Thriller",
        rating: "68%",
        oscar: false
    }
]

movies.forEach((movie)=> console.log(movie.name));

movies.forEach((movie)=> movie.actors.forEach((actors) => console.log(actors)));


const oscar = movies.filter((movie) => movie.oscar !== true)
console.log(oscar)



