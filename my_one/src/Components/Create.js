
import React,{Component} from "react";
import '../Styles/create.css';
class Create extends Component
{
    login(){
        console.warn("state",this.state);
        fetch("http://localhost:9000/createhuman",{
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
            <div className="parent">
            <div className="signup">
                <div className="main">Create Candidate</div>
                <br/>
        
                <h5>Name</h5>
                <div className="email">
                    
                    <input className="one" style="border: none;" type="text" onChange={(e)=>{this.setState({Name:e.target.value})}} name="name" placeholder="enter your name" required/>
                </div>
                <br/>
            
                <h5>Date of Birth</h5>
                <div className="phone">
                    
                    <input className="two" style="border:none;" type="date" onChange={(e)=>{this.setState({DOB:e.target.value})}} name="date" placeholder="enter your Date of Birth" required/>
                </div>
                <br/>
                
               <h5> Age</h5>
                <div className="pass">
                       
                       <input className="three" style="border: none;" type="number" onChange={(e)=>{this.setState({Age:e.target.value})}} name="age" placeholder="enter your age" required/>
                </div>
                <br/>
                <br/>
                <button className="forcancel" style="background:none;" type="reset" >Cancel</button>
             
            </div>
        
            <div className="signup">
                <div className="signup">
                    <div className="main"></div>
                    <br/>
                    <br/>
            
                    <h5>Address</h5>
                    <div className="email">
                        
                        <input className="one" style="border: none;" type="text" onChange={(e)=>{this.setState({Address:e.target.value})}} name="address" placeholder="enter your address" required/>
                    </div>
                    <br/>
                
                    <h5>State</h5>
                    <div className="phone">
                        
                        <input className="two" style="border:none;" type="text" onChange={(e)=>{this.setState({State:e.target.value})}} name="state" placeholder="enter your state" required/>
                    </div>
                    <br/>
                    
                   <h5>Pincode</h5>
                    <div className="pass">
                           
                           <input className="three" style="border: none;" type="number" onChange={(e)=>{this.setState({Pincode:e.target.value})}} name="pincode" placeholder="enter your 6 digit pincode" required/>
                    </div>
                    <br/>
                    <br/>
                    <button className="forsubmit" style="background:rgba(27, 59, 204, 0.911);" type="submit" onClick={()=>this.login()} >Submit</button>
                   
                </div>
                
            </div>
            </div>     
        );

        }
    }
    export default Create;