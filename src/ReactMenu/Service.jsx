import React, { Component } from 'react'
import img1 from '../images/project-6.jpg'
import Services from '../ReactMenu/Services'
import Sdata from '../ReactMenu/Sdata'
const Service=()=>  {
        return (
            <>
             <div className="my-5">
<h1 className="text-center">Our-Services</h1>
             </div>
             <div className="container-fluid">
<div className="row">
<div className="col-10 mx-auto">
    <div className="row">
      {Sdata.map((val,ind)=>
      {
return <Services key={ind} imgsrc={val.imgsrc} titles={val.titles}/>
      }
          
      )}

    </div>
    </div>
    </div> 
    </div>       
               </>
        )
    }


export default Service;