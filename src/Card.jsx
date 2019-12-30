import React from 'react';

export default props => {
    const item = props.emoji;
    return (
        <div className="card" onClick={props.onClick}>
            <h2>{item.emoji}</h2>
        </div>
    );
}