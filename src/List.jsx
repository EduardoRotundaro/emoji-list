import React from 'react';
import { toast } from 'react-toastify';

import { getEmoji } from './emojis';

import Card from './Card';

export default ({content, sub}) => {

    const copyToClipBoard = (index) => {
        const emoji = getEmoji(index, sub);

        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = emoji;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        toast.success("✅ Copied!", { autoClose: 1500 });
    }

    function renderCards (){
        return content.map((item, index) => (
            <div key={`SMILEYS_PEOPLE_LIST_${index}`} className="col-lg-2 col-sm-3 col-4">
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