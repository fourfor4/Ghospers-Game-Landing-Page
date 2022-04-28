import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
     
        <Link to="/" >
          <div className='logo-div'>
            <Image
              src={require('./../../../assets/images/logo.png')}
              alt="Open"
              width={250}
              height={100} />
          </div>
        </Link>
    </div>
  );
}

export default Logo;