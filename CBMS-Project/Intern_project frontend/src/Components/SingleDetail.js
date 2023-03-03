import React,{useState,useEffect} from 'react'

import { useParams,useNavigate } from 'react-router-dom';
import {Service} from '../Service/Worker'
function SingleDetail() {

  const [view,setview]=useState([]);
  const {bankid}=useParams();
  const nav=useNavigate();

  useEffect(() => {
    try {
      Service.getBankById(bankid).then((response) => {
        setview(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [bankid]);

    const getData  =view && [view].map((x)=>{
      return <>
      <form className="container">
      {/* <div className="containerss"> */}
     {/* <div className="'input-box"> */}
     <div className="card-body">
    
            <p><span style={{marginRight :"10px" ,fontWeight:"500"}}>Bank Name :</span>{x.bank_Name}</p>
            <p><span style={{marginRight :"10px" ,fontWeight:"500"}}>Account Number :</span>{x.account_Number}</p>
            <p><span style={{marginRight :"10px" ,fontWeight:"500"}}>Account_Type :</span>{x.account_type}</p>
            <p><span style={{marginRight :"10px" ,fontWeight:"500"}}>Balance :</span>{x.balance}</p>
            <p><span style={{marginRight :"10px" ,fontWeight:"500"}}>Customer_Name:</span>{x.customer?.name}</p>
             <p> <span style={{marginRight :"10px" ,fontWeight:"500"}}>CustomerId:</span>{x.customer?.customerId}</p>
     </div>
     {/* </div> */}
     <button className="btn btn-dark" style={{marginTop:"50px" ,marginLeft:"270px" ,width:"80px"}} onClick={()=>nav('/view')}>Back</button>
      {/* </div>  */}
      </form>
      </>
    })
  return (
    
    <div>
     {getData}
     
    </div>
    
  )
}

export default SingleDetail
