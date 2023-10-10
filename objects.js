const movies = [
    {
        movieName: "500 Days of Summer",
        movieStars: ["Joseph Gordon Levitt, Zooey Deschanel"],
        movieGenre: "RomCom",
        movieRating: "85%",
        oscar: false
    }, {
        movieName: "Superbad",
        movieStars: ["Michael Cera, Jonah Hill, Christopher Mintz-Plasse"],
        movieGenre: "Comedy",
        movieRating: "88%",
        oscar: false
    }, {
        movieName: "Black Swan",
        movieStars: ["Natalie Portman, Mila Kunis"],
        movieGenre: "85",
        movieRating: "85%",
        oscar: true
    }, {
        movieName: "American Psycho",
        movieStars: ["Christian Bale, Jared Leto, Williem Dafoe"],
        movieGenre: "Thriller",
        movieRating: "68%",
        oscar: false
    }
]

movies.forEach((movies)=> console.log(movies.movieName));

