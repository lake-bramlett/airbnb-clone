import React, {Component} from 'react'
import Home from './Home.js'
import star from '../assets/star.jpg'

export default class HomesList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { type, location, name, rate, rating, imgUrl } = this.props.home
    return (
      <div className="home-card">
        <div className="home-card-image">
          <img src={imgUrl} alt={name} />
        </div>
        <div className="home-sub-card">
          <div className="home-info">
            <span className="type">{type}</span>
            <span className="bullet" aria-hidden="true"> · </span>
            <span className="location">{location}</span>
          </div>
          <div className="home-name">
            {name}
          </div>
          <div className="home-rate">
            <span className="currency">$</span>{rate}<span className="per-night">/night</span>
          </div>
          <div className="home-rating">
            <div className="rating-star"><img src={star} alt="rating star" /></div>
            {rating}
          </div>
        </div>
      </div>
    )
  }
}
