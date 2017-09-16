import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import "../helloworld.scss";

class View extends PureComponent {
	clickHandler = () => {
		const { message, changeText } = this.props;
		changeText(message);
 	}

	render() {
		const { message } = this.props;

		return (
			<div className="hello_world" onClick={this.clickHandler}>
				<div className="hello_world__message">
					{message}
				</div>
			</div>
		)
	}
}

View.propTypes = {
	message: PropTypes.string,
	changeText: PropTypes.func
}

export default View;