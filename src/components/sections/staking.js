import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Images from '../../shared/images';
import './style.scss'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const StakingData = ({
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
      <section>
        <section
        {...props}
        className={outerClasses}
        style={defautlImg}
        >
            <div className="container-sm" id="staking">
                <div className={innerClasses}>
                <div className="hero-content mt-5" id="txt-div">
                    <div className='d-flex align-items-center reveal-from-left mt-5 row' data-reveal-delay="1000">
                        <div className="mt-0 reveal-from-left montserrat white-color title-size col-sm-12 col-lg-6" >
                            Staking Info 
                        </div>
                        <div className='col-sm-12 col-lg-6'>

                          <Button tag="a"className="align-items-center white-color mx-3"  id="btn" wideMobile href="https://staking.ghospers.com" >
                              GHSP Staking Now Live !
                          </Button>
                        </div>
                    </div>
                    <div className="container">
                        <div id="staking-info" className="m-0 mb-32 reveal-from-left mb-3 text-start" data-reveal-delay="1100" style={{color:'white',fontSize:'28px'}}>
                            <div >Our staking mechanism is simple:</div>  
                            <div>The APY above shows how much you can earn on your amount.</div>
                            <div>The % share shows how much of the pool you own.</div>
                            <div>To stake, enter the amount of GHSP you want and follow metamask instructions.</div>
                            <div> You can do two things after staking:</div>
                            <div>- Harvest</div>
                            <div>- Unstake</div>
                            <div>For Harvesting, we take a 10% fee on the harvested amount. This fee will be added back to the staking pool or burned.</div>
                            <div> When unstaking you will pay a fee depending on your last staking date:</div>
                            <div> 7 days or less      20%,</div>
                            <div> 8 ~ 14 days           15%,</div>
                            <div>15 ~ 21 days          10%,</div>
                            <div>22  ~ 30 days        5%,</div>
                            <div>30 or more days   0%</div>   
                            <div>The fees for unstaking will be added back to the staking pool or burned.</div>
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
        <section id="officalLink" className='container'>
            <div className='title-size white-color flex1'>Official Links</div>
            <div className='connection flex1 text-align-center'>
            <a href='https://opensea.io/collection/ghospers'><u>Opensea</u></a>
            <a href='https://pancakeswap.finance/swap?outputCurrency=0x4a0cc0876ec16428a4fa4a7c4c300de2db73b75b'><u>Pancakeswap</u></a>
            <a href='https://twitter.com/GhospersGame'><u>Twitter</u></a>
            <a href='https://t.me/ghospersgamepublic'><u>Telegram chat</u></a>
            <a href='https://t.me/Ghospersgame'><u>Telegram Announcements</u></a>
            <a href='https://t.co/f6iL5goH0d?amp=1'><u>Discoard</u></a>
            <a href='https://www.facebook.com/GhospersGame/'><u>Facebook</u></a>
            <a href='https://instagram.com/ghospers.game?utm_medium=copy_link'><u>Instagram</u></a>
            <a href='https://vm.tiktok.com/ZMLdmYCcN/'><u>TikTok</u></a>
            <a href='https://bscscan.com/address/0x4a0Cc0876EC16428A4Fa4a7C4c300dE2DB73b75b'><u>Contract Addres(BSC Scan)</u></a>
            </div>
        </section>
        <section id="footer" className='container mb-5'>
            <div className='row'>
            <dv className="col-xs-12  col-sm-4 title-color fs-5 mb-1"> Ghospers</dv>
            <div className='col-xs-0 col-sm-6 d-flex align-items-center white-color font-16 mb-1'>Connect</div>
            </div>
            <div className='row'>
            <div className='col-xs-12 col-sm-4 font-16 white-color mb-1'>
                <a href='mailto:info@ghospers.com'><u>info@ghospers.com</u></a>
            </div>
            <div className='col-xs-0 col-sm -8 d-flex align-items-center white-color font-16 mb-1'>Join our social channels to keep up to date with our developments and chat directly with the team</div>
            </div>
            <div className='row mt-2'>
            <div className='col-xs-12 col-sm-4 '></div>
            <div className='col-xs-0 col-sm -8 d-flex align-items-center white-color font-16 mb-1'>
                <a href='https://www.facebook.com/GhospersGame/'>
                <img className='icon-img' src={Images.icon1}></img>
                </a>
                <a href='https://instagram.com/ghospers.game?utm_medium=copy_link'>
                <img className='mx-4 icon-img' src={Images.icon2}></img>
                </a>
                <a href='https://t.me/ghospersgamepublic'>
                <img className='mx-3 icon-img' src={Images.icon3}></img>
                </a>
                <a href='https://twitter.com/ghospersgame?s=21'>
                <img className='mx-3 icon-img' src={Images.icon4}></img>
                </a>
                <a href='https://discord.com/invite/6rgqWdJ7VP'>
                <img className='mx-3 icon-img' src={Images.icon5}></img>
                </a>
                <a href='https://vm.tiktok.com/ZMLdmYCcN/'>
                <img className='mx-3 icon-img' src={Images.icon6}></img>
                </a>
                <a href='https://github.com/l3oxer/Ghospers-Vesting-Contract'>
                <img className='mx-3 icon-img' src={Images.icon7}></img>
                </a>

            </div>
            </div>
        </section>
        <section className='final-footer black-color d-flex justify-content-around align-items-center' style={{backgroundColor:'#5aceff'}}>
            <div>
            <span className='font-16'>
                ©2021 Ghospers Game.
            </span>
            </div>
            <div className='d-flex'>
            <div className='font-16'><a href='https://www.ghospers.com/privacy-policy'><u className=' black-color'>Privacy Policy</u></a></div>
            <div className='font-16 mx-3'><a href='https://www.ghospers.com/terms-of-use'><u className=' black-color'>Terms of Use</u> </a></div>
            </div>
        </section>
      </section>
  );
}

StakingData.propTypes = propTypes;
StakingData.defaultProps = defaultProps;

export default StakingData;