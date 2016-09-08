'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemSwitch } from 'actions';

import Tabs from './../tabComponent';

const stateToProps = ({ currentTabReducer }) => ({
	currentTabReducer
});

const dispatchToProps = (dispatch) => {
	return {
		itemSwitch: (index) => dispatch(itemSwitch(index))
	};
};

class Root extends Component {
	render() {
		return (
			<div>
				<Tabs />
			</div>
		)
	}
}

export default connect(stateToProps, dispatchToProps)(Root);