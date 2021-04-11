import { Button, TextField } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';

const RefsComp = () => {
    const [redirect, updateRedirect] = useState(false);
    const handleBack = () => {
        updateRedirect(true);
    }
    const handleChange = (e) => {
        console.log('myRefs', myRefs);
        console.log('e', e);
    }
    const myRefs = useRef();
    return (
        <>
            {redirect ? <Redirect to='/' /> : null }
            <div>
                <Button variant="contained" color="primary" onClick={handleBack}>Back</Button>
            </div>
            <div>
                <TextField
                    type="text"
                    name="username"
                    onChange={handleChange}
                    ref={myRefs}
                />
            </div>
        </>
    )
}

export default RefsComp;