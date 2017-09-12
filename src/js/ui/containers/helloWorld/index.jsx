import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { getMessage } from '../../../selectors/helloWorld';
import { changeText } from '../../../actions/HelloWorldActions';
import View from './components';

const mapStateToProps = createSelector(
	getMessage,
	(message) => ({ message })
);

const mapDispatchToProps = (dispatch) => {
	return {
		changeText: bindActionCreators(changeText, dispatch),
	};
};

const HelloWorldContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default HelloWorldContainer;
