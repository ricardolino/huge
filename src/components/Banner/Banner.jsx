import React from 'react';

import './banner.sass';

import imageURL from '../../assets/images/background-image.jpg';

const Banner = () => {
    return (
        <div id="banner" className="banner">
            <h2 className="banner--title">Get paid for <br /> give a shit</h2>
            <img className="banner--image" src={ imageURL } alt="Huge" />
        </div>
    );
}

export default Banner;