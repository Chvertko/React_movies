import { Component } from "react"


class Search extends Component{
    
    state = {
        search: '',   
        type: "all",    
    }
    handleKey =(ev) =>{
        if(ev.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type)
            
        }
        
    }   
    handleFiltred = (event) => {
        this.setState( () => ({type: event.target.dataset.type}) , () => {
            this.props.searchMovies(this.state.search, this.state.type)
        } );
      };
    render(){
        
        return(
            <>
                <div className="row">
                   
                        <div className="input-field">
                            <input 
                            className="validate"
                            placeholder='Search' 
                            type="search"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                            />
                            <button className="btn search-btn"  onClick={() => this.props.searchMovies(this.state.search,this.state.type)}>Search</button>
                        </div>
                </div>
                <label>
          <input
            className="with-gap"
            name="all"
            type="radio"
            data-type="all"
            checked={this.state.type === 'all'}
            onChange={this.handleFiltred}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="movie"
            type="radio"
            data-type="movie"
            checked={this.state.type === 'movie'}
            onChange={this.handleFiltred}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="series"
            type="radio"
            data-type="series"
            onChange={this.handleFiltred}
            checked={this.state.type === 'series'}
          />
          <span>Series only</span>
        </label>
            </>
        )
    }
}

export {Search}