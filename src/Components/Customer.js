import React, { useState ,useEffect} from 'react'
import { Service } from '../Service/Worker';
import {useNavigate,useParams} from 'react-router-dom'
import './Customer.css'
function Customer() {
  
const nav=useNavigate();

 


  const {customerId} = useParams(); 

  const[message,setMessage]=useState({
    name:"",address:"",phone:"",email:"",date_of_Birth:''})


    
    const changeMessage=(e)=>{
      const newdata =  {...message};
      newdata[e.target.id] = e.target.value;
      setMessage(newdata);


    }

    const handleSubmit =async(e)=>{
      e.preventDefault();
      

      if(customerId){
        Service.updateCustomer(customerId,message).then((response)=>{
          Service.put(message);
          nav('/')
          alert("Updated Sucessfully");
        })
      }else
      Service.post(message);
      nav('/')
      alert("Customer Created Sucessfully");

     
    }
    console.log(message);

    useEffect(() => {
      
      Service.getCustomerById(customerId).then((response)=>{
        setMessage(
          {
            name: response.data.name,
            address:response.data.address,
            phone:response.data.phone,
            email:response.data.email,
            date_of_Birth:response.data.date_of_Birth,

        }
        )
      })
    }, [])
    
    const title=()=>{
      if(customerId){
        return <h2 className='title'>Edit Customer</h2>
      }else{
        return <h2 className='title'>Add Customer</h2>
      }

    }
    const title1=()=>{
      if(customerId){
        return <button className='btn btn-primary' >Update</button>
      }else{
        return <button className='btn btn-primary'>Submit</button>
      }

    }

  return (
    <div>
      {
        title()
      }
      <form onSubmit={handleSubmit} className='Container'>
        <div className='input-box'>
        <label className="details"for="name"><b>Name:</b></label>
      <input type="text" placeholder="Enter your Name" id="name" name="name" value={message.name} onChange={(e)=>changeMessage(e)} required="true"/><br/>
      
      </div>
      <div className='input-box'>
      <label className="details" for="Address"><b>Address:</b></label>
      <input type="text" placeholder="Enter your Address" id ="address"name="address"value={message.address} onChange={(e)=>changeMessage(e)} required="true"/><br/>
     </div>
      <div className='input-box'>
      <label className="details" for="Phone Number"><b>Phone Number:</b></label>
      <input type="phone" placeholder="Enter your Number"id="phone" name="Number"  pattern='^{0-9}$'minLength="10" maxLength='10' value={message.phone} onChange={(e)=>changeMessage(e)}  required="true"/><br/>
      </div>
      <div className='input-box'>
      <label className="details" for="Phone Number"><b>Email:</b></label>
      <input type="email" placeholder="Enter your Email" id="email" name="email"value={message.email} onChange={(e)=>changeMessage(e)} required="true" /><br/>
       </div >
      <div className='input-box'>
      <label className="details" for="Phone Number"><b>Date_Of_Birth:</b></label>
      <input type="date" placeholder="Enter your Date of Birth"id="date_of_Birth" name="date_of_birth"value={message.date_of_Birth} onChange={(e)=>changeMessage(e)} required="true"/><br/>
      </div>
      {/* <button  type="submit" >Sumbit</button> */}
      {
        title1()
      }
      <button className='btn btn-danger'style={{marginLeft:"10px"}} type="submit"onClick={(e)=>{nav('/')}} >Cancel</button>
      </form>

      <hr/>
      
    </div>
  )
}

export default Customer;
