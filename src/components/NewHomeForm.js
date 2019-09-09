import React, {Component} from 'react'
import {Link,Redirect} from 'react-router-dom'

let _type = null;
let _name = null;
let _location = null;
let _rating = null;
let _rate = null;

export default class NewHomeForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      stateChange: false
    }
  }

  handleNewHomeFormSubmission = (e) => {
    e.preventDefault()
    this.props.callback({type: _type.value,
                         location: _location.value,
                        rate: _rate.value,
                        rating: _rating.value,
                        name: _name.value,
                        imgUrl:"https://a0.muscache.com/im/pictures/14086670/8f77374b_original.jpg?aki_policy=large"})
    this.setState({ stateChange: true })
  }

  render(){

    const stateChange = this.state.stateChange;
    if(stateChange === true) {
      return <Redirect to="/" />
    }

    return (
      <div className="newhomes">
        <div className="bookingbox home-form">
          <form onSubmit={this.handleNewHomeFormSubmission}>
            <input
            type='text'
            id='type'
            placeholder='type'
            ref={(input) => {_type= input;}}/>
            <input
            type='text'
            id='location'
            placeholder='location'
            ref={(input) => {_location = input;}}/>
            <input
            type='text'
            id='name'
            placeholder='name'
            ref={(input) => {_name = input;}}/>
            <input
            type='text'
            id='rate'
            placeholder='rate'
            ref={(input) => {_rate= input;}}/>
            <input
            type='text'
            id='rating'
            placeholder='rating'
            ref={(input) => {_rating = input;}}/>
            <div className="center">
            <button className="form-btn" type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
