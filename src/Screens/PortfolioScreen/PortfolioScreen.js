import React from 'react';

import { PortfolioItem } from 'mos-components'
import './portfolioScreen.scss'

import IMG_hacked2019 from '../../assets/portfolio/hacked2019.jpg'
import IMG_f4ces_one from '../../assets/portfolio/hacked2019.jpg'
import IMG_ess from '../../assets/portfolio/hacked2019.jpg'
import IMG_ecocar from '../../assets/portfolio/hacked2019.jpg'
import IMG_msa from '../../assets/portfolio/hacked2019.jpg'
import IMG_calgaryhacks2019 from '../../assets/portfolio/hacked2019.jpg'
class PortfolioScreen extends React.Component {
    render() {
        return (
            <div className="portfolioScreen">
            <div className="headerSpacing"></div>
                <h1>Welcome to my portfolio!</h1>
                <p>Here's a small taste of the extra curricular activities, projects, and overall shenanigans I work on on my off-time! When I'm not writing code for Intuit or grinding away at homework - I'm usually busying myself with something productive (with the off chance that I'll be out playing badminton)</p>
                <PortfolioItem
                    title="HackED 2019"
                    description="Magna elit ea dolore deserunt veniam nostrud commodo incididunt. Ullamco reprehenderit ipsum consequat ex."
                    backgroundImage={IMG_hacked2019}
                    link="https://hacked.compeclub.com"
                />
                <PortfolioItem
                    title="F4ces // Album of faces that tell a story."
                    description="Magna elit ea dolore deserunt veniam nostrud commodo incididunt. Ullamco reprehenderit ipsum consequat ex."
                    backgroundImage={IMG_f4ces_one}
                    link="#"
                />
                <PortfolioItem
                    title="ESS"
                    description="Magna elit ea dolore deserunt veniam nostrud commodo incididunt. Ullamco reprehenderit ipsum consequat ex."
                    backgroundImage={IMG_ess}
                    link="#"
                />
                <PortfolioItem
                    title="EcoCar"
                    description="Magna elit ea dolore deserunt veniam nostrud commodo incididunt. Ullamco reprehenderit ipsum consequat ex."
                    backgroundImage={IMG_ecocar}
                    link="#"
                />
                <PortfolioItem
                    title="Muslim Student's Association"
                    description="Magna elit ea dolore deserunt veniam nostrud commodo incididunt. Ullamco reprehenderit ipsum consequat ex."
                    backgroundImage={IMG_msa}
                    link="#"
                />
                <PortfolioItem
                    title="Calgary Hacks 2019"
                    description="Magna elit ea dolore deserunt veniam nostrud commodo incididunt. Ullamco reprehenderit ipsum consequat ex."
                    backgroundImage={IMG_calgaryhacks2019}
                    link="#"
                />
            </div>
        );
    }
}

export default PortfolioScreen;