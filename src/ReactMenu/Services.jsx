import React, { Component } from 'react'
import img1 from '../images/project-6.jpg'

const Services=(props)=>  {
        return (
            <>

<div className="col-md-4 col-10 mx-auto">
<div className="card mb-xl-30">
<img src={props.imgsrc} className="card-img-top" alt="..."/>
<div className="card-body">
        <h5 className="card-title font-weight-bold">{props.titles}</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Go Courses</a>
</div>
</div>
</div>
</>
        )
 }
export default Services