import React, { useEffect } from 'react';
import { getActiveRoutes, getPassiveRoutes } from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Routes = (props) => {
    useEffect(() => {
        props.getActiveRoutes();
        props.getPassiveRoutes();
    }, [])
    return (
        <>
            <div>Routes</div>
            <div>{JSON.stringify(props.allActiveRoutesData, null, 2)}</div>
            <div>{JSON.stringify(props.allPassiveRoutesData, null, 2)}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allActiveRoutesData: state.reducers.allActiveRoutesData,
        allPassiveRoutesData: state.reducers.allPassiveRoutesData
    }
}

const mapDispatchToProps = (dispatch) => ({
    getActiveRoutes: () => {
        dispatch(getActiveRoutes());
    },
    getPassiveRoutes: () => {
        dispatch(getPassiveRoutes());
    }
})

Routes.propTypes = {
    getActiveRoutes: PropTypes.func,
    allActiveRoutesData: PropTypes.array,
    allPassiveRoutesData: PropTypes.array,
    getPassiveRoutes: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
