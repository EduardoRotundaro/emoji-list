import React from 'react';

export default props => {
    const item = props.emoji;
    return (
        <div className="card" onClick={props.onClick}>
            <div className="head">
                <h2>{item.emoji}</h2>
            </div>
            <div className="body">
                <section className="tags"><span>Tags:&nbsp;</span>{item.tags.join(', ')}</section>
            </div>
        </div>
    );
}