export function getBuilds() {
    return {
        type: 'GET_BUILDS'        
    }
}

export function allBuilds(data) {
    return {
        type: 'ALL_BUILDS',
        data
    }
}

export function loaderStatus(flag) {
    return {
        type: 'LOADER_STATUS',
        flag
    }
}

export function getActiveRoutes() {
    return {
        type: 'GET_ACTIVE_ROUTES'
    }
}

export function allActiveRoutesData(data) {
    return {
        type: 'ALL_ACTIVE_ROUTES_DATA',
        data
    }
}

export function getPassiveRoutes() {
    return {
        type: 'GET_PASSIVE_ROUTES'
    }
}

export function allPassiveRoutesData(data) {
    return {
        type: 'ALL_PASSIVE_ROUTES_DATA',
        data
    }
}

export function getStorageUtilizations() {
    return {
        type: 'GET_STORAGE_UTILIZATIONS'
    }
}

export function allStorageUtilizationData(data) {
    return {
        type: 'ALL_STORAGE_UTILIZATION_DATA',
        data
    }
}