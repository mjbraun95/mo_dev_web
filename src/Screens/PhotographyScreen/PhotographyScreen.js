import React from 'react';

import './photographyScreen.scss';

class PhotographyScreen extends React.Component {
    state = {
        box: false,
        photo: {
            src: null,
            width: 0,
            height: 0,
            index: 0
        }
    }

    render() {
        return (
            <div className="photographyScreen">
                <div
                    className="header">
                    <h1>Photography</h1>
                </div>
                <div
                    className="headerSpacing">
                </div>
                <div className="tmp_reconstruction">
                    <h1>This page is under reconstruction</h1>
                    <h6>(I'm making an api that would be able to store my favourite images to a DO s3 bucket and dynamically load all my images alongside metadata etc)</h6>
                </div>
            </div>
        );
    }
}

export default PhotographyScreen