import React from 'react'
import DrawerButtonImg from './assets/DrawerButton.png'
import './drawerButton.scss'

class DrawerButton extends React.Component {
    render() {
        return (
            <button className="drawerButton"><img onClick={this.props.onClick} alt="Menu" src={DrawerButtonImg} /></button>
        );
    }
}

export default DrawerButton;