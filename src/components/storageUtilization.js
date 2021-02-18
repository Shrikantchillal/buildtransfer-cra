import React, { useEffect } from 'react';
import { getStorageUtilizations } from '../actions/actions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StorageUtiliation = (props) => {
    useEffect(() => {
        props.getStorageUtilizations();
    }, [])
    return (
        <>
            <div>Storage Utilization</div>
            <div>{JSON.stringify(props.allStorageUtilizationData, null, 2)}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allStorageUtilizationData: state.reducers.allStorageUtilizationData
    }
};

const mapDispatchToProps = (dispatch) => ({
    getStorageUtilizations: () => {
        dispatch(getStorageUtilizations());
    }
});

StorageUtiliation.propTypes = {
    getStorageUtilizations: PropTypes.func,
    allStorageUtilizationData: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(StorageUtiliation);