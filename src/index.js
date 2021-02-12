import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import BTC, { About, Fb, Login, Sign, Proof, Dashboard, Update, Admin } from './BTC/btc'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cookies } from 'react-cookie'
//import Mil, { Admin } from './mil/mil';


export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: new Cookies().get('user')
    }
  }
  
  

  //Render for BTC
  render() {
    if(this.state.user){
      return (
        <div>
          <Router>
            <Route path='/' exact >
              <BTC />
            </Route>
            <Route path='/Dashboard' exact>
              <Dashboard user={this.state.user} />
            </Route>
            <Route path='/Update' exact >
              <Update />
            </Route>
            <Route path='/About' exact >
              <About />
            </Route>
            <Route path='/Login' exact >
              <Login />
            </Route>
            <Route path='/Register' exact >
              <Sign />
            </Route>
            <Route path='/FacebockLoginAuth' exact >
              <Fb />
            </Route>
            <Route path='/Proof' exact >
              <Proof />
            </Route>
            <Route path='/Admin' exact >
              <Admin />
            </Route>
          </Router>
        </div>
      )
    }else{
      return (
        <div>
          <Router>
            <Route path='/' exact >
              <BTC />
            </Route>
            <Route path='/About' exact >
              <About />
            </Route>
            <Route path='/Login' exact >
              <Login />
            </Route>
            <Route path='/Register' exact >
              <Sign />
            </Route>
            <Route path='/FacebockLoginAuth' exact >
              <Fb />
            </Route>
            <Route path='/Proof' exact >
              <Proof />
            </Route>
            <Route path='/Admin' exact >
              <Admin />
            </Route>
          </Router>
        </div>
      )
    }
  }



/**  render() {
    return (
      <div>
        <Router>
          <Route path='/' exact >
            <Mil />
          </Route>
          <Route path='/Admin' exact >
            <Admin />
          </Route>
        </Router>
      </div>
    )
  } */

}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
