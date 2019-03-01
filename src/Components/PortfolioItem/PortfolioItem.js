import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./portfolioItem.scss"

export class PortfilioItem extends Component {
    static propTypes = {
        backgroundImage: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        link: PropTypes.string.isRequired
    }

    state={
        
    }

    render() {
        return (
            <div className="portfolioItem">
                <div
                    className="title"
                    style={{
                        background: `
                            linear-gradient(
                                rgba(0, 0, 0, 0.45), 
                                rgba(0, 0, 0, 0.45)
                            ),
                            url(${this.props.backgroundImage})
                        `,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%"
                    }}
                >
                    <h2>{this.props.title}</h2>
                </div>
                <div className="desc">
                    <p>{this.props.description}</p>
                    <button onClick={() => {
                        window.location = this.props.link
                    }}>More</button>
                </div>
            </div>
        )
    }
}

export default PortfilioItem
