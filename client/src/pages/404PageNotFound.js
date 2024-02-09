import React from "react";
import '../App.css'

const PageNotFound = () => {
    const style3 = {
        position: 'absolute',
        top: '400px',
        alignItems: 'center',
        left: '300px'
    }
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
