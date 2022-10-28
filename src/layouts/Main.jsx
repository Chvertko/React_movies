import { Component } from "react"
import { MoviesList } from "../components/MoviesList"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

class Main extends Component {
    state = {
        movies : [],
        loading: true,
    }
    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=414ee012&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading:false}) )
    }
    searchMovies=(str,type = 'all') => {
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=414ee012&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(result => result.json())
        .then(data => this.setState({movies: data.Search,loading:false}) )
    }
    render(){
        const {movies,loading} = this.state
        return(
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                    loading ? (<Preloader/>) : (<MoviesList movies={movies}/>)
                }
            </main>
        )
    }
}

export {Main}