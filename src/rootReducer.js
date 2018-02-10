import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

// import your Module reducers here and combine them
import home from './home/reducers'

const rootReducer = combineReducers({
	home,
	toastr: toastrReducer,
	router: routerReducer
});

export default rootReducer;