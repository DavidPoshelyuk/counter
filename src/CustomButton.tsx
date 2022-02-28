import React from 'react';

const CustomButton = (props:any) => {
    return (
        <div>
            <button className={props.className} disabled={props.disabled} onClick={props.setValue}>{props.name}</button>
        </div>
    );
};

export default CustomButton;