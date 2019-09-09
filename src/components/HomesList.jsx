import React, {Component} from 'react'
import Home from './Home.js'

export default class HomesList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="homes-list">
        <ul>
        {this.props.homesList.map((home, index) => (
          <li>
            <Home home={home} key={index}/>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
