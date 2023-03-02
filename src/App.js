
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './Components/Customer'
import ViewallCustomers from './Components/ViewallCustomers';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ViewallBankdetails from './Components/ViewAllBankDetails';
import SingleDetail from './Components/SingleDetail';
import CreateBank from './Components/CreateBank';


function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/' element = {<ViewallCustomers/>}/> 
     <Route path='/bank' element = {<ViewallBankdetails/>}/>
     <Route path = "/cus" element={<Customer/>}/>
     <Route path="/edit-customer/:customerId" element={<Customer/>}/>
     <Route path = "/Single/:bankid/" element={<SingleDetail/>}/>
     <Route path = "/view" element={<ViewallBankdetails/>}/>
     <Route path = "/create" element={<CreateBank/>}/>
     <Route path="/edit-bank/:bankid" element={<CreateBank/>}/>
      </Routes>
     {/* <ViewallCustomers/> */}
     {/* <Customer/> */}
    </div>
  );
}

export default App;
