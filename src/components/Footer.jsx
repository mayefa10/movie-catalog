import React from 'react';
import { RiMovie2Fill } from 'react-icons/ri';
import { PiTelevisionSimpleLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';


const Footer = () => (
  <footer className=" font-small blue pt-4 bg-dark footer">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <Link className="text-light text-decoration-none" to='/'>MSCT
          <RiMovie2Fill className="" />
          <PiTelevisionSimpleLight className="" />
          </Link>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-3 mb-md-0 mb-3">
          <Link to="/home-movie" className="font-weight-bold text-light text-decoration-none">MOVIES</Link>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <Link to="/home-series" className="font-weight-bold text-light text-decoration-none">TV SERIES</Link>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023 Copyright:
      <Link className='font-weight-bold text-light text-decoration-none' to='/'>MSCT</Link>
    </div>
  </footer>
);

export default Footer;
