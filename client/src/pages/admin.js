import React, { useState, useEffect } from "react";

/*
implement table with update, delete buttons
table with search
use usecontext in order to get all exams

- update -> redirect to update page
        - for each record in dummy data, add new key-value pair for instances of deletion
            * (default) isDeleted = false -> (user presses delete button) -> isDeleted = true (boolean for instances on chart will be shown, if !object[isDeleted] / if object[isDeleted]===true)
            * refresh page automatically when record becomes deleted
    * Nav Bar Search
        - most likely using qps, or match useContext with both button click for search or key word press enter using t3 tutorial hooks

Tackling issue 29 and 41
 */
const AdminPage = () => {
    return (
        <div className="landingPage">
            Admin Page
        </div>
    )
}

export default AdminPage;
