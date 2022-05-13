import React,{ useState} from 'react'
import {images} from '../../assets'

import './Header.scss'

const Header = () => {
    return (
        <main className="container app__flex">
            <section className="app__container">
                <div className="main__hero-img row-span-2">
                    <img src={images.heroDesktop} alt="main image" className="hero-img" />
                </div>
                <div className="main__content col-1">
                    <h1 className="bold-text">
                        Make <br /> Remote Work
                    </h1>
                    <p className="p-text">
                        Get your team in sync, no matter your location. <br /> Streamline
                        processes, create team rituals, and <br /> watch productivity
                        soar.
                    </p>
                    <a href="http://" className="btn-primary">
                        Lean More
                    </a>
                </div>
                <div className="social-icons">
                    <img src={images.databiz} />
                    <img src={images.audiophile} />
                    <img src={images.meet} />
                    <img src={images.make} />
                </div>
            </section>
        </main>
    )
}

export default Header