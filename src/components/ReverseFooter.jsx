import React from 'react'
import TV from "../assets/tv.png"
import Vid from "../assets/video-tv-in-0819.m4v"

function ReverseFooter() {
  return (
    <div className="story-card">
    <div className="animation-card flipped">
    <div className="story-text">
        <h1 className="card-title">
        Download your shows to watch offline.
        </h1>
        
        <h2 className="subtitle">
        Save your favourites easily and always have something to watch.
        </h2>
    </div>

    <div className="img-container">
    <div className="animation-container">
        <img className="card-img" 
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />

        <div className="card-animation">
        {/* <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" /> */}
        </div>
    </div>

    </div>

    </div>

    </div>
   
  );
  
}

export default ReverseFooter