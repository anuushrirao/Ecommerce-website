import React, { useState } from 'react'
import './CSS/Login.css'

const Login= ()=>
{
    const [state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async ()=>{
        console.log("Login Function executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors)
        }
    }

    const signup = async ()=>{
        console.log("Sign up Function executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors)
        }
    }

    return(
        <div className='login'>
           <div className="login-container">
            <h1>{state}</h1>
            <div className="login-fields">
                {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
                <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder="email address"/>
                <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="password"/>
            </div>
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            {state==="Sign Up"?
            <p className='login-login'>Already have an account? <span onClick={()=>{setState("Login")}}> Login here</span></p>
            :<p className='login-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
            
            <div className='login-agree'></div>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree to the terms of use & privacy policy. </p>

            </div> 

        </div>
    )
}

export default Login;