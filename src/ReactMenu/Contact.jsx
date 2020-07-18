import React, { Component } from 'react'
import { useState } from 'react';



 const Contact=()=>  {
    const [data,setData]=useState(
        {
            fullname:'',
            phone:'',
            email:'',
            msg:'',
        }
    )
    const formSubmit=(e)=>
{
    e.preventDefault();
alert(`My name is ${data.fullname}.My mobile number is ${data.mobile}.My Email id is${data.mobile}.My Message is here ${data.msg}`)
};

const inputEvent=(event)=>
{
    const{name,value}=event.target;
    setData((preval)=>
    {
return{
...preval,
[name]:value,
};
    })
};
    return (
            <>
            <div className="my-5">
<h1 className="text-center">Our-Services</h1>
             </div>
             <div className="container-fluid">
<div className="row">
<div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    <div className="form-group">
    <label for="exampleFormControlFile1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlFile1" placeholder="Enter Your Name" name="fullname" value={data.fullname} onChange={inputEvent}/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlFile1">Phone</label>
    <input type="text" class="form-control" id="exampleFormControlFile1" placeholder="Enter Your Phone"
     name="phone" value={data.phone} onChange={inputEvent}/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlFile1">Email</label>
    <input type="text" class="form-control" id="exampleFormControlFile1" placeholder="Enter Your Emails" 
    name="email" value={data.email} onChange={inputEvent}/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlFile1">Message</label>
    <textarea  class="form-control" id="exampleFormControlFile1" rows="3" 
    name="msg" value={data.msg} onChange={inputEvent}/>
  </div>
<button type="submit" value="submit" className="btn btn-primary">
Submit
</button>
    </form>
    </div>
    </div>
    </div>

            </>
        )
    }


export default Contact;