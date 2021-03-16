import React, { useState } from 'react';
import {Redirect} from 'react-router';

const ContextAPI = () => {
    const [redirect, updateRedirect] = useState(false);

    const handleBack = () => {
        updateRedirect(true);
    }

    return (
        <>
            {redirect ? <Redirect to={'/'} /> : null } 
            <button onClick={handleBack}>Back</button>
            context api
        </>
    )
}

export default ContextAPI;