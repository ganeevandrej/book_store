import React from 'react';

import icon from './error-indicator.svg';

import './error-indicator.css';

export const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            {/*<span className="boom">BOOM!</span>*/}
            <span className="bold">Что-то пошло не так ...</span>
            <span>(Но мы уже послалли фиксиков, чтобы исправить это)</span>
        </div>
    );
};
