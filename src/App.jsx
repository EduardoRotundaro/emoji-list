import React from 'react';

import { EMOJI_LIST, getEmoji } from './list';

import Card from './Card';

export default props => {

    const copyToClipBoard = (index) => {
        const emoji = getEmoji(index);

        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = emoji;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    function renderCards (){
        return EMOJI_LIST.map((item, index) => (
            <div key={`card_${index}`} className="col-lg-2 col-sm-3 col-4">
                <Card emoji={item} onClick={()=> copyToClipBoard(index)} />
            </div>
        ));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {renderCards()}
            </div>
        </div>
    );
}