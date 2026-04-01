import React from 'react';

const Wave = ({ position = 'top', color = '#ffffff' }) => {
    return (
        <div className={position === 'top' ? 'wave-top' : 'wave-bottom'}>
            <svg viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0,25 C240,50 480,0 720,25 C960,50 1200,0 1440,25 L1440,0 L0,0 Z"
                    fill={color}
                />
            </svg>
        </div>
    );
};

export default Wave;
