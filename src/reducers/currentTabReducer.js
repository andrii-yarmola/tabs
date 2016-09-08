'use strict';

import { TAB_SWITCH } from 'actions';


const curTab = JSON.parse(localStorage.getItem('curTab')) || [1];

export default (state = curTab, action) => {
	switch (action.type) {
		case TAB_SWITCH:
			localStorage.setItem('curTab', JSON.stringify(action.index));
			return action.index;
		default:
			return state;
	}
}

