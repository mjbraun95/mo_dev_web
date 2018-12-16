import React from 'react';

import Gallery from 'react-photo-gallery'

class PhotographyScreen extends React.Component {
    render(){
        return(
            <div className="photographyScreen">
                <div className="headerSpacing"></div>
                <Gallery photos={PHOTO_SET}/>
            </div>
        );
    }
}

const PHOTO_SET = [
    // {
    //     src: 'https://picsum.photos/1200/900',
    //     width: 1200,
    //     height: 900,
    // }
]

export default PhotographyScreen