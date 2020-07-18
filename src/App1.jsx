import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import $ from 'jquery'
import { Switch, Route,Redirect } from 'react-router'
import Home from './ReactMenu/Home';
import About from './ReactMenu/About';
import Service from './ReactMenu/Service';
import Contact from './ReactMenu/Contact';
import Navbar from './ReactMenu/Navbar'
import Footer from './ReactMenu/Footer'
const App1 =()=>
{
        return (
            <>
            <Navbar/>
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/service" component={Service}/>
                  <Route exact path="/contact" component={Contact}/>
<Redirect to="/"/>               
               </Switch>
               <Footer/>
            </>
        )
    };
export default App1;