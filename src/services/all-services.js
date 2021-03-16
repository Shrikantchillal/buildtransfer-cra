import axios from 'axios';
import { allBuilds, loaderStatus, allActiveRoutesData, allPassiveRoutesData, allStorageUtilizationData } from '../actions/actions';

const allServices = store => next => action => {
    const baseUrl = 'http://localhost:3000';
    switch(action.type) {
        case 'GET_BUILDS':
            axios.get(`${baseUrl}/builds`)
                .then((res) => {
                    const builds = res.data;
                    next(allBuilds(builds));
                    next(loaderStatus(false));
                    console.log(store);
                })
                .catch((error) => {
                    console.log('error', error);
                });
            break;
        case 'GET_ACTIVE_ROUTES':
            axios.get(`${baseUrl}/masterSlaveActive`)
                .then((res) => {
                    let activeRoutes = res.data;
                    next(allActiveRoutesData(activeRoutes));
                });
            break;
        case 'GET_PASSIVE_ROUTES':
            axios.get(`${baseUrl}/masterSlavePassive`)
                .then((res) => {
                    let passiveRoutes = res.data;
                    next(allPassiveRoutesData(passiveRoutes));
                });
            break;
        case 'GET_STORAGE_UTILIZATIONS':
            axios.get(`${baseUrl}/storageData`)
                .then((res) => {
                    let storageData = res.data;
                    next(allStorageUtilizationData(storageData));
                })
            break;
        default:
            next(action);
        break;
    }
}

export default allServices;