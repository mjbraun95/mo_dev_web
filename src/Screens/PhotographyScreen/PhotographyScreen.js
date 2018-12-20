import React from 'react';

import Gallery from 'react-photo-gallery';

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
                    className="headerSpacing">
                    <h1>Photography</h1>
                </div>
                <Gallery onClick={(e, obj) => { this.setState({ photo: { ...obj.photo, index: obj.index }, box: true }) }} photos={PHOTO_SET} />
                {
                    this.state.box ?
                        <div
                            ref={(box) => {
                                this.photoBox = box;
                                this.state.box && this.photoBox ? this.photoBox.focus() : console.log("Component Unmounted");
                            }}
                            tabIndex="-1"
                            onKeyDown={(event) => {
                                if (event.key === "ArrowLeft") {
                                    let newIndex;
                                    if (this.state.photo.index === 0) {
                                        newIndex = PHOTO_SET.length - 1;
                                    } else {
                                        newIndex = this.state.photo.index - 1
                                    }
                                    let newPhoto = PHOTO_SET[newIndex];
                                    this.setState({ photo: { ...newPhoto, index: newIndex } })
                                } else if (event.key === "ArrowRight") {
                                    let newIndex;
                                    if (this.state.photo.index === PHOTO_SET.length - 1) {
                                        newIndex = 0;
                                    } else {
                                        newIndex = this.state.photo.index + 1
                                    }
                                    let newPhoto = PHOTO_SET[newIndex];
                                    this.setState({ photo: { ...newPhoto, index: newIndex } })
                                }

                            }}
                            onClick={() => { this.photoBox.blur(); this.setState({ box: false }); }}
                            className="boxContainer">
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
        src: 'https://instagram.fyxd1-1.fna.fbcdn.net/vp/27ac4caccf121c0590ead238719d7af3/5C95950A/t51.2885-15/sh0.08/e35/s640x640/47151064_371762386960877_9158180463179330915_n.jpg?_nc_ht=instagram.fyxd1-1.fna.fbcdn.net',
        width: 1080,
        height: 720,
    },
    {
        src: 'https://instagram.fyxd1-1.fna.fbcdn.net/vp/a9a19e3de4bd0fce7bd1a0bbcdee7676/5CB851F1/t51.2885-15/sh0.08/e35/s640x640/46925662_215629462647064_7895917795838685729_n.jpg?_nc_ht=instagram.fyxd1-1.fna.fbcdn.net',
        width: 1080,
        height: 695,
    },
    {
        src: 'https://scontent-yyz1-1.cdninstagram.com/vp/fbf5e6566b90e4a8c589bc2a80baa44d/5CA8B7CF/t51.2885-15/sh0.08/e35/s640x640/46645051_351551815634798_6936702293998497003_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com',
        width: 600,
        height: 337,
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
]

export default PhotographyScreen