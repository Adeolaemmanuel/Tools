import React, { Component } from 'react'
import logo from '../assets/img/mill/logo.png'
import homeBg from '../assets/img/mill/homeBg.jpg'
import p from '../assets/img/mill/p.jpeg'
import { db, storage } from '../database'

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
            nok: '',
            m1: '',
            m2: '',
            m3: '',
            m4: '',
            m5: '',
            m6: '',
            m7: '',
            at: '',
            as: '',
            an2: '',
            an: '',
            ab: '',
            bn: '',
            rn: '',
            pt: '',
        }
    }

    
    componentDidMount(){
        if(window.matchMedia("(max-width: 767px)").matches){
            this.setState({
                bgHeight: '700px'
            })
        }

        db.collection('cuzo').doc('Details').get()
            .then(d => {
                this.setState({
                    name: d.data().name,
                    email: d.data().email,
                    dob: d.data().dob,
                    rank: d.data().rank,
                    mos: d.data().mos,
                    unit: d.data().unit,
                    base: d.data().base,
                    financee: d.data().fiancee,
                    yis: d.data().yis,
                    mn: d.data().mn,
                    apo: d.data().apo,
                    mmn: d.data().mmn,
                    nok: d.data().nok,
                    at: d.data().at,
                    as: d.data().as,
                    an2: d.data().an2,
                    an: d.data().an,
                    ab: d.data().ab,
                    bn: d.data().bn,
                    rn: d.data().rn,
                    pt: d.data().pt,
                    m1: d.data().m1,
                    m2: d.data().m2,
                    m3: d.data().m3,
                    m4: d.data().m4,
                    m5: d.data().m5,
                    m6: d.data().m6,
                    m7: d.data().m7,
                })
            })
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
                            
                            <div className='w3-row'>
                                <div className='w3-col s3 m3 l3 w3-padding'>

                                </div>
                                
                                <div className='w3-col s3 m3 l3 w3-padding'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w3-row'>
                        <div className='w3-col s12 m4 l4 w3-padding'>
                            <div className='w3-container w3-text-green w3-border w3-center'>
                                <span className='w3-padding w3-tetxt-green'>SECURED US MARINE MEMBERS PROFILE</span>
                            </div>
                            <div className='w3-container w3-center'>
                                <img src={p} alt='' style={{ width: '100%', height: '200px' }} />
                            </div>
                            <div className='w3-container w3-text-green w3-border w3-center'>
                                <span className='w3-padding w3-tetxt-green'>BASIC DATA</span>
                            </div>
                            <div className="w3-container w3-border w3-small" style={{ backgroundColor: '#f0f0ea' }}>
                                <p>Email: <span className='w3-right'>{this.state.email}</span></p>
                                <p>Full Name: <span className='w3-right'>{this.state.name}</span></p>
                                <p>D.O.B: <span className='w3-right'>{this.state.dob}</span></p>
                                <p>Rank: <span className='w3-right'>{this.state.rank}</span></p>
                                <p>MOS: <span className='w3-right'>{this.state.mos}</span></p>
                                <p>Unit: <span className='w3-right'>{this.state.unit}</span></p>
                                <p>Base: <span className='w3-right'>{this.state.base}</span></p>
                                <p>Fiancee: <span className='w3-right'>{this.state.fiancee}</span></p>
                                <p>Years in Service: <span className='w3-right'>{this.state.yis}</span></p>
                                <p>ARMY Number: <span className='w3-right'>{this.state.mn}</span></p>
                                <p>APO: <span className='w3-right'>{this.state.apo}</span></p>
                                <p>DNS: <span className='w3-right'>{this.state.dns}</span></p>
                                <p>Mothers Maiden Name: <span className='w3-right'>{this.state.mmn}</span></p>
                                <p>Next of Kin: <span className='w3-right'>{this.state.nok}</span></p>
                            </div>
                            <div className='w3-container w3-text-green w3-border w3-center'>
                                <span className='w3-padding w3-tetxt-green'>SALARY/BENEFITS PROCESSING DATA</span>
                            </div>
                            <div className="w3-container w3-border w3-small" style={{ backgroundColor: '#f0f0ea' }}>
                                <p>Payment type: {this.state.pt}</p>
                                <p>Bank Name: {this.state.bn}</p>
                                <p>Account Name: {this.state.an}</p>
                                <p>Account Number: ***********{this.state.an2}</p>
                                <p>Routing Number: {this.state.rn}</p>
                                <p>Account type: {this.state.at}</p>
                                <p>Account Status: {this.state.as}</p>
                                <p id="account" className="w3-btn w3-round w3-white">Check Account Status</p>
                            </div>
                        </div>
                        <div className='w3-col m12 m4 l4 w3-margin-top'>
                            <div className='w3-container w3-text-green w3-border w3-center'>
                                <span className='w3-padding w3-tetxt-green'>DEPLOYMENT HISTORY TILL DATE</span>
                            </div>
                            <div className="w3-container w3-border w3-small" style={{ backgroundColor: '#f0f0ea' }}>
                                <p>{this.state.m1}</p>
                                <p>{this.state.m2}</p>
                                <p>{this.state.m3}</p>
                                <p>{this.state.m4}</p>
                                <p>{this.state.m5}</p>
                                <p>{this.state.m6}</p>
                                <p>{this.state.m7}</p>
                            </div>
                        </div>
                        <div className='w3-col m12 m4 l4 w3-margin-top'>
                            <div className='w3-container w3-text-green w3-border w3-center'>
                                <span className='w3-padding w3-tetxt-green'>MY MENU</span>
                            </div>
                            <div className="w3-container w3-border w3-small w3-margin-bottom" style={{ backgroundColor: '#f0f0ea' }}>
                                <button className='w3-btn w3-grey w3-padding w3-block w3-margin-top w3-round w3-padding w3-text-white' onClick={() => alert(this.state.m7)}>Current Mission</button>
                                <button className='w3-btn w3-grey w3-padding w3-block w3-margin-top w3-round w3-padding w3-text-white' onClick={() => alert(this.state.ab)}>Current Balance</button>
                                <button className='w3-btn w3-grey w3-padding w3-block w3-margin-top w3-round w3-padding w3-text-white' onClick={() => window.location.reload()}>Logout</button>
                            </div>
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

    upload = (e, pram) => {
        e.preventDefault();
        if (pram === 'profile') {
            let file = document.querySelector('#profile');
            console.log(file.value)
            storage.ref('profile').put(file.value).then(() => { alert('Done') })
        } if (pram === 'logo') {
            let file = document.querySelector('#profile');
            console.log(file.value)
            storage.ref('logo').put(file.value).then(() => { alert('Done') })
        }
    }

    send = (e) => {
        e.preventDefault();
        let data = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            dob: e.target.elements.dob.value,
            rank: e.target.elements.rank.value,  
            mos: e.target.elements.mos.value,
            unit: e.target.elements.unit.value,
            base: e.target.elements.base.value,
            fiancee: e.target.elements.fin.value,
            yis: e.target.elements.yis.value,
            mn: e.target.elements.mn.value,
            apo: e.target.elements.apo.value,
            dns: e.target.elements.dns.value,
            mmn: e.target.elements.mmn.value,
            nok: e.target.elements.nok.value,
            pass: e.target.elements.pass.value,
            at: e.target.elements.at.value,
            as: e.target.elements.as.value,
            an2: e.target.elements.an2.value,
            an: e.target.elements.an.value,
            ab: e.target.elements.ab.value,
            bn: e.target.elements.bn.value,
            rn: e.target.elements.rn.value,
            pt: e.target.elements.pt.value,
            m1: e.target.elements.m1.value,
            m2: e.target.elements.m2.value,
            m3: e.target.elements.m3.value,
            m4: e.target.elements.m4.value,
            m5: e.target.elements.m5.value,
            m6: e.target.elements.m6.value,
            m7: e.target.elements.m7.value,
        }

        

        db.collection('cuzo').doc('Details').get()
        .then(e => {
            if (e.exists) {
                for (let n in data) {
                    if (data[n] === "" && e.data()[n]) {
                        data[n] = e.data()[n];
                        db.collection('cuzo').doc('Details').update(data);
                    } else {
                        db.collection('cuzo').doc('Details').update(data);
                    }
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
                        {
                            /*
                             <div>
                            <label htmlFor='profile' className='w3-btn w3-green w3-round'>Upload profile picture</label>
                            <input type='file' className='w3-hide' id='profile' onChange={e => { this.upload(e, 'profile') }} />
                            <label htmlFor='logo' className='w3-btn w3-green w3-round'>Upload military logo</label>
                            <input type='file' className='w3-hide' id='logo' onChange={e => { this.upload(e, 'profile') }}  />
                        </div>
                             
                             */
                        }
                        <form onSubmit={e => { this.send(e) }} >
                            <div className='w3-center'>
                                <span className='w3-padding w3-tetxt-green'>BASIC DATA</span>
                            </div>
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
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='fin' placeholder='Fiancee' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='nok' placeholder='Next Of Kin' />

                            <div className='w3-center'>
                                <span className='w3-padding w3-tetxt-green'>SALARY/BENEFITS</span>
                            </div>
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='pt' placeholder='Payment type' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='bn' placeholder='Bank Name' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='ab' placeholder='Acc balance' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='an' placeholder='Acc Name' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='an2' placeholder='Acc Num' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='rn' placeholder='Routing number' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='as' placeholder='Acc status' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='at' placeholder='Acc typ' />

                            <div className='w3-center'>
                                <span className='w3-padding w3-tetxt-green'>MISSIONS</span>
                            </div>

                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m1' placeholder='missio 1' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m2' placeholder='missio 2' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m3' placeholder='missio 3' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m4' placeholder='missio 4' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m5' placeholder='missio 5' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m6' placeholder='missio 6' />
                            <input className='w3-input w3-border w3-round w3-margin-top' type='text' id='m7' placeholder='missio 7' />

                            <button className='w3-btn w3-block w3-margin-top w3-round w3-green'>Update Idiot</button>
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
