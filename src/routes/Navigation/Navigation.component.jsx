import { React, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Fragment>
      <div className='navigation'>
        <div>Logo</div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>  
      <Outlet/>
    </Fragment>
    
  )
}
