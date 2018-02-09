import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
	toastr: toastrReducer,
	router: routerReducer
});

export default rootReducer;