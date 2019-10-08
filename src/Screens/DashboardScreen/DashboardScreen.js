import React, { Component } from 'react'
import { LoadingIndicator, ButtonGroup, Button, TextField } from '@mo_dev/bits'
import { createAPICall, getStore } from 'litsy'

import './dashboardScreen.scss'
import { Header } from '../../Components'

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
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <Header />
        </div>
        {this.state.showable ? this.renderAuthenticatedDashboard() : <LoadingIndicator />}
      </div>
    )
  }

  renderAuthenticatedDashboard() {
    return (
      <div className="dashboardScreen__authenticatedDashboardView">
        <div className="headerSpacingLess"></div>
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
        <div className="dashboardScreen__photographySection__imageCarousel">
          <h2>Photos:</h2>
          {photography_posts.map((value, index, arr) => (
            <div style={{
              cursor: "pointer",
              marginLeft: index === 0 ? 0 : "20px",
              marginRight: index === arr.length - 1 ? 0 : "20px",
              textAlign: 'center'
            }} onClick={() => {
              // copy _id to pasteboard
              navigator.clipboard.writeText(value._id)
            }}>
              <div className="dashboardScreen__photographySection__imageCarousel__image" style={{
                background: `url("${value.url}") 50% 50% no-repeat`,
                backgroundSize: "100%"
              }}>
              </div>
              {value._id}
            </div>
          ))}
        </div>
        <div className="dashboardScreen__photographySection__addPhoto">
          <h2>Add a photo:</h2>
          <Button type="wire" onClick={() => {
            // do stuff
          }}>
            Upload
          </Button>
        </div>
        <div className="dashboardScreen__photographySection__deletePhoto">
          <h2>Delete a photo:</h2>
          <TextField placeholder="enter image id" />
          <Button type="wire" onClick={() => {
            // do stuff
          }}>
            Delete
          </Button>
        </div>
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
      url: '/api/auth/authenticateUsingToken',
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
      url: '/api/photography/photos',
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
      url: '/api/portfolio/posts',
      method: 'get',
      storeName: "mo_dev_web",
      stateName: "portfolio__posts",
      saveToStore: false
    })
    getStore("mo_dev_web", false).subscribe("portfolio__posts", "DashboardScreen", () => { this.forceUpdate.bind(this)() })

    await getPosts()
  }

  uploadNewPhotographyPost() {

  }

  uploadNewPortfolioPost() {

  }
}

export default DashboardScreen
