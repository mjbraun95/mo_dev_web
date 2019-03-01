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

    render() {
        return (
            <div className=".portfolioItem">
                
            </div>
        )
    }
}

export default PortfilioItem
