import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

// import your Module reducers here and combine them

const rootReducer = combineReducers({
	toastr: toastrReducer,
	router: routerReducer
});

export default rootReducer;