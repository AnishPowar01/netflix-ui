import React from 'react'
import styled from 'styled-components'
import TV from "../assets/tv.png"
import Vid from "../assets/video-tv-in-0819.m4v"

function Footer() {
  return (
    <div className="story-card">
    <div className="animation-card">
    <div className="story-text">
        <h1 className="card-title">
            Enjoy on Your TV.
        </h1>
        
        <h2 className="subtitle">
        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
        </h2>
    </div>

    <div className="img-container">
    <div className="animation-container">
        <img className="card-img" src={TV} />

        <div className="card-animation">
            <video className="card-video" autoPlay={true} playsInline ={true} muted={true} loop ={true} src={Vid}></video>
        </div>
    </div>

    </div>

    </div>

    </div>
   
  );
}

export default Footer



