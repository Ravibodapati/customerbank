import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Service } from '../Service/Worker'

function CreateBank() {
  const { bankid } = useParams();
  const{customerId} = useParams();
  const [selectC, selectCus] = useState("");

  const[cusName, setCusname]=useState("");

  const nav=useNavigate();

  
  const [data, setData] = useState({
    customer: {
      name: "",
      address: "",
      phone: "",
      date_of_Birth: "",
      email: "",
      customerId: "",
    },
    balance: "",
    account_Number: "",
    account_type: "",
    bank_Name: "",
    bankid: 0,

  });
  const [cus, setCus] = useState([
    {
      name: "",
      customerId: ""
    }
  ])

  const changedata = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  const handleChangeCus=(e)=>{
    const selectCustomer=cus.find(item=>item.name===e.target.value);
    const newdata2={...data};
    newdata2.customer.customerId=selectCustomer.customerId;
    setData(newdata2);
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    

    if(bankid){
      Service.updateBank(bankid,data).then((response)=>{
        
        nav('/view')
        alert("Updated Sucessfully");
      })
    }else{
    Service.postBank(data);
    nav('/view')
    alert(" Created Bank Sucessfully");
    }

   
  }

  useEffect(() => {
if(customerId){
  Service.getCustomerById(customerId).then((response)=>{
      setData({
          name: response.data.customer.name,
            address: response.data.customer.address,
            phone: response.data.customer.phone,
            email: response.data.customer.email,
            date_of_Birth: response.data.customer.date_of_Birth,
            customerId: response.data.customer.customerId
      });
    });
    }else{
      const fetchdata = async () => {
        const resp = await Service.getCustomers();
        setCus(resp.data);
    }
    

      fetchdata();
  
}}, [bankid]);
  

  useEffect(() => {
      if(bankid){
    Service.getBankById(bankid).then((response)=>{
      setData(
        {

          customer: {
           name: response.data.customer.name,
            address: response.data.customer.address,
            phone: response.data.customer.phone,
            email: response.data.customer.email,
            date_of_Birth: response.data.customer.date_of_Birth,
            customerId: response.data.customer.customerId
        },
          bank_Name: response.data.bank_Name,
          account_Number:response.data.account_Number,
          account_type:response.data.account_type,
          balance:response.data.balance,
          bankid:response.data.bankid
          

      }

      )

      setCusname(response.data.customer.name)

      
    })}
   }, [customerId])

  

  const title=()=>{
    if(bankid){
      return <h2 className='title'>Edit Bank</h2>
    }else{
      return <h2 className='title'>Add Bank</h2>
    }
  }
  const title1=()=>{
    if(bankid){
      return <button className='btn btn-primary' >Update</button>
    }else{
      return <button className='btn btn-primary'>Submit</button>
    }

  }

  console.log(selectC)
  console.log(cusName);

  return (

    <div>
      {
        title()
      }
      
      <form onSubmit={handleSubmit} className='Container'>
        <div className='input-box'>
          <b><label>Customer_Name:</label></b>
          <select defaultValue={bankid? cusName: selectC} onChange={handleChangeCus} disabled={bankid?true:false}>
            <option>--Select Customer--</option>
            {
              cus.map((item) => {
                return <option value={item.name} key={item.customerId}>{item.name}</option>
              })
            }
          </select>
        </div>
        <div className='input-box'>
          <label className="details"><b>Bank_Name:</b></label>
          <input type="text" placeholder="Enter Bank_Name" id="bank_Name" name="Bank_name" value={data.bank_Name} onChange={(e) => changedata(e)} required="true" /><br />

        </div>
        <div className='input-box'>
          <label className="details" ><b>Account_Number:</b></label>
          <input type="number" placeholder="Enter your Account_Number" id="account_Number" name="account_Number" value={data.account_Number} onChange={(e) => changedata(e)} required="true" /><br />
        </div>
        <div className='input-box'>
          <label className="details" ><b>Account_Type:</b></label>
          <input type="text" placeholder="Enter your Number"id="account_type" name="account_type" value={data.account_type} onChange={(e) => changedata(e)} required="true" /><br />
        </div>
        <div className='input-box'>
          <label className="details" ><b>Balance:</b></label>
          <input type="text" placeholder="Enter your Balance"id="balance" name="balance" value={data.balance} onChange={(e) => changedata(e)} required="true" /><br />
        </div>
        {/* <button  type="submit" >Sumbit</button> */}
        {
        title1()
      }
      <button className='btn btn-danger'style={{marginLeft:"10px"}} type="submit"onClick={(e)=>{nav('/view')}} >Cancel</button>
       </form>
       </div>
  )
        }
        export default CreateBank
