import React from 'react';
import Bookingbox from './Bookingbox';
import HomesList from './HomesList';

class HomeSplash extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props);
    return (
      <div className="splash-container">
        <div className="splash-body">
          <Bookingbox />
        </div>
        <HomesList homesList={this.props.homesList}/>
      </div>
    );
  }
}

export default HomeSplash;
