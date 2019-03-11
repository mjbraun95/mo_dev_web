import React from 'react';
import "./footer.scss"

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="links">
                    <a href="https://github.com/MoTheNerd">GitHub</a>
                    <a href="https://www.linkedin.com/in/mohammadalahdal/">LinkedIn</a>
                    <a href="https://www.instagram.com/mosvisuals/">Instagram</a>
                    <a href="https://twitter.com/royalkingmomo">Twitter</a>
                    <a href="https://trello.com/b/PCScaNu9/my-life">Trello</a>
                </div>
                <div className="copyrightNotice">Mohammad Al-Ahdal</div>
            </div>
        );
    }
}

export default Footer;