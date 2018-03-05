import { combineEpics } from 'redux-observable';

// Import epics and combine
import { epics } from './redux/epics';

const rootEpic = combineEpics(
	epics
);

export default rootEpic