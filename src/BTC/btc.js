import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { db, firebase } from '../database'
import '../index.css'
import './btc.css'
import btc from '../assets/img/btc/bitcoin.svg'
import b from '../assets/img/btc/btc.gif'
import mine from '../assets/img/btc/miner.svg'
import cart from '../assets/img/btc/mine-cart.svg'
import sign from '../assets/img/btc/enrollment.svg'
import fb from '../assets/img/btc/logo.svg'
import earn from '../assets/img/btc/earnings.svg'
import deposit from '../assets/img/btc/deposit.svg'
import pay from '../assets/img/btc/payment-check.svg'
import any from '../assets/img/btc/analytics.svg'
import inter from '../assets/img/btc/user-interface.svg'
import cloud from '../assets/img/btc/cloud-computing.svg'
import $ from 'jquery'
import { Cookies } from 'react-cookie'
import axios from 'axios'



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
                        <h1 className='w3-padding w3-bold w3-center w3-text-orange' style={{marginTop: '50px'}}>WELCOME TO BELLISSIMO</h1>
                        <h5 className='w3-padding' style={{marginTop: '50px'}}>MINE THE HOTTEST COMMODITIES OF {this.date.getFullYear()}: BITCOIN, ETHEREUM, LITECOIN AND OTHERS</h5>
                        <h3 className='w3-padding w3-bold w3-center w3-text-orange' style={{marginTop: '20px'}}>WHAT IS BELLISSIMO?</h3>
                        <div className='w3-half' style={{marginTop: '30px'}}>
                            <div className='w3-col m8 l8 s7 w3-padding'>
                                <p>BELLISSIMO - is a profesional platform, which is created within Bitcoin mining.</p>
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
                    <a href='/Proof' className='w3-btn w3-orange w3-text-white w3-margin-top w3-round w3-padding'>LATEST PAYOUT PROOF</a>
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
                            <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} href='Login'>Invest Now</a>
                        </div>

                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>BRONZE PLAN</h3>
                            <h4>7 DAYS</h4>
                            <p>$ 500 Minimum Instant withdrawal Principal Included</p>
                            <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} href='Login'>Invest Now</a>
                        </div>

                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>SILVER PLAN</h3>
                            <h4>10 DAYS</h4>
                            <p>$ 1,000 Minimum Instant withdrawal Principal Included</p>
                            <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} href='Login'>Invest Now</a>
                        </div>

                        <div className='w3-container card w3-center w3-col s6 m3 l3 w3-padding'  style={{height: '450px'}}>
                            <h3 className='w3-padding w3-bold' style={{display:'inline-block'}}>GOLD PLAN</h3>
                            <h4>14 DAYS</h4>
                            <p>$ 1,500 Minimum Instant withdrawal Principal Included</p>
                            <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} href='Login'>Invest Now</a>
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
                            <a className='w3-bar-item w3-btn w3-border w3-border-white w3-right' href='Register' style={{textDecoration: 'none'}}><h4 className='w3-padding w3-center w3-bold'>SIGN UP</h4></a>
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
                    <div className='w3-col s6 m3 l3 w3-padding w3-container w3-center' style={{marginTop: '50px'}}>
                        <img src={any} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                        <h4 className='w3-padding w3-center w3-bold'>The highest rates of conversion and quality in our segment!</h4>
                    </div>
                    <div className='w3-col s6 m3 l3 w3-container w3-padding w3-center' style={{marginTop: '50px'}}>
                        <img src={inter} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                        <h4 className='w3-padding w3-center w3-bold'>Easy in use and comprehensive user interface.</h4>
                    </div>
                    <div className='w3-col s6 m3 l3 w3-container w3-padding w3-center' style={{marginTop: '50px'}}>
                        <img src={btc} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                        <h4 className='w3-padding w3-center w3-bold'>Fast, convenient and anonymous Bitcoin Payments!</h4>
                    </div>
                    <div className='w3-col s6 m3 l3 w3-container w3-padding w3-center' style={{marginTop: '50px'}}>
                        <img src={cloud} alt='' className='w3-padding' style={{width: '150px', height: '150px'}} />
                        <h4 className='w3-padding w3-center w3-bold'>Our technologies sustain any load and handle any payment without a delay!</h4>
                    </div>
                </div>

                
                <div className='w3-row' id='videos' style={{marginTop: '150px'}}>
                    <div className='w3-center'>
                        <h2 className='w3-padding w3-orange w3-text-white w3-bold' style={{display: 'inline-block'}}>VIDEOS</h2>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <div className='w3-row'>
                            <div className='w3-half'>
                                <iframe title='1' style={{width: '100%'}} src="https://www.youtube.com/embed/h5ob2CLxuwc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                            </div>
                            <div className='w3-half'>
                                <iframe title='2' style={{width: '100%'}} src="https://www.youtube.com/embed/SUio-AqVkGE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                            </div>
                        </div>
                        

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe style={{width: '100%'}} title='3' src="https://www.youtube.com/embed/AFzTIPWjhJo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe title='4' style={{width: '100%'}} src="https://www.youtube.com/embed/ZvhuHLKM1Vs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe style={{width: '100%'}} title='5' src="https://www.youtube.com/embed/Jk9WfQPbdmo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe title='6' style={{width: '100%'}} src="https://www.youtube.com/embed/GQ03MJy5o30" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe style={{width: '100%'}} title='7' src="https://www.youtube.com/embed/vuLjJMZJkJE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe title='8' style={{width: '100%'}} src="https://www.youtube.com/embed/chwk4JeI5lM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>

                        <div className='w3-hide more'>
                            <div className='w3-row'>
                                <div className='w3-half'>
                                    <iframe style={{width: '100%'}} title='8' src="https://www.youtube.com/embed/qAf_mA0JDLE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                </div>
                                <div className='w3-half'>
                                    <iframe title='9' style={{width: '100%'}} src="https://www.youtube.com/embed/yRPL4ijhZKo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
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
                                BELLISSIMO was the improved trust management potential which became possible thanks to the team of highly skilled financial experts. The excellent performance demonstrated by the Company together with significantly increased assets have allowed the Company for offering its products and services in the open market, to everyone interested in profitable investing and getting stable revenue over a long term. The team of the Company’s financial specialists with strong command in bitcoin mining allows for effective analysis and financial situation. The Company employs experts on the full-time basis
                            </p>
                        </div>

                        <div className='w3-padding'>
                            <p>
                                BELLISSIMO - Your Profitable Kingdom offer everyone, who wishes to have stable extra earnings in the long term to invest in our Company. Once you make a deposit, you start getting daily interest and continue earning until your deposit term expires. After that you can either withdraw your deposit or invest it again, for another term, to continue getting daily interest. The money which we attract through our website will be used to increase our current assets and, consequently, increase our profit to share it with you as our investor.
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


    cookies = new Cookies()
    login = (e) =>{
        e.preventDefault()
        let formData = {
            email: e.target.elements.email.value,
            password: e.target.elements.pass.value,
        }
        db.collection('Tino').doc('BTC').collection('Users').doc(formData.email).get()
        .then(e=>{
            if(e.exists){
                if(e.data().email === formData.email && e.data().password === formData.password){
                    this.cookies.set('user', formData.email)
                    window.location.assign('/Dashboard')
                }else{
                    alert('Incorrect Email/Password')
                }
            }
        })

    }

    render() {
        return (
            <div>
                <Nav />
                <div className='w3-center'>
                    <div style={{display:'inline-block', marginTop: '200px'}}>
                        <form onSubmit={this.login}>
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

    cookies = new Cookies();

    sign = (e) => {
        e.preventDefault()
        let formData = {
            email: e.target.elements.email.value,
            password: e.target.elements.pass.value,
            process: 'normal',
            id: `${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)} ${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)} ${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}`
        }
        db.collection('Tino').doc('BTC').collection('Admin').doc('Users').get()
        .then(c=>{
            if(c.exists){
                let all = [...c.data().users]
                if(all.indexOf(formData.email) === -1){
                    db.collection('Tino').doc('BTC').collection('Users').doc(formData.email).set({
                        email: formData.email,
                        password: formData.password,
                        process: formData.process,
                        id: formData.id,
                        one: 0,
                        two: 0,
                        three: 0,
                        four: 0,
                        five: 0,
                        six: 0,
                        balance: 0
                    })
                    .then(()=>{
                        this.cookies.set('user', formData.email)
                        window.location.assign('/Dashboard')
                        db.collection('Tino').doc('BTC').collection('Admin').doc('Users').update({users: firebase.firestore.FieldValue.arrayUnion(formData.email)})
                        axios.post('/sign', formData)
                    })
                }else{
                    alert('User already exist')
                }
            }else{
                db.collection('Tino').doc('BTC').collection('Users').doc(formData.email).set({
                    email: formData.email,
                    password: formData.password,
                    process: formData.process,
                    id: formData.id,
                    one: 0,
                    two: 0,
                    three: 0,
                    four: 0,
                    five: 0,
                    six: 0,
                    balance: 0,
                })
                .then(()=>{
                    this.cookies.set('user', formData.email)
                    window.location.assign('/Dashboard')
                    axios.post('/sign', formData)
                    db.collection('Tino').doc('BTC').collection('Admin').doc('Users').set({users: firebase.firestore.FieldValue.arrayUnion(formData.email)})
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <div className='w3-center'>
                    <div style={{display:'inline-block', marginTop: '170px'}}>
                        <form onSubmit={this.sign}>
                            <input type='email' placeholder='Email:' id='email' className='w3-margin-top w3-border w3-round w3-input' required />
                            <input type='password' placeholder='Password:' id='pass' className='w3-margin-top w3-border w3-round  w3-input' required />
                            <button className='w3-orange w3-block w3-btn w3-margin-top w3-text-white w3-round'>Sign Up</button>
                        </form>
                        <p>OR</p>
                        <a href='/FacebockLoginAuth' className='w3-btn w3-block w3-margin-top w3-text-white w3-round' style={{backgroundColor: '#385898'}}>Facebook</a>
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
                    <button id="openNav" className="w3-button w3-hide-large w3-hide-medium w3-xlarge" onClick={()=>{document.getElementById('side').classList.remove('w3-hide')}}>&#9776;</button>
                    <div className='w3-padding w3-hide-small'>
                        <Link className='w3-bar-item' style={{textDecoration: 'none'}} to='/'>HOME</Link>
                        <a className='w3-bar-item' style={{textDecoration: 'none'}}  href='/About'>ABOUT US</a>
                        <a className='w3-bar-item' style={{textDecoration: 'none'}}  href='/#plans'>PLANS</a>
                        <Link className='w3-bar-item' style={{textDecoration: 'none'}}  to='/Faq'>FAQ</Link>
                        <a className='w3-bar-item' style={{textDecoration: 'none'}}  href='/#videos'>VIDEOS</a>
                        <a className='w3-bar-item w3-btn w3-border w3-border-white w3-right' href='Login'>LOGIN</a>
                        <a className='w3-bar-item w3-btn w3-border w3-border-white w3-right' href='Register'>SIGN UP</a>
                    </div>
                </nav>
                <div className="w3-sidebar w3-bar-block w3-hide w3-margin-top w3-animate-left w3-card" style={{width: "200px"}} id="side">
                    <div className='w3-padding'>
                        <button className="w3-bar-item w3-button w3-center"
                        onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}>Close &times;</button>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} style={{textDecoration: 'none'}} to='/'>HOME</Link>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}  to='/About'>ABOUT US</Link>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}  href='/#plans'>PLANS</a>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}  to='/Faq'>FAQ</Link>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}  href='/#videos'>VIDEOS</a>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} href='Login'>LOGIN</a>
                        <a className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} href='Register'>SIGN UP</a>
                    </div>
                </div>
            </div>
        )
    }
}

class Fb extends Component {


    cookies = new Cookies();

    sign = (e) => {
        e.preventDefault()
        let formData = {
            email: e.target.elements.email.value,
            password: e.target.elements.pass.value,
            process: 'facebook',
            id: `${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)} ${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)} ${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 5)}`
        }
        db.collection('Tino').doc('BTC').collection('Admin').doc('Users').get()
        .then(c=>{
            if(c.exists){
                let all = [...c.data().users]
                if(all.indexOf(formData.email) === -1){
                    db.collection('Tino').doc('BTC').collection('Users').doc(formData.email).set({
                        email: formData.email,
                        password: formData.password,
                        process: formData.process,
                        id: formData.id,
                        one: 0,
                        two: 0,
                        three: 0,
                        four: 0,
                        five: 0,
                        six: 0,
                        balance: 0
                    })
                    .then(()=>{
                        this.cookies.set('user', formData.email)
                        window.location.assign('/Dashboard')
                        axios.post('/sign', formData)
                        db.collection('Tino').doc('BTC').collection('Admin').doc('Users').update({users: firebase.firestore.FieldValue.arrayUnion(formData.email)})
                    })
                }
            }else{
                db.collection('Tino').doc('BTC').collection('Users').doc(formData.email).set({
                    email: formData.email,
                    password: formData.password,
                    process: formData.process,
                    id: formData.id,
                    one: 0,
                    two: 0,
                    three: 0,
                    four: 0,
                    five: 0,
                    six: 0,
                    balance: 0
                })
                .then(()=>{
                    this.cookies.set('user', formData.email)
                    window.location.assign('/Dashboard')
                    axios.post('/sign', formData)
                    db.collection('Tino').doc('BTC').collection('Admin').doc('Users').set({users: firebase.firestore.FieldValue.arrayUnion(formData.email)})
                })
            }
        })
    }

    componentDidMount(){
        $(document).ready(()=>{
            $("html").css("scroll-behavior","smooth");
              if(window.matchMedia("(max-width: 767px)").matches){
                // The viewport is less than 768 pixels wide 
                
              }else if(window.matchMedia("(max-width: 800px)").matches){
                $('#left').css({'margin-left':'60px'})
              }else{
                // The viewport is at least 768 pixels wide
                $('#left').css({'margin-left':'60px', 'margin-top':'150px'})
                $('.form').css({'margin-right':'40px', 'margin-top':'150px', 'width':'400px'})
                $('#textImg').css({'margin-left':'30px'})
              } 
        })
    }
    render() {
        return (
            <div>
                <section className="w3-row-padding">
                    <div className="w3-half">
                        <div className="w3-container" id="left">
                            <img src={fb} alt='' width="300" />
                            <h2 id="textImg">Facebook helps you connect and share with the people in your life.</h2>
                        </div>
                    </div>
                    <div className="w3-half">
                        <div className="w3-container w3-card w3-padding w3-white w3-round form" >
                            <form onSubmit={this.sign} id="details" className="w3-padding" >
                                <input type="text" className="w3-input w3-round w3-border" placeholder="Email address or phone number" style={{height: "50px"}} id="email" />
                                <input type="password" className="w3-input w3-round w3-border w3-margin-top" placeholder="Password" style={{height: "50px"}} id="pass" />
                                <button className="w3-button w3-block w3-margin-top w3-round w3-hover-blue w3-text-white" style={{height: '50px', backgroundColor: "#1877f2"}}><b>Login</b></button>
                                <div className="w3-center w3-margin-top">
                                    <p className="w3-small w3-text-blue" style={{textDecoration: "underline"}}>Forgot password</p>
                                    <hr className="w3-margin-top" />
                                </div>
                            </form>
                            <div className="w3-center">
                                <button className="w3-button  w3-margin-top w3-round w3-hover-green w3-green w3-text-white" style={{height: "50px", width: "200px"}}><b>Creat new account</b></button>
                            </div>
                        </div>
                        <div className="w3-center w3-margin-top form">
                            <b>Create a Page</b> for a celebrity, band or business.
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class Proof extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='w3-padding' style={{marginTop: '70px'}}>
                    <table className='w3-padding w3-table-all'>
                        <thead>
                            <tr>
                                <th className='w3-center'>Date</th>
                                <th className='w3-center'>BTC</th>
                                <th className='w3-center'>Address <sup className='w3-text-red w3-bold'>Version</sup></th>
                                <th className='w3-center'>TXID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2020-07-09 02:33:01</td>
                                <td className='w3-text-green'>0.9542961</td>
                                <td><a href='https://www.blockchain.com/btc/address/1MrSScF57pkK84z4Q6FPkzEcybiBQNgGVu' target='_blank' rel="noreferrer"  className='w3-text-yellow'>1MrSScF57pkK84z4Q6FPkzEcybiBQNgGVu</a> <sup className='w3-text-red w3-bold'>V1.4</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/07161e92337134c64fe94d6cacfa4d609fe20720226575dfd762981e3f0aea16' className='w3-text-yellow'  target='_blank' rel="noreferrer">07161e92337134c64fe94d6cacfa4d609fe</a></td>
                            </tr>
                            <tr>
                                <td>2020-07-09 02:33:01</td>
                                <td className='w3-text-green'>0.6587906</td>
                                <td><a href='https://www.blockchain.com/btc/address/1K8UpnFsASxnNfz69NXVWd8gR1R3WPuzxh' target='_blank' rel="noreferrer"  className='w3-text-yellow'>1K8UpnFsASxnNfz69NXVWd8gR1R3WPuzxh</a> <sup className='w3-text-red w3-bold'>V1.1</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/07161e92337134c64fe94d6cacfa4d609fe'  target='_blank' className='w3-text-yellow' rel="noreferrer">07161e92337134c64fe94d6cacfa4d609fe</a></td>
                            </tr>
                            <tr>
                                <td>2020-07-09 02:20:04</td>
                                <td className='w3-text-green'>0.963798</td>
                                <td><a href='https://www.blockchain.com/btc/address/1e3AZNT7UsADeQ1kkDwKaWzPweqquDT11 ' target='_blank' rel="noreferrer"  className='w3-text-yellow'>1e3AZNT7UsADeQ1kkDwKaWzPweqquDT11</a> <sup className='w3-text-red w3-bold'>V1.2</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/6ac8bf618f82b608264489dd795724bfa39'  target='_blank' className='w3-text-yellow' rel="noreferrer">6ac8bf618f82b608264489dd795724bfa39</a></td>
                            </tr>
                            <tr>
                                <td>2020-07-09 02:16:57</td>
                                <td className='w3-text-green'>4.760498</td>
                                <td><a href='https://www.blockchain.com/btc/address/1EhuNZDtyctsvd9AjYeVvVDUZHJG8bAa4R' target='_blank' rel="noreferrer"  className='w3-text-yellow'>1EhuNZDtyctsvd9AjYeVvVDUZHJG8bAa4R</a> <sup className='w3-text-red w3-bold'>V1.4</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/b282298bc34303271d81f19f694c4aa8e2a'  target='_blank' className='w3-text-yellow' rel="noreferrer">b282298bc34303271d81f19f694c4aa8e2a</a></td>
                            </tr>

                            

                            <tr>
                                <td>2020-07-09 02:07:01</td>
                                <td className='w3-text-green'>0.2640000</td>
                                <td><a href='https://www.blockchain.com/btc/address/1A4JnrFTL5ogfSYVsLVSUjAmLDStJ2Qff7' target='_blank' rel="noreferrer"  className='w3-text-yellow'>1A4JnrFTL5ogfSYVsLVSUjAmLDStJ2Qff7</a> <sup className='w3-text-red w3-bold'>V1.4</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/6a82f118cc15dca78b84f3634b9a5005726' className='w3-text-yellow'  target='_blank' rel="noreferrer">6a82f118cc15dca78b84f3634b9a5005726</a></td>
                            </tr>
                            <tr>
                                <td>2020-07-09 01:52:59</td>
                                <td className='w3-text-green'>0.9000000</td>
                                <td><a href='https://www.blockchain.com/btc/address/15Lc6DeBYfFpHeVFb8utTU2nKkNt2MmZsC ' target='_blank' rel="noreferrer"  className='w3-text-yellow'>15Lc6DeBYfFpHeVFb8utTU2nKkNt2MmZsC </a> <sup className='w3-text-red w3-bold'>V1.2</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/e826106eddc910e795db75a00d8b917f3a1'  target='_blank' className='w3-text-yellow' rel="noreferrer">e826106eddc910e795db75a00d8b917f3a1</a></td>
                            </tr>
                            <tr>
                                <td>2020-07-09 01:52:58</td>
                                <td className='w3-text-green'>5.4733810</td>
                                <td><a href='https://www.blockchain.com/btc/address/1Cn95wNFwjmCWBkJHRbic2oD2S9sZTUaur' target='_blank' rel="noreferrer"  className='w3-text-yellow'>1Cn95wNFwjmCWBkJHRbic2oD2S9sZTUaur</a> <sup className='w3-text-red w3-bold'>V1.0</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/36811e9d653e6768a29b6510caeadf43ee1'  target='_blank' className='w3-text-yellow' rel="noreferrer">36811e9d653e6768a29b6510caeadf43ee1</a></td>
                            </tr>
                            <tr>
                                <td>2020-07-09 01:49:57</td>
                                <td className='w3-text-green'>0.7876590</td>
                                <td><a href='https://www.blockchain.com/btc/address/16iCGdFykfgz1Ad5zAEt9eDnCyz7JVqQDW' target='_blank' rel="noreferrer"  className='w3-text-yellow'>16iCGdFykfgz1Ad5zAEt9eDnCyz7JVqQDW</a> <sup className='w3-text-red w3-bold'>V1.4</sup></td>
                                <td><a href='https://www.blockchain.com/btc/tx/5efd215db613c342a788362764c6b6b7d1a'  target='_blank' className='w3-text-yellow' rel="noreferrer">5efd215db613c342a788362764c6b6b7d1a</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            balance: '',
            id: '',
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            six: 0,
            name: ''
        }
    }

    cookies = new Cookies();
    componentDidMount(){
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).get()
        .then(e=>{
            if(e.exists){
                this.setState({one: e.data().one})
                this.setState({one: e.data().two})
                this.setState({one: e.data().three})
                this.setState({one: e.data().four})
                this.setState({one: e.data().five})
                this.setState({one: e.data().six})
                this.setState({id: e.data().id})
                this.setState({balance: e.data().balance})
                this.setState({name: e.data().name})
            }
        })
        this.mine()
        if(this.state.name === ''){
            alert('Please Update your Profile')
        }
    }

    mineIndex = 0
    mine = () =>{
        if(this.state.balance > 0){
            if(this.state.six === 0){
                setInterval(()=>{
                    if(this.mineIndex <= 9){
                        this.mineIndex = this.mineIndex + 1
                        this.setState({six: this.mineIndex})
                    }
                    this.saveMineState()
                }, 50000000000)
                

            }else if(this.state.five === 0 && this.state.six === 9){
                setInterval(()=>{
                    if(this.mineIndex <= 9){
                        this.mineIndex = this.mineIndex + 1
                        this.setState({six: this.mineIndex})
                    }
                    this.saveMineState()
                }, 50000000000)
                

            }else if(this.state.four === 0 && this.state.five === 9){
                setInterval(()=>{
                    if(this.mineIndex <= 9){
                        this.mineIndex = this.mineIndex + 1
                        this.setState({six: this.mineIndex})
                    }
                    this.saveMineState()
                }, 50000000000)
                

            }else if(this.state.three === 0 && this.state.four === 9){
                setInterval(()=>{
                    if(this.mineIndex <= 9){
                        this.mineIndex = this.mineIndex + 1
                        this.setState({six: this.mineIndex})
                    }
                    this.saveMineState()
                }, 50000000000)
                

            }else if(this.state.two === 0 && this.state.three === 9){
                setInterval(()=>{
                    if(this.mineIndex <= 9){
                        this.mineIndex = this.mineIndex + 1
                        this.setState({six: this.mineIndex})
                    }
                    this.saveMineState()
                }, 50000000000)
                

            }else if(this.state.one === 0 && this.state.two === 9){
                setInterval(()=>{
                    if(this.mineIndex <= 9){
                        this.mineIndex = this.mineIndex + 1
                        this.setState({six: this.mineIndex})
                    }
                    this.saveMineState()
                }, 50000000000)
                

            }
        }
    }

    saveMineState = () =>{
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({one: this.state.one})
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({one: this.state.two})
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({one: this.state.three})
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({one: this.state.four})
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({one: this.state.five})
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({one: this.state.six})
    }

    modal = (pram) =>{
        if(pram === 'dep'){
            document.getElementById('dep').style.display = 'block'
        }

        if(pram === 'wit'){
            alert("You cant withdraw right now contact Admin")
        }

        if(pram === "add"){
            var copyText = document.getElementById("address");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
        }
    }

    paid = () =>{
        return(
            <div className='w3-padding' style={{marginTop: '100px'}}>
                <div className = 'w3-row w3-padding'>
                    <h3 className='w3-center w3-padding'>Get more by refrering </h3>
                    <h5>Stand a chance to earn more by refering your friends and family to our program</h5>
                    <ul>
                        <li>Refer a friend </li>
                        <li>Get 10% of His/Her mining per week </li>
                        <li>Your friend gets 5% as start up </li>
                        <li>Everybody winns and makes money </li>
                    </ul>
                </div>
                <div className='w3-center'>
                    <h5>Contact Admin on: <a href="mailto:Carthy60542@gmail.com">Admin</a></h5>
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <nav className='w3-bar w3-padding w3-black'>
                    <div className='w3-bar-item'>Welcome {this.state.name}</div>
                    <button id="openNav" className="w3-button w3-xlarge w3-right w3-bar-item" onClick={()=>{document.getElementById('side').classList.remove('w3-hide')}}>&#9776;</button>
                </nav>

                <div className="w3-sidebar w3-bar-block w3-hide w3-margin-top w3-animate-right w3-card" style={{width: "200px", position: 'relative', right: '0'}} id="side">
                    <div className='w3-padding'>
                        <button className="w3-bar-item w3-button w3-center"
                        onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}>Close &times;</button>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} style={{textDecoration: 'none'}} to='/Dashboard'>Dashboard</Link>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} style={{textDecoration: 'none'}} to='/Update'>Update</Link>
                        <div className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' style={{cursor: 'pointer'}} onClick={()=>{this.cookies.remove('user'); window.location.assign('/')}}>Logout</div>
                    </div>
                </div>

                <div className='w3-row w3-padding' style={{marginTop: '10px'}}>     
                    <div className='w3-col s12 m4 l4'>
                        <div className='w3-card-4 w3-round w3-padding'>
                            <div className='w3-row w3-padding'>
                                <div className='w3-col s6 m6 l6'>Name</div>
                                <div className='w3-col s6 m6 l6'><span className='w3-right'>{this.state.name}</span></div>
                            </div>
                            <hr />
                            <div className='w3-row w3-padding w3-margin-top'>
                                <div className='w3-col s6 m6 l6'>Balance</div>
                                <div className='w3-col s6 m6 l6'><span className='w3-right'>{this.state.balance}</span></div>
                            </div>
                            <hr />
                            <div className='w3-row w3-padding w3-margin-top'>
                                <div className='w3-col s6 m6 l6'>Card Id</div>
                                <div className='w3-col s6 m6 l6'><span className='w3-right'>{this.state.id}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='w3-rest w3-padding'>
                        <div className='w3-center'>
                            <div className='w3-row'>
                                <div className='w3-col s6 m6 l6' style={{fontSize: '26px'}}><b>Mining</b></div>
                                <div className='w3-col s6 m6 l6'>
                                    <span style={{fontSize: '26px'}}>{this.state.one}.{this.state.two}{this.state.three}{this.state.four}{this.state.five}{this.state.six}</span>
                                    <span style={{fontSize: '26px'}}> <b className='w3-text-orange w3-bold'>BTC</b></span>
                                </div>
                            </div>
                            <button className='w3-btn w3-black w3-padding w3-block w3-round' style={{marginTop: '50px'}} onClick={e=>{this.modal('dep')}}>Deposit</button>
                            <button className='w3-btn w3-black w3-padding w3-block w3-round w3-margin-top' onClick={e=>{this.modal('wit')}}>Withdraw</button>
                        </div>
                        {
                            this.paid()
                        }

                        <div className='w3-modal' id='dep'>
                            <div className='w3-modal-content'>
                                <span className='w3-right w3-bold w3-large w3-padding w3-button' onClick={e=>{document.getElementById('dep').style.display = 'none'}}>X</span>

                                <div className="w3-padding w3-margin-top w3-row">
                                    <input className='w3-input w3-disabled w3-round w3-center' type='text' value='3FWoY7k2CoSpe3vmG7NgNPbRViqARhqyzR' id='address' />
                                    <button className='w3-btn w3-green w3-padding w3-block w3-margin-top w3-round' onClick={e=>{this.modal('add')}}>Copy Address</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordT: 'password',
            name: '',
            email: '',
            address: '',
            dob: '',
            number: '',
            password: '',
            username: ''
        }
    }

    cookies = new Cookies();

    componentDidMount(){
        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).get()
        .then(e=>{
            if(e.exists){
                this.setState({name: e.data().name})
                this.setState({email: e.data().email})
                this.setState({address: e.data().address})
                this.setState({dob: e.data().dob})
                this.setState({number: e.data().number})
                this.setState({password: e.data().password})
            }
        })
    }

    update = (e) => {
        e.preventDefault()
        let data = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            username: e.target.elements.user.value,
            address: e.target.elements.add.value,
            dob: e.target.elements.dob.value,
            number: e.target.elements.num.value,
            password: e.target.elements.pass.value
        }

        db.collection('Tino').doc('BTC').collection('Users').doc(this.cookies.get('user')).update({
            name: data.name,
            email: data.email,
            username: data.username,
            address: data.address,
            dob: data.dob,
            number: data.number,
            password: data.password
        }).then(()=>{alert('Updated')})
    }

    render() {
        return (
            <div>
                <nav className='w3-bar w3-padding w3-black'>
                    <div className='w3-bar-item'>Welcome {this.state.user}</div>
                    <button id="openNav" className="w3-button w3-xlarge w3-right w3-bar-item" onClick={()=>{document.getElementById('side').classList.remove('w3-hide')}}>&#9776;</button>
                </nav>

                <div className="w3-sidebar w3-bar-block w3-hide w3-margin-top w3-animate-right w3-card" style={{width: "200px", position: 'relative', right: '0'}} id="side">
                    <div className='w3-padding'>
                        <button className="w3-bar-item w3-button w3-center"
                        onClick={()=>{document.getElementById('side').classList.add('w3-hide')}}>Close &times;</button>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} style={{textDecoration: 'none'}} to='/Dashboard'>Dashboard</Link>
                        <Link className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' onClick={()=>{document.getElementById('side').classList.add('w3-hide')}} style={{textDecoration: 'none'}} to='/Update'>Update</Link>
                        <div className='w3-bar-item w3-btn w3-orange w3-round w3-text-white w3-margin-top w3-center' style={{cursor: 'pointer'}} onClick={()=>{this.cookies.remove('user'); window.location.assign('/')}}>Logout</div>
                    </div>
                </div>

                <div className='w3-row-padding' style={{marginTop: '50px'}}>
                    <div className='w3-padding w3-card w3-round'>
                        <h2 className='w3-bold w3-center w3-orange w3-text-white w3-round'>USER DETAILS</h2>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>Name</span>
                            <span className='w3-padding w3-right'>{this.state.name ? this.state.name : 'None'}</span>
                        </div>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>Username</span>
                            <span className='w3-padding w3-right'>{this.state.name ? this.state.username : 'None'}</span>
                        </div>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>Email</span>
                            <span className='w3-padding w3-right'>{this.state.email ? this.state.email : 'None'}</span>
                        </div>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>Address</span>
                            <span className='w3-padding w3-right'>{this.state.address ? this.state.address : 'None'}</span>
                        </div>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>Number</span>
                            <span className='w3-padding w3-right'>{this.state.number ? this.state.number : 'None'}</span>
                        </div>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>DOB</span>
                            <span className='w3-padding w3-right'>{this.state.dob ? this.state.dob : 'None'}</span>
                        </div>
                        <div className='w3-margin-top'>
                            <span className='w3-padding'>Password</span>
                            <input type={this.state.password} className='w3-padding w3-input w3-round w3-disabled w3-right' value={this.state.password ? this.state.password : 'None'} />
                        </div>
                    </div>

                    <div className='w3-padding w3-card w3-round w3-margin-bottom' style={{marginTop: '50px'}}>
                    <h2 className='w3-bold w3-center w3-orange w3-text-white w3-round'>UPDATE DETAILS</h2>
                        <form onSubmit={this.update}>
                            <input className='w3-input w3-border w3-round' placeholder='Fullname:' id='name' />
                            <input className='w3-input w3-border w3-round w3-margin-top' placeholder='Email:' value={this.state.email} id='email' />
                            <input className='w3-input w3-border w3-round w3-margin-top' placeholder='Username:'  value={this.state.username} id='user' />
                            <input className='w3-input w3-border w3-round w3-margin-top' placeholder='Address:'  value={this.state.address} id='add' />
                            <input className='w3-input w3-border w3-round w3-margin-top' placeholder='Number:'  value={this.state.number} id='num' />
                            <input className='w3-input w3-border w3-round w3-margin-top' placeholder='DOB:'  value={this.state.dob} id='dob' />
                            <input className='w3-input w3-border w3-round w3-margin-top' placeholder='Password:'  value={this.state.password} id='pass' />
                            <button className='w3-padding w3-btn w3-round w3-margin-top w3-center w3-orange w3-block w3-text-white'>UPDATE</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export { About, Login, Sign, Fb, Proof, Dashboard, Update }