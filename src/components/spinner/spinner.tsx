import React from "react";

import "./spinner.css";

export const Spinner: React.FC = (): JSX.Element => {
    return (
        <div className="wrapped">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <span>Загрузка...</span>
        </div>
    );
}