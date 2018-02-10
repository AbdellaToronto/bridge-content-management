import {
	REQUEST_USER_REPOS_START,
	REQUEST_USER_REPOS_SUCCESS
} from './actionTypes'


export function doUserRepos(payload) {
  return {
    type: REQUEST_USER_REPOS_START,
    payload
  };
}

export function doUserReposFulfilled(payload) {
  return {
    type: REQUEST_USER_REPOS_SUCCESS,
    payload
  };
}