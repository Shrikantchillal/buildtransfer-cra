import React, {useEffect, useState} from 'react';

function Clock() {
    const [currentTime, updateCurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
            setInterval(() => {
                newTime();
            }, 1000);
    }, []);

    const newTime = () => {
        updateCurrentTime(new Date().toLocaleString());
    }
    return (
        <>
            {currentTime}
        </>
    )
}

export default Clock;