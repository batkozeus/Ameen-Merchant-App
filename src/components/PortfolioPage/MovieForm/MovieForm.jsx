import React from 'react';
import PropTypes from 'prop-types';
import './MovieForm.scss';


class MovieForm extends React.Component {
	static PropTypes = {
		onFormSubmit: PropTypes.func.isRequired
	};

	state = {
		inputTitleValue: '',
		inputDescrValue: '',
		inputRatingValue: 1,
		inputGenreValue: []
	};

	baseState = this.state;

	_handleInputTitleChange = (evt) => {
		const value = evt.target.value;

		this.setState({
			inputTitleValue: value
		})
	}

	_handleInputDescrChange = (evt) => {
		const value = evt.target.value;

		this.setState({
			inputDescrValue: value
		})
	}

	_handleInputRatingChange = (evt) => {
		const value = evt.target.value;

		this.setState({
			inputRatingValue: value
		})
	}

	_handleInputGenreChange = (evt) => {
		if (evt.target.checked) {
			const value = evt.target.value;
			this.setState({
				inputGenreValue: [...this.state.inputGenreValue, value]	
			})
		}
		else {
			const value = evt.target.value;
			this.setState({
				inputGenreValue: this.state.inputGenreValue.filter(genre => genre !== value)	
			})
		}
	}

	_handleFormSubmit = (evt) => {
		evt.preventDefault();

		if ( this.state.inputTitleValue === '') {
			alert("Field 'Title' is empty");
			if ( this.state.inputDescrValue === '' ) {
				alert("Field 'Description' is empty");
			}
		}

		else if ( this.state.inputDescrValue === '' ) {
			alert("Field 'Description' is empty");
		}

		else {
			this.props.onFormSubmit(this.state);
			this.setState(this.baseState);
			this.form.reset();
		}
	}

	render() {
		const MovieForm__option = [1,2,3,4,5,6,7,8,9,10];
		const { title, description,rating } = this.props;
		const MovieForm__genre = ['drama','action','sci-fi','horror','thriller','comedy'];

		const { inputTitleValue, inputDescrValue, inputRatingValue } = this.state;

		return (
			<form className="MovieForm" onSubmit={this._handleFormSubmit} ref={(el) => this.form = el}>
				<label className="MovieForm__label-for-form">{title} 
					<input className="MovieForm__input" type="text" value={inputTitleValue} onChange={this._handleInputTitleChange} />
				</label>
				<label className="MovieForm__label-for-form">{description} 
					<textarea className="MovieForm__txtarea" rows="8" value={inputDescrValue} onChange={this._handleInputDescrChange} ></textarea>
				</label>
				<label className="MovieForm__label-for-form">{rating} 
					<select className="MovieForm__input" value={inputRatingValue} onChange={this._handleInputRatingChange}>
						{MovieForm__option.map( option => <option value={option} >{option}</option> )}
					</select>
				</label>
				<fieldset className="MovieForm__fieldset">
					<legend className="MovieForm__legend">Choose the genres</legend>
					{MovieForm__genre.map( genre => (<label className="MovieForm__label-for-checkbox"><input className="MovieForm__checkbox" type="checkbox" name="genre" value={genre} onChange={this._handleInputGenreChange} />{genre}</label>))}	
				</fieldset>
				<button className="MovieForm__submit">submit</button>
			</form>
		);
	}
}

export default MovieForm;