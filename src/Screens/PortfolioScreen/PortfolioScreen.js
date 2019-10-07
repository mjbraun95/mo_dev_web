import React from 'react';
import { ShortCard, LoadingIndicator } from '@mo_dev/bits'
import { createAPICall, getStore } from 'litsy'

import './portfolioScreen.scss'
class PortfolioScreen extends React.Component {

    state = {
        isMobile: false,
    }

    updateDimensions() {
        if (window.innerWidth <= 1100) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    }

    UNSAFE_componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    componentDidMount() {
        this.getPosts = createAPICall({
            url: '/api/portfolio/posts',
            // url: 'http://slowwly.robertomurray.co.uk/delay/10000/url/https://mohammad.dev/api/portfolio/posts',
            // use the above URL to test animation
            method: 'get',
            storeName: "mo_dev_web",
            stateName: "portfolio__posts",
            saveToStore: false
        })
        let sessionStore = getStore("mo_dev_web", false)
        sessionStore.subscribe("portfolio__posts", "PortfolioScreen", () => { this.forceUpdate.bind(this)() })

        this.getPosts()
        global.forceRender = this.forceUpdate.bind(this)
    }

    render() {
        let result = getStore("mo_dev_web", false).getState("portfolio__posts")
        return (
            <div className="portfolioScreen">
                {this.state.isMobile ? null : <div className="headerSpacing"></div>}
                {result && !result.dirty ? this.renderContent(result) : <LoadingIndicator />}
            </div>
        );
    }

    renderContent(result) {
        return [
            <div key="description">
                <h1>My Portfolio</h1>
                <p>
                    Welcome to my portfolio! This is where I post my projects. A lot of these are works in progress or not being worked on anymore but I think they're pretty cool so you should check them out!
                </p>
            </div>,
            <RenderedCards key="cards" data={result} />
        ];
    }
}

const RenderedCards = (props) => {
    const data = props.data

    if (data.dirty) {
        return null
    }

    let cards = data.map((data, index) => (
        <ShortCard key={index} href={data.link} picture={data.picture_uri} title={data.title} subtitle={data.short_description} />
    ))

    return <div className="portfolioScreen__allCards">{cards}</div>
}

export default PortfolioScreen;