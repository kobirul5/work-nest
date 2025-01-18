import React from 'react';

const SecondaryBtn = ({btnText}) => {
    return (
        <div>
            <button className="btn bg-transparent border-primary-color text-white">{btnText}</button>
        </div>
    );
};

export default SecondaryBtn;