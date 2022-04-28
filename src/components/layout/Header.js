import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import './styles.scss';
const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);
  const [hiddenVal, setHiddenVal] = useState('Home');
  const nav = useRef(null);
  const hamburger = useRef(null);
  const [navbarHidden, setNavbarHidden] = useState(false);
  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );
  useEffect(()=>{
    setHiddenVal( localStorage.getItem('hiddenVal'));

  },[]);

  useEffect(()=>{
    if(! localStorage.getItem('hiddenVal')){
      localStorage.setItem('hiddenVal','Home');
    }
    let stateVal = localStorage.getItem('hiddenVal');
    console.log(stateVal,"???")
    if(stateVal != 'Home' && stateVal != 'staking' && stateVal != 'team'){
      window.scrollTo(0,document.getElementById(stateVal).offsetTop);
    }
  },[localStorage.getItem('hiddenVal')])

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      setNavbarHidden(true);
    } else {
      setNavbarHidden(false);
    }
  }
  function scrollToTop() {

  }

  return (
    <header
      {...props}
      className={classes}
    
    >
      <div className="container "
      //  style={hiddenVal == 0 ? {color:'#53beed'} : {color:'white'}}
       style={navbarHidden ? {display:'none', transitionDuration:'3s'}: {display:'block',transitionDuration:'3s'}}
      >
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      'justify-content-end',
                      navPosition && `header-nav-${navPosition}`
                    )}
                    >
                    <li>
                    <Link to="/" 
                     style={hiddenVal == 'Home' ? {color:'#53beed'} : {color:'white'}}
                      onClick={()=>{
                        setHiddenVal('Home');
                        localStorage.setItem('hiddenVal','Home');                     
                    }}>
                        Home
                    </Link>
                    </li>
                    <li>
                      <Link to="/staking-info" 
                      style={hiddenVal == 'staking' ? {color:'#53beed'} : {color:'white'}}
                      onClick={()=>{
                        setHiddenVal('staking');
                        localStorage.setItem('hiddenVal','staking');   
                    }}>Staking Info</Link>
                    </li>
                    <li>
                    <Link to="/" 
                          style={hiddenVal == 'gameplay' ? {color:'#53beed'} : {color:'white'}}
                          onClick={()=>{
                            setHiddenVal('gameplay');
                            localStorage.setItem('hiddenVal','gameplay');   
                          }}
                        >
                          Gameplay
                    </Link>
                    </li>
                    <li>
                    <Link to="/" 
                       style={hiddenVal == 'investorSection' ? {color:'#53beed'} : {color:'white'}}
                        onClick={()=>{
                          setHiddenVal('investorSection');
                          localStorage.setItem('hiddenVal','investorSection');   
                        }}
                    >
                      Partners&Investors
                    </Link>
                    </li>
                    <li>
                    <Link to="/" 
                        style={hiddenVal == 'NFTlist' ? {color:'#53beed'} : {color:'white'}}
                        onClick={()=>{
                          setHiddenVal('NFTlist');
                          localStorage.setItem('hiddenVal','NFTlist');   
                        }}
                      >
                        NFTs
                      </Link>
                    </li>
                    <li>
                      <Link to='/team'                     
                       style={hiddenVal == 'team' ? {color:'#53beed'} : {color:'white'}}
                        onClick={()=>{
                          setHiddenVal('team');
                          localStorage.setItem('hiddenVal','team');   
                        }}>
                          Team
                      </Link>
                    </li>
                    <li>
                      <a href="https://ghospers.gitbook.io/ghospersgame/" 
                       style={hiddenVal == 'book' ? {color:'#53beed'} : {color:'white'}}
                      onClick={()=>{
                      setHiddenVal('book');
                      localStorage.setItem('hiddenVal','book');   
                    }}>Gitbook</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </>}
        </div>
      </div>
      <div className='footer-bag'>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
