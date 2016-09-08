'use strict';


const defaultTabState = {
	tabset: [
		{
			index: 1,
			text: 'home',
			content: 'this is home tab'
		},
		{
			index: 2,
			text: 'products',
			content: 'this is product tab'
		},
		{
			index: 3,
			text: 'contacts',
			content: 'this is contact tab'
		}
	]
};

export default (state = defaultTabState, action) => {
	return state;
}

