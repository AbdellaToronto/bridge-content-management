import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import your Module reducers here and combine them
import {reducers} from './redux/reducers'

const rootReducer = combineReducers({
	reducers,
	router: routerReducer
});

export default rootReducer;