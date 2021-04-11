import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Display from "./Display";
import MyContext from './MyContext';

const ContextAPI = () => {
    const [redirect, updateRedirect] = useState(false);

    const handleBack = () => {
        updateRedirect(true);
    }

    return (
        <>
            {redirect ? <Redirect to={'/'} /> : null } 
            <button onClick={handleBack}>Back</button>
            <MyContext.Provider value={45}>
                <div>
                    <Display />
                </div>
            </MyContext.Provider>
        </>
    )
}

export default ContextAPI;