import React, { Component } from 'react'
 import  images from '../images/banner-2.png'
import {NavLink} from 'react-router-dom'
import Common from './Common' 
const Home=()=>  {
        return (
            <>
 <Common name="Grow Your business with"
 imgsrc={images}
 visit="/service"
 services="Get Started" />    
             </>
        )
    }


export default Home;