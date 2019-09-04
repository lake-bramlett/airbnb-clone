import React from 'react';
import { Link } from 'react-router-dom';
import minusSign from './../assets/minus.png';
import plusSign from './../assets/plus.png';

function DropdownBox() {
  return (
    <div>
      <div className="guest-option-box">
        <div className="guest adults">
          <h3 className="guest-headers"> Adults</h3>
          <div className="guest-count">
          <div className="decrement">
          <img className="container__image" alt="plus sign" src={minusSign} />
          </div>
            <div className="count">
              <p>0</p>
            </div>
            <div className="increment">
            <img className="container__image" alt="plus sign" src={plusSign} />
            </div>
          </div>
        </div>
        <div className="guest adults">
          <h3 className="guest-headers">Children</h3>
          <div className="guest-count">
          <div className="decrement">
          <img className="container__image" alt="plus sign" src={minusSign} />
          </div>
            <div className="count">
              <p>0</p>
            </div>
            <div className="increment">
            <img className="container__image" alt="plus sign" src={plusSign} />
            </div>
          </div>
        </div>
        <div className="guest adults">
          <h3 className="guest-headers">Inftants</h3>
            <div className="guest-count">
            <div className="decrement">
            <img className="container__image" alt="plus sign" src={minusSign} />
            </div>
              <div className="count">
                <p>0</p>
              </div>
              <div className="increment">
              <img className="container__image" alt="plus sign" src={plusSign} />
              </div>
            </div>
        </div>
      </div>
      <h5 className="apply">Apply</h5>
    </div>
  );
}

export default DropdownBox;
