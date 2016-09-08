'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemSwitch } from 'actions';

const stateToProps = ({ currentTabReducer, tabReducer }) => {
	return {
		currentTabReducer,
		tabReducer
	};
};

const dispatchToProps = (dispatch) => {
	return {
		itemSwitch: (index) => dispatch(itemSwitch(index))
	};
};

const Tabs = ({ currentTabReducer, tabReducer, itemSwitch }) => {
	return (
		<div>
			<h1>
				Tabs:
			</h1>
			<hr />
			<ul>
				{tabReducer.tabset.map(item => (
					<li key={item.index}>
						<button	onClick={() => itemSwitch(item.index)}>
							{item.text}
						</button>
					</li>
					))
				}
			</ul>
			<hr />
			<p> current active tab: {currentTabReducer}</p>
			<hr />
			<ul>
				{tabReducer.tabset.map(item => (
					<li 
						key={item.index}
						className = { currentTabReducer === item.index ? 'visible' : 'hidden' }
					>
						<div>
							{item.content}
						</div>
					</li>
					))
				}
			</ul>
		</div>
	)
};

export default connect(stateToProps, dispatchToProps)(Tabs);
