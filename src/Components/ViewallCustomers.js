import React,{useEffect, useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import {Service} from '../Service/Worker'
function ViewallCustomers() {
    const nav = useNavigate();
const [Customer, setCustomer]=useState([])

useEffect(() => {
  
    getCustomers();
    
}, [])

const getCustomers=async()=>{
    Service.getCustomers().then ((response)=>{
        setCustomer(response.data)
        
    })
}

const deleteCustomer =async(customerId)=>{
   Service.deleteCustomer(customerId).then((response)=>{
    getCustomers();
   })
}



  return (
    <div>
    
        <h2 className='title'>View All Customers</h2>
        <button className='btn' onClick={()=>nav('/cus')} >Create</button>
        
        <button className='btn' onClick={()=>nav('/bank')} >Bank Details</button>
        

      <table  className="table table-success table-striped, table table-bordered border-primary" >
        
            <thead>
                <tr >

                    {/* <th>Customer Id</th> */}
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date_Of_Birth</th>
                    <th>Actions</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    Customer.map(
                        customer=>
                        <tr key={customer.customerId}>
                            {/* <td>{customer.customerId}</td> */}
                            <td>{customer.name}</td>
                             <td>{customer.address}</td>
                             <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.date_of_Birth}</td>
                            <td>
                            <Link className="btn btn-outline-primary" to={`/edit-customer/${customer.customerId}`}>Edit</Link>
                            <button className="btn btn-outline-danger" onClick={() => deleteCustomer(customer.customerId)} style={{marginLeft:"10px"}}>Delete</button>
                            {/* <button className="btn btn-outline-sucess" onClick={() => getBankById(customer.bank.bankid)} style={{marginLeft:"10px"}}>Bank Details</button> */}
                            
                            
                            </td>
                        </tr>
                        
                    )
               }
            
            </tbody>
        </table>
        
    </div>
  )
}

export default ViewallCustomers
