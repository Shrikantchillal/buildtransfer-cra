import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>Home</div>
            <div>useCallback: <Link to='/useCallBack'>useCallback</Link></div>
            <div>context: <Link to='/context'>context</Link></div>
            <div>Memo: <Link to={'/memo'}>Memo</Link></div>
        </>
    )
}

export default Home;