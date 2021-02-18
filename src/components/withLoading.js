import React from 'react';

// function WithLoading(Component) {
//     return function withLoadingComponent({isLoading, ...props}) {
//         if(!isLoading) {

//         }
//         if(!isLoading) return <Component {...props} />
//         return <p>Hold on, fetching data might take some time</p>
//     }
// }

function WithLoading(Component) {
    return function withLoadingComponent({isLoading, ...props}) {
        let finalData;
        if(!isLoading) {
            finalData = <Component {...props} />
        } else {
            finalData = 'Hold on data is still loading';
        }
        return finalData;
    }
}
export default WithLoading;