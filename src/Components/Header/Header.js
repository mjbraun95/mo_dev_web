import React from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css'
import 'antd/dist/antd.css'

import { DrawerButton } from '../../Components';
import Logo from '../../assets/logo.png';
import "./header.scss";

class Header extends React.Component {

    state = {
        isMobile: false,
        open: false
    }

    updateDimensions() {
        if (window.innerWidth < 600) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img className="logo" alt="Mohammad Al-Ahdal" src={Logo} />
                </Link>
                <DrawerButton onClick={() => { this.setState({ open: true }) }} />
                <Drawer placement="right" width={this.state.isMobile ? "80vw": "300px"} handler={false} open={this.state.open} onMaskClick={() => { this.setState({ open: false }) }}>
                    <Menu
                        style={{ height: '200%' }}
                        mode="inline"
                    >
                        <Menu.Item><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item><Link to="/portfolio">Portfolio</Link></Menu.Item>
                        <Menu.Item><Link to="/photography">Photography</Link></Menu.Item>
                        <Menu.Item><Link to="/contact">Contact</Link></Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        );
    }
}

export default Header;