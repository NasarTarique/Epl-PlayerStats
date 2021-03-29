import { combineReducers } from "redux";
import nav from './nav.js';
import stats from './stats'

export default combineReducers({
		nav,
		stats,
});
