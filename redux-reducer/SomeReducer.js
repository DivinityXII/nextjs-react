const defaultState = {
	someState: [],
}

const SomeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'INIT_SOME_STATE':
			return Object.assign({}, state, {
				someState: action.value
			});
		default:
			return state;
	}
}

export default SomeReducer;