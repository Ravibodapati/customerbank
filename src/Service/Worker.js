import axios from 'axios'


const CUSTOMER_BASE_URL='http://localhost:8080/api/Customers';
const BANK_BASE_URL='http://localhost:8080/api/Banks';

export const Service= {

     getCustomers:()=>{
        return axios.get(CUSTOMER_BASE_URL)
      },
      post:(data)=>{
        return axios.post(CUSTOMER_BASE_URL,data)
      },
      getCustomerById:(customerId)=>{
        return axios.get(CUSTOMER_BASE_URL + '/' + customerId)
      },
      updateCustomer:(customerId, data)=>{
        return axios.put(CUSTOMER_BASE_URL + '/' + customerId, data)
      },
      deleteCustomer:(customerId)=>{
        return axios.delete(CUSTOMER_BASE_URL + '/' + customerId)
      },
      getBanks:()=>{
        return axios.get(BANK_BASE_URL)
      },
      deleteBank:(Bankid)=>{
        return axios.delete(BANK_BASE_URL + '/' + Bankid);
      },
      getBankById:(Bankid)=>{
        return axios.get(BANK_BASE_URL + '/' + Bankid)
      },
      postBank:(data)=>{
        return axios.post(BANK_BASE_URL,data)
      },
      updateBank:(bankid, data)=>{
        return axios.put(BANK_BASE_URL + '/' + bankid, data)
      },

}


