import React, { useEffect } from 'react';
import Header from '../layout/Header';
import './style.scss'
import Images from '../../shared/images';
const Team =() => {
  return(
        <div style={{backgroundColor:'#00060f'}}>
            <Header />
            <section id="team" className='Montserrat '>
                <div className='title-size white-color Montserrat  title container text-center mb-5'>Meet Our Core Team</div>
                <div className='div1 row'>
                    <div className='col-sm-12 col-lg-5 d-flex justify-content-center'>
                        <img src={require('../../assets/images/team1.png')}></img>
                    </div>
                    <div className='col-sm-12 col-lg-6 text-center white-color'>
                        <div className='fs-1'>Fares AT</div>
                        <div className='fs-6 fst-italic fw-bolder m-2'>CEO & Founder</div>
                        <div className='white-color d-flex justify-content-center flex-column font-16'>
                            <div className='infos'>
                                Fares is an avid gamer. Games like Final Fantasy & Dark Souls are
                                his main area of enjoyment. Additionally, a Blockchain enthusiast
                                with experiences working on advising HNW clients regarding DeFi &
                                other Blockchain solutions.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='div2 row'>
                    <div className=' d-flex justify-content-center' id="right-side">
                        <img src={require('../../assets/images/team2.png')}></img>
                    </div>
                    <div className='col-sm-12 float-right col-lg-6 text-center white-color '>
                        <div className='fs-1'>Mo Basem (Boxer)</div>
                        <div className='fs-6 fst-italic fw-bolder m-2'>CTO</div>
                        <div className='white-color d-flex justify-content-center flex-column font-16'>
                            <div className='infos'>
                                Like our CEO Fares, Boxer is an avid gamer. They  used to play Dark
                                Souls together, and have bonded over their passion towards online
                                games ever since. Boxer has developed several mobile games, and
                                has also aided in designing Battle Royales. He is a C# wiz and can
                                code anything and everything he thinks of!
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-0 float-right col-lg-5 d-flex justify-content-center ' id="left-side"> 
                        <img src={require('../../assets/images/team2.png')}></img>
                    </div>
                </div>

                <div className='div3 row'>
                    <div className='col-sm-12 col-lg-5 d-flex justify-content-center'>
                        <img src={require('../../assets/images/team3.png')}></img>
                    </div>
                    <div className='col-sm-12 col-lg-6 text-center white-color'>
                        <div className='fs-1'>Abdallah AT</div>
                        <div className='fs-6 fst-italic fw-bolder m-2'>COO & President of the Company</div>
                        <div className='white-color d-flex justify-content-center flex-column font-16'>
                            <div className='infos'>
                                Abdallah is the sound and voice of the company. He likes to spend
                                his time thinking of solutions for complex IT problems, and has built
                                infrastructures from the ground up for the biggest hotel chains in the
                                world. His IT know-how is a core and vital part of Ghospers Game.</div>
                        </div>
                    </div>
                </div>

                <div className='div4 row'>
                <div className='col-sm-12 d-flex justify-content-center' id="right-side">
                        <img src={require('../../assets/images/team4.png')}></img>
                    </div>
                    <div className='col-sm-1'></div>
                    <div className='col-sm-12 col-lg-6 text-center white-color mb-2'>
                        <div className='fs-1'>Justin Korenhof</div>
                        <div className='fs-6 fst-italic fw-bolder m-2'>CMO</div>
                        <div className='white-color d-flex justify-content-center flex-column font-16'>
                            <div  className='infos'>
                                Justin started his Blockchain journey at a young age back when he
                                and our CEO Fares first met. They both started investing in
                                cryptocurrencies and creating groups and meet-ups in Europe.
                                Justin's experience gave him a huge insight into creating hype and
                                buildups to games. He also loves beer, all the beer...
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-5 d-flex justify-content-center mb-2' id="left-side">
                        <img src={require('../../assets/images/team4.png')}></img>
                    </div>
                </div>

                <div className='div5 row '>
                    <div className='col-sm-12 col-lg-5 d-flex justify-content-center'>
                        <img src={require('../../assets/images/team5.png')}></img>
                    </div>
                    <div className='col-sm-12 col-lg-6 text-center white-color'>
                        <div className='fs-1'>Basim AlTaher</div>
                        <div className='fs-6 fst-italic fw-bolder m-2'>Lead 2D & NFT Designer</div>
                        <div className='white-color d-flex justify-content-center flex-column font-16'>
                            <div className='infos'>Basim, one of our team's first joiners, is a professional Manga artist.
                           He wowed us with his creative process of turning 2D sketches into
                           impeccable 3D designs. Basim is always low on sleep, all thanks to his
                           huge imagination and his full-time residence in the far-away-world of
                           drawing, sketching and making things come to life.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='join-div'>
                <div className='container d-flex justify-content-center align-items-center flex-column '>
                    <div className='title-size white-color mb-3'>
                        Want to Join us?
                    </div>
                    <div className='inner-div white-color'>
                        If  you're an unreal, out of the world, super cool ENgine Developer, Designer, and/or creative team player,
                        please send your CV and cover letter with the subject
                        <span className='black-color'>"Joining Chospers"</span> to
                       <a href='mailto:info@ghospers.com'> <u>info@ghospers.com</u> </a>and tell us why you'd make the perfect candidate.
                    </div>
                </div>
            </section>
            <section id="footer" className='container mb-5 mt-5'>
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
            <section className='final-footer black-color d-flex justify-content-around align-items-center row' style={{backgroundColor:'#5aceff'}}>
                <div className='col-xs-12 col-6 text-center'>
                    <span className='font-16'>
                        ©2021 Ghospers Game.
                    </span>
                </div>
                <div className='d-flex col-xs-12  col-6 text-center justify-content-center'>
                    <div className='font-16 '>
                        <a href='https://www.ghospers.com/privacy-policy'>
                            <u className=' black-color'>
                                Privacy Policy
                            </u>
                        </a>
                    </div>
                    <div className='font-16 mx-3 '>
                        <a href='https://www.ghospers.com/terms-of-use'>
                            <u className=' black-color'>Terms of Use</u>
                        </a>
                    </div>
                </div>
            </section>
        </div>
  ) 
};

export default Team;
