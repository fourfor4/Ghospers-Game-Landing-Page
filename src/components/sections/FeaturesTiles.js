import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import './style.scss'
import Images from '../../shared/images';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { isArrayLike } from 'lodash';
import NFTModal from '../elements/NFTModal';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const options = {
  responsiveClass: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
      rows:2
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 6,
    },
    1500: {
      items: 8,
    }

  }
};

var arrylist=[
'nft1',
'nft2',
'nft3',
'nft4',
'nft5',
'nft6',
'nft7',
'nft8',
'nft9',
'nft10',
'nft11',
'nft12',
'nft13',
'nft14',
'nft15',
'nft16',
'nft17',
'nft18'
];
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const[currentNFT, setCurrentNFT]= useState(1);
  const [openModal, setOpenModal] = useState(false);
  const[closeModal, setCloseModal] = useState(false);
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const defautlImg = {
    backgroundImage: `url(${require('../../assets/images/right.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }
  const defautlImgRight = {
    backgroundImage: `url(${require('../../assets/images/left.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }

  const investor1 = {
    backgroundImage: `url(${require('../../assets/images/1.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    flex:'1',
    width:'142px',
    height:'132px'
  }
  const investor2 = {
    backgroundImage: `url(${require('../../assets/images/2.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    flex:'1',
    width:'250px',
    height:'70px'
  }
  const investor3 = {
    backgroundImage: `url(${require('../../assets/images/3.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    flex:'1',
    width:'142',
    height:'108px'
  }
  const investor4 = {
    backgroundImage: `url(${require('../../assets/images/4.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    flex:'1',
    width:'252px',
    height:'77px'
  }
  const investor5 = {
    backgroundImage: `url(${require('../../assets/images/5.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    width:'60px',
    height:'60px'
  }
  const investor6 = {
    backgroundImage: `url(${require('../../assets/images/6.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    width:'82px',
    height:'89px'
  }
  const investor7 = {
    backgroundImage: `url(${require('../../assets/images/7.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin:'0 auto',
    width:'78px',
    height:'78px'
  }
  const imgDeveloper = {
    backgroundImage: `url(${require('../../assets/images/developer.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    height:'100px'
  }

  const underImg = {
    backgroundImage: `url(${require('../../assets/images/underImg.png')})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height:'80vh',
  }

  return (
    <section>
      <section
        id="gamesection"
      >
        <div id="gameplay">
            <div className='title-size reveal-from-left white-color' data-reveal-delay="300">Gameplay</div>
          <div className={innerClasses} id="gamepaly-child">
            <div className={tilesClasses}>

            <div className="tiles-item reveal-from-top" data-reveal-delay="500">
                <div className="tiles-item-inner shape-div">
                  <div className='shape  '>
                  </div>
                  <div className='white-color'>
                    <div style={{margin:'1rem 0.3rem'}}>
                      <p style={{textAlign:'left',marginBottom:'0px'}}>PVP</p>
                      <p style={{fontSize:'16px'}}>Legendary Fights</p>
                    </div>
                  </div>
                    <div className='white-color img-div'>
                      Whether in atournament or in the vast world of Ghostalia, you can experience strategic PVP fights or massvie all out Guild Wars
                    </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="500" style={defautlImg}>
                <div className="tiles-item-inner shape-div">
                  <div className='shape'>
                  </div>
                  <div className='white-color'>
                    <div style={{margin:'1rem 0.3rem'}}>
                      <p style={{textAlign:'left',marginBottom:'0px'}}>PVE</p>
                      <p style={{fontSize:'16px'}}>Explore and Battle</p>
                    </div>
                  </div>
                    <div className='white-color img-div'>
                      The world is massive, you can visit cities of bandit Ghospers, enjoy fighting different enemies and gather loot.
                    </div>
                </div>
              </div>
              <div className="tiles-item reveal-from-top" data-reveal-delay="500" >
                <div className="tiles-item-inner shape-div">
                  <div className='shape'>
                  </div>
                  <div className='white-color'>
                    <div style={{margin:'1rem 0.3rem'}}>
                      <p style={{textAlign:'left',marginBottom:'0px'}}>StoryLine</p>
                      <p style={{fontSize:'16px'}}>Main and Unending</p>
                    </div>
                  </div>
                    <div className='white-color img-div'>
                      There is around 15 hours of storyline gameplay and quests, as well as unending quests which can be done for fun.
                    </div>
                </div>
              </div>
              <div className="tiles-item reveal-from-top" data-reveal-delay="500" style={defautlImgRight}>
                <div className="tiles-item-inner shape-div">
                  <div className='shape'>
                  </div>
                  <div className='white-color'>
                    <div style={{margin:'1rem 0.3rem'}}>
                      <p style={{textAlign:'left',marginBottom:'0px'}}>Ownership</p>
                      <p style={{fontSize:'16px'}}>NFT Based</p>
                    </div>
                  </div>
                    <div className='white-color img-div'>
                    The world is massive, you can visit cities of bandit Ghospers, enjoy fighting different enemies and gather loot.
                    </div>
                </div>
              </div>
              <div className="tiles-item reveal-from-top" data-reveal-delay="500">
                <div className="tiles-item-inner shape-div">
                  <div className='shape'>
                  </div>
                  <div className='white-color'>
                    <div style={{margin:'1rem 0.3rem'}}>
                      <p style={{textAlign:'left',marginBottom:'0px'}}>Play to Earn</p>
                      <p style={{fontSize:'16px'}}>GHOSP$ Tokens</p>
                    </div>
                  </div>
                    <div className='white-color img-div'>
                    Your experience matters. Learning more spells, strategies and exploring the world assists you in tournaments and in earning Tokens.
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id="investorSection">
        <div id="investors">
            <div className='title-size reveal-from-left white-color' data-reveal-delay="200" style={{marginBottom:'3rem'}}>
              <div>Partners</div>
              <div>& Investors</div>
            </div>
            <div className='investors1'>
              <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor1}></div>
              <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor2}></div>
              <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor3}></div>
              <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor4}></div>

            </div>
            <div className='investors2'>
              <div className='flex1'>
                <div className='txt-title white-color reveal-from-top text-align-center mb-20' data-reveal-delay="300">
                  Advisory Teams
                </div>
                <div className='d-flex justify-content-space-around'>
                  <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor5}></div>
                  <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor6}></div>
                </div>
              </div>
              <div className='flex1'>
                <div className='txt-title white-color reveal-from-top text-align-center mb-20' data-reveal-delay="300">Decentralised Exchanges</div>
                <div>

                  <div className="tiles-item reveal-from-top" data-reveal-delay="300" style={investor7}>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section id="gameDeveloper">
          <div className='txt-title text-align-center white-color mb-20 reveal-from-left'  data-reveal-delay="100">Game Developer</div>
          <div>

            <div style={imgDeveloper} ></div>
          </div>
      </section>
      <section id="NFTlist" className='mb-5'>
        <div className='text-align-center txt-title white-color txt-NFT reveal-from-right pb-4'>
          <div>10,000</div>
          <div>NFT Characters</div>
        </div>
        <div id="carousel" className='reveal-from-top'  data-reveal-delay="500">
        <OwlCarousel
            className="slider-items owl-carousel mb-4"
            {...options}
            autoplay={true}
          >
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(1);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft1}  className="nft-img"/>
              </div>
              <div
              id='img-list'
               onClick={()=>{
                setCurrentNFT(2);
                setOpenModal(true)
              }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft2} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
              onClick={()=>{
                setCurrentNFT(3);
                setOpenModal(true)
              }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft3}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(4);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft4} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(5);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft5}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(6);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft6} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(7);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft7}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(8);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft8} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(9);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft9}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(10);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft10} className="nft-img" />
              </div>
            </div>
              <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(11);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft11}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(12);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft12} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(13);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft13}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(14);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft14} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(15);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft15}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(16);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft16} className="nft-img" />
              </div>
            </div>
            <div className="item">
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(17);
                  setOpenModal(true)
                }}
              >
                <div>
                    <FavoriteBorderIcon className='black-color love-svg'/>
                </div>
                <img src={Images.nft17}  className="nft-img"/>
              </div>
              <div
              id='img-list'
                onClick={()=>{
                  setCurrentNFT(18);
                  setOpenModal(true)
                }}
              >
                <img src={Images.nft18} className="nft-img" />
              </div>
            </div>
        </OwlCarousel>
          
        </div>
        <div className='text-align-center mb-5 mt-3'>
          <a href='https://opensea.io/collection/ghospers'>
            <button  style={{backgroundColor:'#5aceff', color:'white',borderRadius:'3rem', fontSize:'24px',padding:'1.5rem 3rem'}} className="mt-4 mb-5">
              Buy on OpenSea
            </button>
          </a>
        </div>
      </section>
      <section style={underImg} id="underIMg">
        <div className='white-color '>
          <div className='title-size mb-20 reveal-from-left' data-reveal-delay="300">
            Blockchain is 
            Ownership
          </div>
          <div className='txt-color reveal-from-left' data-reveal-delay="500">
            In the Lands and cities of Ghostalis, the Magic of Blockchain is applied for everyone to be an owner.
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
          <a href='https://t.co/f6iL5goH0d?amp=1'><u>Discord</u></a>
          <a href='https://www.facebook.com/GhospersGame/'><u>Facebook</u></a>
          <a href='https://instagram.com/ghospers.game?utm_medium=copy_link'><u>Instagram</u></a>
          <a href='https://vm.tiktok.com/ZMLdmYCcN/'><u>TikTok</u></a>
          <a href='https://bscscan.com/address/0x4a0Cc0876EC16428A4Fa4a7C4c300dE2DB73b75b'><u>Contract Addres(BSC Scan)</u></a>
        </div>
      </section>
      <section id="footer" className='container mb-5'>
        <div className='row'>
          <div className="col-xs-12  col-sm-4 title-color fs-5 mb-1"> Ghospers</div>
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
      <NFTModal
            currentNFT = {currentNFT}
            openModal={openModal}
            setOpenModal ={setOpenModal}
            id="video-modal"
            show={openModal}
            handleClose={closeModal}
      />
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;