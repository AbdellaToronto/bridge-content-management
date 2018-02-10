import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

import {
	REQUEST_USER_REPOS_START,
  REQUEST_USER_REPOS_FAILED
}  from '../actions/actionTypes';

import {
	doUserReposFulfilled
} from '../actions/doUserRepos';


// epic
const fetchUserRepos = action$ => {

	return action$.ofType(REQUEST_USER_REPOS_START)
	.mergeMap(action =>
		ajax.getJSON(`https://api.github.com/users/${action.payload}/repos`)
	  .map(response => doUserReposFulfilled(response))
	  .catch(error => Observable.of({
    	type: REQUEST_USER_REPOS_FAILED,
    	payload: error.xhr.response,
    	error: true
    }))
	);

}

export default fetchUserRepos;
