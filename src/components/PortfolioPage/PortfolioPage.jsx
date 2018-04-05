import React, { Component } from 'react';
import './PortfolioPage.css';
import v4 from "uuid";
import MovieBody from "./MovieBody/MovieBody";
import MovieList from "./MovieList/MovieList";
import MovieForm from "./MovieForm/MovieForm";
import movies from "./fakeDatabase";

class PortfolioPage extends Component {
  state = {
		movieCards: movies
	}

	addMovieCard = (form) => {

		const singleMovieCard = {
			id: v4(),
			title: form.inputTitleValue,
			text: form.inputDescrValue,
			rating: form.inputRatingValue,
			genre: form.inputGenreValue
		};

		this.setState({
			movieCards: this.state.movieCards.concat(singleMovieCard)
		})
	}

	deleteMovieCard = (id) => {
		console.log(id);

		this.setState({
			movieCards: this.state.movieCards.filter(card => card.id !== id)
		})
  }
  
  render() {
    const { movieCards } = this.state;
    
    return <div className="PortfolioPage">
        <h1 className="PortfolioPage__title">Portfolio</h1>
        <MovieBody>
          <MovieList movieCards={movieCards} onToDoClick={this.deleteMovieCard} />
          <MovieForm title="Title" description="Description" rating="Rating" onFormSubmit={this.addMovieCard} />
        </MovieBody>
      </div>;
  }
}

export default PortfolioPage;
