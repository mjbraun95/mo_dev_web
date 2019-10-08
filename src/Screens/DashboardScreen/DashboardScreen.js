import React, { Component } from 'react'
import { LoadingIndicator, ButtonGroup, Button } from '@mo_dev/bits'
import { createAPICall, getStore } from 'litsy'

import './dashboardScreen.scss'

export class DashboardScreen extends Component {

  state = {
    showable: false,
    selectedSection: 'Photography'
  }

  componentDidMount() {
    this.validateToken()
  }

  render() {
    return (
      <div className="dashboardScreen">
        {this.state.showable ? this.renderAuthenticatedDashboard() : <LoadingIndicator />}
      </div>
    )
  }

  renderAuthenticatedDashboard() {
    return (
      <div className="dashboardScreen__authenticatedDashboardView">
        <div className="dashboardScreen__header">
          <h1>
            Welcome, Mohammad
          </h1>
          <Button onClick={() => {
            window.location.assign("/login")
            getStore("mo_dev_web", true).setState("auth", undefined)
            getStore("mo_dev_web", true).setState("auth__tokenStatus", undefined)
          }}>
            Logout
          </Button>
        </div>
        <ButtonGroup buttonLabels={["Photography", "Portfolio"]} buttonFunctions={[() => { this.setState.bind(this)({ selectedSection: 'Photography' }) }, () => { this.setState.bind(this)({ selectedSection: 'Portfolio' }) }]} />
        {this.renderPhotographySection()}
        {this.renderPortfolioSection()}
      </div>
    )
  }

  renderPhotographySection() {
    const photography_posts = getStore("mo_dev_web", false).getState("photography__posts")
    if (!photography_posts || photography_posts.dirty) { return null };
    if (this.state.selectedSection !== "Photography") { return null };

    return (
      <div className="dashboardScreen__photographySection">
        <h2>Photos:</h2>
        {photography_posts.map(value => <div>{JSON.stringify(value)}</div>)}
      </div>
    )
  }

  renderPortfolioSection() {
    const portfolio_posts = getStore("mo_dev_web", false).getState("portfolio__posts")
    if (!portfolio_posts || portfolio_posts.dirty) { return null };
    if (this.state.selectedSection !== "Portfolio") { return null };

    return (
      <div className="dashboardScreen__portfolioSection">
        <h2>Posts:</h2>
        {portfolio_posts.map(value => <div>{JSON.stringify(value)}</div>)}
      </div>
    )
  }

  validateToken() {
    //check pre-existing values
    if (!(getStore("mo_dev_web", true).getState("auth") && getStore("mo_dev_web", true).getState("auth").token)) {
      // if no pre-existing values, head to login
      window.location.assign('/login')
    }

    const checkToken = createAPICall({
      // url: '/api/auth/authenticateUsingToken',
      url: 'https://mohammad.dev/api/auth/authenticateUsingToken',
      method: 'post',
      storeName: "mo_dev_web",
      stateName: "auth__tokenStatus",
      saveToStore: true,
      bodyData: {
        token: getStore("mo_dev_web", true).getState("auth").token
      }
    })

    const localStore = getStore("mo_dev_web", true)
    localStore.subscribe("auth__tokenStatus", "DashboardScreen", async (state) => {
      if (state.code !== 200) {
        window.location.assign('/login')
      } else {
        await this.getPhotographyPosts()
        await this.getPortfolioPosts()
        this.setState.bind(this)({ showable: true })
      }
    })

    checkToken()
  }

  async getPhotographyPosts() {
    const getPhotos = createAPICall({
      url: 'https://mohammad.dev/api/photography/photos',
      method: 'get',
      storeName: "mo_dev_web",
      stateName: "photography__posts",
      saveToStore: false
    })
    getStore("mo_dev_web", false).subscribe("photography__posts", "DashboardScreen", () => { this.forceUpdate.bind(this)() })

    await getPhotos()
  }

  async getPortfolioPosts() {
    const getPosts = createAPICall({
      url: 'https://mohammad.dev/api/portfolio/posts',
      method: 'get',
      storeName: "mo_dev_web",
      stateName: "portfolio__posts",
      saveToStore: false
    })
    getStore("mo_dev_web", false).subscribe("portfolio__posts", "DashboardScreen", () => { this.forceUpdate.bind(this)() })

    await getPosts()
  }

  signOut() {

  }

  uploadNewPhotographyPost() {

  }

  uploadNewPortfolioPost() {

  }
}

export default DashboardScreen
