import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './../assets/arrow.png';
import DropdownBox from './DropdownBox';

function Bookingbox() {
  return (
    <div>
      <div className="bookingbox">
      <h2>Book unique places to stay and things to do.</h2>
      <form>
        <label>Where</label><br />
        <input placeholder="Anywhere"></input>
        <div className="check-in">
          <label>Check-in</label><br />
          <input type="date" placeholder="mm/dd/yyyy"></input>
        </div>
        <div className="check-out">
          <label>Check-out</label><br />
          <input type="date" placeholder="mm/dd/yyyy"></input>
        </div>
        <label>Guests</label><br />
        <button className="guests">Guests <div className="arrow">
          <img className="container__image" alt="arrow logo" src={arrow} />
        </div></button>
        <div className="guest-options">
          <DropdownBox />
        </div>
        <button className="search" type="submit">Search</button>
      </form>
      </div>
    </div>
  );
}

export default Bookingbox;
