import React, { useEffect } from 'react';
import { getBuilds } from '../actions/actions';
import { connect } from 'react-redux';
import WithLoading from './withLoading';
import repliData from './repliData';
import PropTypes from 'prop-types';

const ReplicationStatus = (props) => {
    const ListDataWithloading = WithLoading(repliData);
    useEffect(() => {
        props.getBuilds();
    }, []);
    return (
        <>
            <div>Replication Status</div>
            <ListDataWithloading 
                isLoading={props.loaderFlag}
                listData={props.allBuilds}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allBuilds: state.reducers.allBuilds,
        loaderFlag: state.reducers.loaderFlag
    }
}

const mapDispatchToProps = (dispatch) => ({
    getBuilds: () => {
        dispatch(getBuilds());
    }
})

ReplicationStatus.propTypes = {
    getBuilds: PropTypes.func,
    allBuilds: PropTypes.array,
    loaderFlag: PropTypes.bool    
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplicationStatus);