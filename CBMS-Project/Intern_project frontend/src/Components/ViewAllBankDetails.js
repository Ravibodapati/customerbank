import React,{useEffect,useState} from 'react'
import { useNavigate,Link,useParams } from 'react-router-dom'

import {Service} from '../Service/Worker'
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import {Button} from 'reactstrap'

function ViewallBankdetails() {
    const {bankid}=useParams();
    const nav=useNavigate();
    const [bankList, setBankList]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getBanks();
    }, [bankid]);

    const getBanks = () => {
        Service.getBanks().then((response)=>{
            setBankList(response.data)
        });
    };

    const deleteBank = (bankid) => {
        Service.deleteBank(bankid).then((response)=>{
            getBanks();
        });
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBankList = bankList.filter((bank) => {
        return bank.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    

    const downloadSearchData = () => {
      const doc = new jsPDF();
      const data = filteredBankList.map(bank => [bank.customer.customerId, bank.customer.name, bank.bankid, bank.bank_Name, bank.account_type, bank.account_Number, bank.balance]);
      doc.autoTable({
        head: [['Customer Id', 'Customer Name', 'Bank Id', 'Bank Name', 'Account Type', 'Account Number', 'Balance']],
        body: data
      });
      doc.save("a.pdf");
    };


      
    

    return (
        <div>
            <h2 className='title'>View All Bank Details</h2>
            <button className='btn' onClick={()=>nav('/')} >back</button>
            <button className='btn' onClick={()=>nav('/create')} >Create Bank</button>

            <div>
    
    <Button className='pdf' onClick={downloadSearchData}>Download Pdf</Button>
    
  </div>

                    <from className="d-flex" role="search">
                    <input className="form-control me-2" style={{width:"300px",marginLeft:"40%"}} type="Serach" aria-label='search' id="search" placeholder="Search Customer Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onClick={handleSearchQueryChange}/>
                    
                 </from>
        {/* <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search customer name" value={searchQuery} onChange={handleSearchQueryChange} />
            </div> */}

            <table  className="table table-success table-striped, table table-bordered border-primary" >
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Bank Id</th>
                        <th>Bank Name</th>
                        <th>Account Type</th>
                        <th>Account Number</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBankList && filteredBankList.map((bank) => (
                        <tr key={bank.bankid}>
                            <td>{bank.customer.customerId}</td>
                            <td>{bank.customer.name}</td>
                            <td>{bank.bankid}</td>
                            <td>{bank.bank_Name}</td>
                            <td>{bank.account_type}</td>
                            <td>{bank.account_Number}</td>
                            <td>{bank.balance}</td>
                            <td>
                                <Link className="btn btn-outline-primary" to={`/Single/${bank.bankid}`}>view</Link>
                                <Link className="btn btn-outline-secondary" to={`/edit-bank/${bank.bankid}`} style={{marginLeft:"10px"}}>Edit</Link>
                                <button className="btn btn-outline-danger" onClick={() => deleteBank(bank.bankid)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody> 
            </table>
        </div>
    )
}

export default ViewallBankdetails;
