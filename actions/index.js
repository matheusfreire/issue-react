import {GET_REPOS, ADD_NEW_REPO} from  "../utils/ActionType"

export function getRepos(repos){
    return {
        type: GET_REPOS,
        repos
    }
}

export function addRepo(newRepo){
    return {
        type: ADD_NEW_REPO,
        newRepo
    }
}