import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';


export default class MovieCard extends React.Component {
	static PropTypes = {
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		genre: PropTypes.string.isRequired,
		onClick: PropTypes.func
	};

	static defaultProps = {
		onClick: () => {}
	};

	render() {
		const { title, text, rating, genre, onClick } = this.props;

		return (
			<div className="MovieCard">
				<button className="MovieCard__btn MovieCard__btn--del" onClick={onClick}>Delete</button>
				<div className="MovieInfo__info">
					<h2 className="MovieInfo__title">{title}</h2>
					<p className="MovieInfo__descr">{text}</p>
					<p className="MovieInfo__rating">Rating: {rating}/10</p>
				</div>
				<ul className="ChipsList">
					{genre.map(genre=><li className="ChipsList__item">{genre}</li>)}
				</ul>
			</div>
		);
	}
};