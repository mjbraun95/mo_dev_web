import React from 'react';

import Gallery from 'react-photo-gallery';

import './photographyScreen.scss';

class PhotographyScreen extends React.Component {
    state = {
        box: false,
        photo: {
            src: null,
            width: 0,
            height: 0
        }
    }
    render() {
        return (
            <div className="photographyScreen">
                <div
                    className="headerSpacing">
                    <h1>Photography</h1>
                </div>
                <Gallery onClick={(e, obj) => { this.setState({ photo: obj.photo, box: true }) }} photos={PHOTO_SET} />
                {
                    this.state.box ?
                        <div onClick={() => { this.setState({ box: false }) }} className="boxContainer">
                            <img src={this.state.photo.src} alt={this.state.photo.src} />
                        </div>
                        : null
                }
            </div>
        );
    }
}

const PHOTO_SET = [
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/fbf5e6566b90e4a8c589bc2a80baa44d/5CA8B7CF/t51.2885-15/sh0.08/e35/s640x640/46645051_351551815634798_6936702293998497003_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 600,
        height: 337,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/031bbb384780bf486fe702de9283c8c5/5C9DD584/t51.2885-15/sh0.08/e35/s640x640/41605384_250400465676689_2464122992578708258_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 600,
        height: 449,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/7f9b37dae7abaaad1c94370e06bde88d/5CA05DF2/t51.2885-15/sh0.08/e35/s640x640/41792081_1123897701095288_5673133217950828794_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 600,
        height: 449,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/d95b286a79c45e5e915d79ed86cb3589/5C8F02CF/t51.2885-15/sh0.08/e35/p640x640/38989746_891394944401977_5134425693454598144_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 480,
        height: 600,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/ee8b07184c4a1d1f5532bc4779a14563/5CA2035A/t51.2885-15/sh0.08/e35/s640x640/37650463_2122430451303570_6167375859402407936_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 1080,
        height: 809,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/5ee90a7eb8ab4d11ffb7f23db2f1027a/5C97560D/t51.2885-15/sh0.08/e35/s640x640/38166265_1942135902474432_9017038659743907840_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 1080,
        height: 809,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/3d73f312bacfcb33789a5685a32680b1/5C8FE66D/t51.2885-15/sh0.08/e35/s640x640/39504466_457406511438241_1286961691543732224_n.jpg',
        width: 1080,
        height: 809,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/414deb08c6da2d58dc2964e4df557815/5C92A8B5/t51.2885-15/sh0.08/e35/s640x640/41750032_419768688552902_1663548051059900997_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 1080,
        height: 808,
    },
]

export default PhotographyScreen