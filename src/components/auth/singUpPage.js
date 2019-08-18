import React from "react";

import SignUpFormContainer from "./signUpFormContainer";

export default () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <h1>Sign up</h1>
                <hr />
                <SignUpFormContainer />
            </div>
        </div>
    </div>
);
