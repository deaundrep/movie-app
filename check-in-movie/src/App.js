import React, { Component } from "react";
import axios from "axios";
export class App extends Component {
  state = {
    movieInput: "",
    movieArray: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
  };
  async componentDidMount() {
    let randomTitle = ["batman", "superman", "lego", "alien", "predator"];
    let randomSelectedTitleIndex = Math.floor(
      Math.random() * randomTitle.length
    );
    this.setState({
      isLoading: true,
    });
    try {
      let movieData = await axios.get(
        `http://omdbapi.com/?apikey=85a09168&s=${randomTitle[randomSelectedTitleIndex]}`
      );
      this.setState({
        movieArray: movieData.data.Search,
        movieInput: "",
        isLoading: false,
        isError: false,
        errorMessage: "",
      });
    } catch (e) {}
  }
  handleMovieOnChange = (event) => {
    this.setState({
      movieInput: event.target.value,
      isError: false,
      errorMessage: "",
    });
  };
  handleSearchMovieError = async (data) => {
    
    try {
      if (data.Response === "False") {
        if (data.Error === "Movie not found!") {
          this.setState({
            isError: true,
            errorMessage: "Movie Not found! check your title",
            isLoading: false,
          });
          return null;
        }
        if (data.Error === "Too many results.") {
          this.setState({
            isError: true,
            errorMessage: "Too many results please narrow your search!",
            isLoading: false,
          });
          return null;
        }
      } else {
        return data.Search;
      }
    } catch (e) {}
  };
  handleSearchMovieOnClick = async (event) => {
    
    if (this.state.movieInput.length === 0) {
      this.setState({
        isError: true,
        errorMessage: "Please enter a movie Title!",
      });
      return;
    }
    this.setState({
      isLoading: true,
    });
    try {
      let movieData = await axios.get(
        `http://omdbapi.com/?apikey=6332b1e1&s=${this.state.movieInput}`
      );
      let movieArray = await this.handleSearchMovieError(movieData.data);
      if (movieArray === null) {
        return;
      } else {
        this.setState({
          movieArray: movieArray,
          movieInput: "",
          isLoading: false,
          isError: false,
          errorMessage: "",
        });
      }
      
      
    } catch (e) {
      console.log(e);
    }
  };
  showMovieArrayList = () => {
    return this.state.movieArray.map((item) => {
      return <div key={item.imdbID}>{item.Title}</div>;
    });
  };
  handleSearchOnEnter = async (event) => {
    if (event.key === "Enter") {
      this.handleSearchMovieOnClick();
    }
  };
  render() {
    return (
      <div style={{ marginTop: 50, textAlign: "center" }}>
        <div>
          {this.state.isError && (
            <span style={{ color: "red" }}>{this.state.errorMessage}</span>
          )}
        </div>
        <input
          style={{ width: 450 }}
          name="movieInput"
          onChange={this.handleMovieOnChange}
          onKeyPress={this.handleSearchOnEnter}
          value={this.state.movieInput}
        />
        <br />
        <button
          onClick={this.handleSearchMovieOnClick}
          style={{ margin: "25px 25px" }}
        >
          Search
        </button>
        {this.state.isLoading ? (
          <div>...Loading</div>
        ) : (
          this.showMovieArrayList()
        )}
        
      </div>
    );
  }
}
export default App;