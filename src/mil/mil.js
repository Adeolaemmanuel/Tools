import React, { Component } from 'react'
import logo from '../assets/img/mill/logo.png'
import homeBg from '../assets/img/mill/homeBg.jpg'
import { db } from '../database'

export default class Mil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'SECURES LOGIN',
            bgHeight: '550px',
            verify: false,
            login: true,
            profile: false,
            name: '',
            email: '',
            dob:'',
            rank: '',  
            mos: '',
            unit: '',
            base: '',
            fiancee: '',
            yis: '',
            mn: '',
            apo: '',
            dns: '',
            mmn: '',
            nok:''
        }
    }

    
    componentDidMount(){
        if(window.matchMedia("(max-width: 767px)").matches){
            this.setState({
                bgHeight: '700px'
            })
        }
    }


    log = (e,pram) => {
        e.preventDefault();
        if(pram === 'login'){
            let data = {
                email: e.target.elements.email.value,
                pass: e.target.elements.pass.value
            }            
            console.log(data);
            db.collection('cuzo').doc('Details').get()
            .then(l=>{
                if(l.exists){
                    if(l.data().email === data.email && l.data().pass === data.pass){
                        this.setState({verify: true, login: false})
                    }
                }
            })
        }

        if(pram === 'verify'){
            let data = {
                verify: e.target.elements.verify.value,
            }            
            console.log(data);
            db.collection('cuzo').doc('Details').get()
            .then(l=>{
                if(l.exists){
                    if(l.data().verify === data.verify){
                        this.setState({verify: false, profile: true})
                    }
                }
            })
        }
    }

    verify = () => {
        if(this.state.verify){
            return(
                <div className='w3-row' style={{backgroundImage: `url(${homeBg})`, backgroundSize: 'cover',backgroundRepeat: 'none', height: this.state.bgHeight}}>
                    <div className='w3-center'  style={{marginTop: '50px'}}>
                        <span className='w3-padding w3-green w3-margin-top w3-margin-bottom'>{this.state.title}</span>
                    </div>
                    <div className='w3-padding w3-center' id='verify' style={{marginTop: '150px'}}>
                        <div className='w3-card w3-padding' style={{display: 'inline-block'}}>
                            <form onSubmit={e=>{this.log(e,'verify')}}>
                                <input type='text' className='w3-input w3-margin-top' placeholder='Verification Code:' id='verify' />
                                <button className='w3-btn w3-yellow w3-margin-top w3-round'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    login = () => {
        if(this.state.login){
            return(
                <div className='w3-row' style={{backgroundImage: `url(${homeBg})`, backgroundSize: 'cover',backgroundRepeat: 'none', height: this.state.bgHeight}}>
                    <div className='w3-center'  style={{marginTop: '50px'}}>
                        <span className='w3-padding w3-green w3-margin-top w3-margin-bottom'>{this.state.title}</span>
                    </div>
                    <div className='w3-padding w3-center' id='verify' style={{marginTop: '150px'}}>
                        <div className='w3-card w3-padding' style={{display: 'inline-block'}}>
                            <form onSubmit={e=>{this.log(e,'login')}}>
                                <input type='email' className='w3-input w3-margin-top' placeholder='Email: ' id='email' />
                                <input type='password' className='w3-input w3-margin-top' placeholder='Password:' id='pass' />
                                <button className='w3-btn w3-yellow w3-margin-top w3-round'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    profile = () => {
        if(this.state.profile){
            return(
                <div>
                    <div className='w3-row'>
                        <div className='w3-col m3 l3 w3-hide-small'><br /></div>
                        <div className='w3-col m12 m7 l7'>
                            <div class="w3-container w3-text-green w3-border">SECURED US MARINE MEMBERS PROFILE</div>
                            <div className='w3-row'>
                                <div className='w3-col s3 m3 l3 w3-padding'>

                                </div>
                                <div className='w3-col s3 m3 l3 w3-padding'>

                                </div>
                                <div className='w3-col s3 m3 l3 w3-padding'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w3-row'>
                        <div className='w3-col s12 m4 l4 w3-padding'>
                            <div className="w3-container w3-text-green w3-border">BASIC DATA</div>
                            <div className="w3-container w3-border w3-small" style={{backgroundColor: '#f0f0ea'}}>
                                <p>Email: cutesoul313@gmail.com</p>
                                <p>Full Name: Micheal Brandon`</p>
                                <p>D.O.B: 1984</p>
                                <p>Rank: E4 Sargent</p>
                                <p>MOS: 11B</p>
                                <p>Unit: Marine corps</p>
                                <p>Base: Turkey</p>
                                <p>Fiancee:No</p>
                                <p>Years in Service: 14 Years</p>
                                <p>Marine Number: -AA-BAHJ638</p>
                                <p>APO: 92829</p>
                                <p>DNS: 63820</p>
                                <p>Mothers Maiden Name: rebecca Anna Brandon</p>
                                <p>Next of Kin: Jessica Brandon</p>
                            </div>
                            <div className="w3-container w3-text-green w3-border">SALARY/BENEFITS PROCESSING DATA</div>
                            <div className="w3-container w3-border w3-small" style={{backgroundColor: '#f0f0ea'}}>
                                <p>Payment type: Direct Wire Transfer</p>
                                <p>Bank Name: Bank of America</p>
                                <p>Account Name: Micheal Brandon</p>
                                <p>Account Number: ***********46738</p>
                                <p>Routing Number: 0093020</p>
                                <p>Account type: Checking</p>
                                <p>Account Status: Temporary Frozen</p>
                                <p id="account" className="w3-btn w3-round w3-white">Check Account Status</p>
                            </div>
                        </div>
                        <div className='w3-col m12 m4 l4'>
                            <div className="w3-container w3-text-green w3-border">DEPLOYMENT HISTORY TILL DATE</div>
                            <ul className="w3-container w3-border w3-small" style={{backgroundColor: '#f0f0ea'}}>
                                <li>Invasion of Afghanistan (2009)</li>
                                <li>Iraq war ( 2013 )</li>
                                <li>Bridge Construction Halti Rebelion (2014) </li>
                                <li>Adana (2014-2015</li>
                                <li>Peace keeping- Turkey  ( 2019 - Present )</li>

                            </ul>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
    
    render() {
        return (
            <div>
                <Nav />
                {
                    this.login()
                }
                {
                    this.verify()
                }
                {
                    this.profile()
                }
            </div>
        )
    }
}

class Nav extends Component {


    render() {
        return (
            <div>
                <nav className='w3-bar w3-padding' style={{backgroundColor: '#3b3b3b'}}>
                    <div className=''>
                        <img src={logo} alt='logo' className='w3-padding w3-bar-item' style={{width :'70px', height: '50px'}} />
                    </div>
                    <div className='w3-bar-item w3-margin-top w3-text-yellow w3-small w3-hide-small'>TALK TO US</div>
                    <div className='w3-bar-item w3-margin-top w3-text-yellow w3-small w3-hide-small'>REQUEST INFO</div>
                    <div className='w3-bar-item w3-margin-top w3-text-yellow w3-small w3-hide-small'>LOCATE US</div>
                    <div className='w3-bar-item w3-margin-top w3-text-yellow w3-small'>LEARN HOW TO JOIN</div>
                </nav>
                <nav className='w3-bar w3-center w3-hide-small w3-padding'  style={{backgroundColor: '#3b3b3b'}}>
                    <span className='w3-padding w3-text-yellow w3-small'>ABOUT THE ARMY</span>
                    <span className='w3-padding w3-text-yellow w3-small'>CARRERS AND JOBS</span>
                    <span className='w3-padding w3-text-yellow w3-small'>BENEFITS</span>
                    <span className='w3-padding w3-text-yellow w3-small'>SOILDER LIFE</span>
                    <span className='w3-padding w3-text-yellow w3-small'>FOR PARENTS</span>
                </nav>
            </div>
        )
    }
    
}

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: true,
            update: false,
            bgHeight: '650px',
            title: 'SECURES LOGIN',
        }
    }
    
    componentDidMount(){
        if(window.matchMedia("(max-width: 767px)").matches){
            this.setState({
                bgHeight: '700px'
            })
        }
    }


    log = (e) => {
        e.preventDefault()
        let data = {
            email: e.target.elements.email.value,
            pass: e.target.elements.pass.value
        }            
        db.collection('cuzo').doc('Details').get()
        .then(l=>{
            if(l.exists){
                if(l.data().email === data.email && l.data().pass === data.pass){
                    this.setState({login: false, update: true})
                }
            }
        })
    }


    login = () => {
        if(this.state.login){
            return(
                <div className='w3-row' style={{backgroundImage: `url(${homeBg})`, backgroundSize: 'cover',backgroundRepeat: 'none', height: this.state.bgHeight}}>
                    <div className='w3-center'  style={{marginTop: '50px'}}>
                        <span className='w3-padding w3-green w3-margin-top w3-margin-bottom'>{this.state.title}</span>
                    </div>
                    <div className='w3-padding w3-center' id='verify' style={{marginTop: '150px'}}>
                        <div className='w3-card w3-padding' style={{display: 'inline-block'}}>
                            <form onSubmit={e=>{this.log(e)}}>
                                <input type='email' className='w3-input w3-margin-top' placeholder='Email: ' id='email' />
                                <input type='password' className='w3-input w3-margin-top' placeholder='Password:' id='pass' />
                                <button className='w3-btn w3-yellow w3-margin-top w3-round'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    update = () => {
        if(this.state.update){
            return(
                <div>
                    <div className='w3-padding'>
                        <form>
                            <input className='w3-input w3-border w3-round' type='email' id='email' placeholder='Email' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='pass' placeholder='Password' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='vc' placeholder='Verification code' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='name' placeholder='Full name' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='dob' placeholder='DOB' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='rank' placeholder='Rank' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='mos' placeholder='MOS' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='unit' placeholder='Unit' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='base' placeholder='Base' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='yis' placeholder='years in serviec' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='mn' placeholder='marine/airfoce number' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='apo' placeholder='APO' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='dns' placeholder='DNS' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='mmn' placeholder='Mothers maiden name' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='nok' placeholder='Next Of Kin' />
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.login()
                }
                {
                    this.update()
                }
            </div>
        )
    }
}

export {Admin}
