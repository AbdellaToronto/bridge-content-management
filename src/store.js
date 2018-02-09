import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

// import the root reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import queryString from 'query-string'


// export `history` to use in index.js, we using `createBrowserHistory`
// We forcefully used BrowserHistory because `createHashHistory` causing issue while deeplinking
export const history = createHistory({
	// basename: `/optportal/showcase/${SHOWCASE}.html`,
})

const epicMiddleware = createEpicMiddleware(rootEpic, {
	dependencies: {
		queryString
	}
});

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history)

const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware),
	applyMiddleware(appRouterMiddleware)
);

export default store;