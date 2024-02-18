import React from "react";
import '../App.css'

const PageNotFound = () => {
    const style3 = {
        position: 'absolute',
        top: '300%',
        left: '50%',
        bottom: '100%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    };

    return (
        <div style={style3}>
            <h2 id="error404">
                Sorry! :(
            </h2>
            <p>
                The page you have requested does not exist.
            </p>
        </div>
    )
}

export default PageNotFound;
