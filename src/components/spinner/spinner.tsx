import React from "react";

import "./spinner.css";

export const Spinner: React.FC = (): JSX.Element => {
    return (
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
}