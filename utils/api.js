import { AsyncStorage } from 'react-native'

const REPOS_STORAGE_KEY = 'flashcard:repositories'

export function fetchRepos() {
    return AsyncStorage.getItem(REPOS_STORAGE_KEY).then(result => {
        return JSON.parse(result)
    })
}

export function saveNewRepo({ repo }) {
    const newObject = {'repo': repo}
    return AsyncStorage.mergeItem(REPOS_STORAGE_KEY, JSON.stringify({
        [repo]: newObject
    }))
}