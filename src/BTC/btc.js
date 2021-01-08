import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../database'
import '../index.css'
import './btc.css'
import btc from '../assets/img/btc/bitcoin.svg'
import b from '../assets/img/btc/btc.gif'
import mine from '../assets/img/btc/miner.svg'
import cart from '../assets/img/btc/mine-cart.svg'
import sign from '../assets/img/btc/enrollment.svg'
import earn from '../assets/img/btc/earnings.svg'
import deposit from '../assets/img/btc/deposit.svg'
import pay from '../assets/img/btc/payment-check.svg'
import any from '../assets/img/btc/analytics.svg'
import inter from '../assets/img/btc/user-interface.svg'
import cloud from '../assets/img/btc/cloud-computing.svg'

export default class BTC extends Component {
     constructor(props) {
         super(props);
         this.state = {
            view: 'View More'
         }
     }
     
     componentDidMount(){
        let baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[ scripts.length - 1 ];
        (function (){
        var appName = encodeURIComponent(window.location.hostname);
        if(appName===""){appName="local";}
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        var theUrl = baseUrl+'serve/v3/coin/chart?fsym=BTC&tsyms=USD,EUR,CNY,GBP';
        s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
        embedder.parentNode.appendChild(s);
        })();
     }

    date = new Date();

    viewI = 'more'

    view = (e)=>{
        e.preventDefault();
        let more = document.getElementsByClassName('more')
        if(this.viewI === 'more'){
            for(let m=0; m<more.length; m++){
                more[m].classList.remove('w3-hide')
            }
            this.setState({view: 'View Less'})
            this.viewI = 'less'
        }else if(this.viewI === 'less'){
            for(let m=0; m<more.length; m++){
                more[m].classList.add('w3-hide')
            }
            this.setState({view: 'View Less'})
            this.viewI = 'more'
        }
    }


    render() {
        return (
            <div >
                <Nav />
                <div className='w3-row' style={{marginTop: '50px', backgroundColor: '#eee', height: '500px'}}>
                    <div className='w3-padding w3-center'>
                        <h1 className='w3-padding w3-bold w3-center w3-text-orange' style={{marginTop: '50px'}}>WELCOME TO BITCOININVTS</h1>
                        <h5 className='w3-padding' style={{marginTop: '50px'}}>MINE THE HOTTEST COMMODITIES OF {this.date.getFullYear()}: BITCOIN, ETHEREUM, LITECOIN AND OTHERS</h5>
                        <h3 className='w3-padding w3-bold w3-center w3-text-orange' style={{marginTop: '20px'}}>WHAT IS BITCOININVTS?</h3>
                        <div className='w3-half' style={{marginTop: '30px'}}>
                            <div className='w3-col m8 l8 s7 w3-padding'>
                                <p>Bitcoininvts - is a profesional platform, which is created within Bitcoin mining.</p>
                            </div>
                            <div className='w3-col m3 l3 s3 w3-padding'>
                                <img src={mine} alt='' className='w3-padding' style={{width: '100px', height: '100px'}} />
                            </div>
                        </div>
                        <div className='w3-half w3-border-left' style={{marginTop: '30px'}}>
                            <div className='w3-col m3 l3 s3'>
                                <img src={cart} alt='' className='w3-padding' style={{width: '100px', height: '100px'}} />
                            </div>
                            <div className='w3-col m8 l8 s7 w3-padding'>
                                <p>This is a niche platform, which allows Bitcoin resource owners to investing online.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w3-center w3-padding' style={{backgroundColor: '#eee'}}>
                    <button className='w3-btn w3-orange w3-text-white w3-margin-top w3-round w3-padding'>LATEST PAYOUT PROOF</button>
                </div>
                
                
                <div className='w3-row' id='plans' style={{marginTop: '70px'}}>
                    <div className='w3-center'>
                        <h2 className='w3-padding w3-orange w3-text-white w3-bold' style={{display: 'inline-block'}}>PLANS</h2>
                    </div>
                    <div style={{marginTop: '100px'}}>
                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>STARTER PLAN</h3>
                            <h4>3 DAYS</h4>
                            <p>$ 300 Minimum Instant withdrawal Principal Included</p>
                            <button className='w3-padding w3-btn w3-orange w3-text-white w3-round' style={{marginTop: '50px'}}>Invest Now</button>
                        </div>

                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>BRONZE PLAN</h3>
                            <h4>7 DAYS</h4>
                            <p>$ 500 Minimum Instant withdrawal Principal Included</p>
                            <button className='w3-padding w3-btn w3-orange w3-text-white w3-round' style={{marginTop: '50px'}}>Invest Now</button>
                        </div>

                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>SILVER PLAN</h3>
                            <h4>10 DAYS</h4>
                            <p>$ 1,000 Minimum Instant withdrawal Principal Included</p>
                            <button className='w3-padding w3-btn w3-orange w3-text-white w3-round' style={{marginTop: '50px'}}>Invest Now</button>
                        </div>

                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>GOLD PLAN</h3>
                            <h4>14 DAYS</h4>
                            <p>$ 1,500 Minimum Instant withdrawal Principal Included</p>
                            <button className='w3-padding w3-btn w3-orange w3-text-white w3-round' style={{marginTop: '50px'}}>Invest Now</button>
                        </div>
                    </div>
                </div>

                <div className='w3-row' style={{backgroundColor: '#eee', height: '550px'}}>
                    <div className='w3-center 'style={{marginTop: '60px'}}>
                        <h2 className='w3-padding w3-orange w3-text-white w3-bold' style={{display: 'inline-block'}}>PROCESS</h2>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={sign} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>SIGN UP</h4>
                        </div>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={deposit} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>MAKE DEPOSIT</h4>
                        </div>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={earn} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>EARN HOURLY OR DAILY</h4>
                        </div>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={pay} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>REQUEST FOR PAYMENT</h4>
                        </div>
                    </div>
                </div>

                <div className='w3-row' style={{marginTop: '150px'}}>
                    <div className='w3-center'>
                        <h2 className='w3-padding w3-orange w3-text-white w3-bold' style={{display: 'inline-block'}}>OUR FEATURES</h2>
                    </div>
                    <div className='w3-row'>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={any} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>The highest rates of conversion and quality in our segment!</h4>
                        </div>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={inter} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>Easy in use and comprehensive user interface.</h4>
                        </div>
                    </div>
                    <div className='w3-row'>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={btc} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>Fast, convenient and anonymous Bitcoin Payments!</h4>
                        </div>
                        <div className='w3-col s6 m3 l3 w3-padding w3-center' style={{marginTop: '50px'}}>
                            <img src={cloud} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                            <h4 className='w3-padding w3-center w3-bold'>Our technologies sustain any load and handle any payment without a delay!</h4>
                        </div>
                    </div>
                </div>

                
                <div className='w3-row' id='videos' style={{marginTop: '150px'}}>
                    <div className='w3-center'>
                        <h2 className='w3-padding w3-orange w3-text-white w3-bold' style={{display: 'inline-block'}}>VIDEOS</h2>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <div className='w3-row'>
                            <div className='w3-half'>
                                <iframe width="640" title='1' height="360" src="https://www.youtube.com/embed/h5ob2CLxuwc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                            </div>
                            <div className='w3-half'>
                                <iframe width="640" title='2' height="360" src="https://www.youtube.com/embed/SUio-AqVkGE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                            </div>
                        </div>
                        

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe width="640" height="360" title='3' src="https://www.youtube.com/embed/AFzTIPWjhJo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe width="640" title='4' height="360" src="https://www.youtube.com/embed/ZvhuHLKM1Vs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe width="640" height="360" title='5' src="https://www.youtube.com/embed/Jk9WfQPbdmo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe width="640" title='6' height="360" src="https://www.youtube.com/embed/GQ03MJy5o30" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe width="640" height="360" title='7' src="https://www.youtube.com/embed/vuLjJMZJkJE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe width="640" title='8' height="360" src="https://www.youtube.com/embed/chwk4JeI5lM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe width="640" height="360" title='8' src="https://www.youtube.com/embed/qAf_mA0JDLE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe width="640" title='9' height="360" src="https://www.youtube.com/embed/yRPL4ijhZKo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-center'>
                            <button className='w3-btn w3-orange w3-margin-top w3-margin-bottom w3-text-white' onClick={e=>{this.view(e)}}>{this.state.view}</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <Nav />
                <div className='w3-row'  style={{marginTop: '60px'}}>
                    <div className='w3-col s12 m6 l6'>
                        <img src={b} alt='' className='svg' />
                    </div>
                    <div className='w3-rest w3-padding'>
                        <div className='w3-padding'>
                            <p>
                                Bitcoininvts was the improved trust management potential which became possible thanks to the team of highly skilled financial experts. The excellent performance demonstrated by the Company together with significantly increased assets have allowed the Company for offering its products and services in the open market, to everyone interested in profitable investing and getting stable revenue over a long term. The team of the Company’s financial specialists with strong command in bitcoin mining allows for effective analysis and financial situation. The Company employs experts on the full-time basis
                            </p>
                        </div>

                        <div className='w3-padding'>
                            <p>
                                Bitcoininvts - Your Profitable Kingdom offer everyone, who wishes to have stable extra earnings in the long term to invest in our Company. Once you make a deposit, you start getting daily interest and continue earning until your deposit term expires. After that you can either withdraw your deposit or invest it again, for another term, to continue getting daily interest. The money which we attract through our website will be used to increase our current assets and, consequently, increase our profit to share it with you as our investor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='w3-center'>
                    <div style={{display:'inline-block', marginTop: '200px'}}>
                        <form>
                            <input type='email' placeholder='Email:' id='email' className='w3-margin-top w3-border w3-round w3-input' />
                            <input type='password' placeholder='Password:' id='pass' className='w3-margin-top w3-border w3-round  w3-input' />
                            <button className='w3-orange w3-block w3-btn w3-margin-top w3-text-white w3-round'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='w3-center'>
                    <div style={{display:'inline-block', marginTop: '170px'}}>
                        <form>
                            <input type='email' placeholder='Email:' id='email' className='w3-margin-top w3-border w3-round w3-input' />
                            <input type='password' placeholder='Password:' id='pass' className='w3-margin-top w3-border w3-round  w3-input' />
                            <button className='w3-orange w3-block w3-btn w3-margin-top w3-text-white w3-round'>Login</button>
                        </form>
                        <p>OR</p>
                        <button className='w3-btn w3-block w3-margin-top w3-text-white w3-round' style={{backgroundColor: '#385898'}}>Facebook</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className='w3-bar w3-black w3-padding w3-top'>
                    <button id="openNav" class="w3-button w3-hide-large w3-hide-medium w3-xlarge" onClick={()=>{document.getElementById('side').style.display = 'block'}}>&#9776;</button>
                    <div className='w3-padding w3-hide-small'>
                        <Link className='w3-bar-item' style={{textDecoration: 'none'}} to='/'>HOME</Link>
                        <Link className='w3-bar-item' style={{textDecoration: 'none'}}  to='/About'>ABOUT US</Link>
                        <a className='w3-bar-item' style={{textDecoration: 'none'}}  href='/#plans'>PLANS</a>
                        <Link className='w3-bar-item' style={{textDecoration: 'none'}}  to='/Faq'>FAQ</Link>
                        <a className='w3-bar-item' style={{textDecoration: 'none'}}  href='/#videos'>VIDEOS</a>
                        <a className='w3-bar-item w3-btn w3-border w3-border-white w3-right' href='/Login'>LOGIN</a>
                        <a className='w3-bar-item w3-btn w3-border w3-border-white w3-right' href='/Register'>SIGN UP</a>
                    </div>
                </nav>
                <div class="w3-sidebar w3-bar-block w3-collapse w3-margin-top w3-animate-left w3-hide-large w3-hide-medium w3-card" style={{width: "200px"}} id="side">
                    <div className='w3-padding'>
                        <button class="w3-bar-item w3-button w3-hide-large w3-center"
                        onClick={()=>{document.getElementById('side').style.display = 'none'}}>Close &times;</button>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}} style={{textDecoration: 'none'}} to='/'>HOME</Link>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}}  to='/About'>ABOUT US</Link>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}}  href='/#plans'>PLANS</a>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}}  to='/Faq'>FAQ</Link>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}}  href='/#videos'>VIDEOS</a>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}} href='/Login'>LOGIN</a>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').style.display = 'none'}} href='/Register'>SIGN UP</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { About, Login, Sign }