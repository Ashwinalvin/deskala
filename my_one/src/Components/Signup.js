
import React,{Component} from "react";
import '../Styles/signup.css';
class Signup extends Component
{
    login(){
        console.warn("state",this.state);
        fetch("http://localhost:9000/signup",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
            })
   
        })
    }


    render(){
        return(
     <div className="signup">
      <div className="main">Sign Up</div>
        <br/>

        <h5>Email id</h5>
        <div className="email">
            
            <input className="one" style="border: none;" type="text" onChange={(e)=>{this.setState({Email_id:e.target.value})}} name="email" placeholder="enter your email id"/>
        </div>
        <br/>
    
        <h5>Phone Number</h5>
        <div className="phone">
            
            <input className="two" style="border:none;" type="number" onChange={(e)=>{this.setState({Phone_Number:e.target.value})}} name="phone" placeholder="enter your phone number"/>
        </div>
        <br/>
        
       <h5> Password</h5>
        <div className="pass">
               
               <input className="three" style="border: none;" type="text" onChange={(e)=>{this.setState({Password:e.target.value})}} name="pass" placeholder="enter your password"/>
        </div>
        <br/>
        <br/>
        <button style="background:rgba(27, 59, 204, 0.911);" type="submit" onClick={()=>this.login()}>sign up</button>
        </div>
        );
    }
        
 }
 export default Signup;