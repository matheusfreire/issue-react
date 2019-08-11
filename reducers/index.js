import {GET_REPOS, ADD_NEW_REPO} from  "../utils/ActionType"

function repos(state = {}, action){
    var newState = {}
    switch(action.type){
        case GET_REPOS:
            return {...state, ...action.repos}
        case ADD_NEW_REPO:
            return {...state, [action.repo]:action.repo}
    }
}

export default repos