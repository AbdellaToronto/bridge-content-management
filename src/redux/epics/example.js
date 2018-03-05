import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';


// epic
export const example = action$ => {

	return action$.ofType('ACTION_NAME')
    // .mergeMap(action =>
		// ajax.getJSON(`https://api.github.com/users/${action.payload}/repos`)
	 //  .map(response => doUserReposFulfilled(response))
	 //  .catch(error => Observable.of({
    // 	type: REQUEST_USER_REPOS_FAILED,
    // 	payload: error.xhr.response,
    // 	error: true
    // }))
    // );
}

