import { combineReducers } from 'redux'
import SomeReducer from './someState/reducer';

const AppReducer = combineReducers({
	SomeReducer,
})


export default AppReducer;