import React from 'react';
import { useHistory } from "react-router-dom";

const MemoReactFunc = () => {
    let history = useHistory();
    const handleBack = () => {
        history.push('/');
    }
    return (
        <div>
            <button onClick={handleBack}>Back</button>
            Memo
        </div>
    )
};

// MemoReactFunc.propTypes = {
//     histo
// }

export default MemoReactFunc;