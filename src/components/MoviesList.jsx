import { MovieCard } from "./MovieCard"
function MoviesList (props) {
    const {movies = []} = props
    return(
        <div className="movies">
            { movies.length ? movies.map(movie => {
                return <MovieCard key={movie.imdbID} {...movie}/>
            }) : <h2>404 Nothing is founded</h2> 
            }
        </div>
    )
}
export {MoviesList}