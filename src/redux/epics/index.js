import { combineEpics } from 'redux-observable';
import { example } from './example'

export const epics = combineEpics(
	example
);
