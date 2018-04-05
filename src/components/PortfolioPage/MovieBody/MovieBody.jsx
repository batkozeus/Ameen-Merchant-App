import React from 'react';
import "./MovieBody.css";


class MovieBody extends React.Component {
	render() {
		return (
			<div className="MovieBody">
				{this.props.children}
			</div>
		);
	}
}

export default MovieBody;