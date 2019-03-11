import React from 'react';

import "./contactScreen.scss"
class ContactScreen extends React.Component {
    render() {
        return (
            <div className="contactScreen">
                <h1>So, you want to get in touch...</h1>
                <h3>there's a few ways you can get a hold of me.</h3>
                <div>Email: <a href="mailto:mo@mohammad.dev">mo@mohammad.dev</a></div>
                <br />
                <div>Phone: <a href="tel:15874366543">+1 (587) 436-6543</a></div>
                <br />
                <div><a href="https://www.linkedin.com/in/mohammadalahdal/">LinkedIn</a></div>
                <br />
                <div><a href="https://twitter.com/RoyalKingMomo">Twitter</a></div>
                <br />
                <div><a href="https://instagram.com/mosvisuals">Instagram</a></div>
                <br />
                <div><a href="m.me/enggmo">Messenger</a></div>

            </div>
        );
    }
}

export default ContactScreen;