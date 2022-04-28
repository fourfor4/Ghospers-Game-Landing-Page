import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import './style.scss'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const defautlImg = {
    backgroundImage: `url(${require('../../assets/images/bg.png')})`,
    backrgoundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height:'100vh',
    width:'100vw',
    backgroundAttachment:'fixed',
    display:'flex',
    alignItems:'center'
  }
  return (
    <section
      {...props}
      className={outerClasses}
      style={defautlImg}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content" id="txt-div">
            <div className="mt-0 mb-5 reveal-from-left montserrat white-color title-size" data-reveal-delay="1000" >
              Ghospers Game
            </div>
            <div className="container-xs">
              <div className="m-0 mb-32 reveal-from-left mb-3" data-reveal-delay="1100" style={{color:'white',fontSize:'28px'}}>
                  Dive into Ghostalia a Blockchain Magic Based PvP game built on the Unreal Engine
                </div>
              <div className="reveal-from-left" data-reveal-delay="1200">
                <ButtonGroup>
                  <Button tag="a"  wideMobile href="https://opensea.io/collection/ghospers" style={{backgroundColor:'#5aceff', color:'white',borderRadius:'3rem'}}>
                    Trade NFTs
                    </Button>
                    <Button tag="a"  wideMobile href="https://pancakeswap.finance/swap?outputCurrency=0x4a0cc0876ec16428a4fa4a7c4c300de2db73b75b" style={{backgroundColor:'#5aceff', color:'white',borderRadius:'3rem'}}>
                      Buy GHSP$
                    </Button>
                    <Button tag="a"  wideMobile href="https://staking.ghospers.com" style={{backgroundColor:'#5aceff', color:'white',borderRadius:'3rem'}}>
                      GHSP Staking Now Live
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;