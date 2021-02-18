// import { loaderStatus } from "../actions/actions"

const INITIAL_STATE = {
    allBuilds: [],
    loaderFlag: true,
    allActiveRoutesData: [],
    allPassiveRoutesData: [],
    allStorageUtilizationData: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ALL_BUILDS':
            return {
                ...state,
                allBuilds: action.data
            }
        case 'LOADER_STATUS':
            return {
                ...state,
                loaderFlag: action.flag
            }
        case 'ALL_ACTIVE_ROUTES_DATA':
            return {
                ...state,
                allActiveRoutesData: action.data
            }
        case 'ALL_PASSIVE_ROUTES_DATA':
            return {
                ...state,
                allPassiveRoutesData: action.data
            }
        case 'ALL_STORAGE_UTILIZATION_DATA':
            return {
                ...state,
                allStorageUtilizationData: action.data
            }
        default:
            return {
                ...state
            }
    }
}