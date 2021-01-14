import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import BTC, { About, Fb, Login, Sign, Proof, Dashboard, Update } from './BTC/btc'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Cookies } from 'react-cookie'


export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: new Cookies().get('user')
    }
  }
  
  
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
          </Router>
        </div>
      )
    }
  }
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
