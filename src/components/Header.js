import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <div className='card-image'>
        <figure className="image is-16by9">
          <img src={props.car.image} alt={props.car.name} />
        </figure>
      </div>
      <div className='card-content'>
        <h2 className='title'>{props.car.name}</h2>
        <p className='subtitle'>Amount: ${props.car.price}</p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {    
    car: state.car
  };
};

export default connect(mapStateToProps)(Header);
