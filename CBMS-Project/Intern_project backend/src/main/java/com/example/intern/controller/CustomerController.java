package com.example.intern.controller;



import java.util.List;




import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.intern.model.Customer;
import com.example.intern.repository.CustomerRepository;



@CrossOrigin("*")
	@RestController
	
	public class CustomerController {
@Autowired
	    CustomerRepository customerRepository;

	    @PostMapping("/api/Customers")
	    public ResponseEntity<Customer>  saveCustomer(@RequestBody Customer customer) {
	        return new ResponseEntity<>(customerRepository.save(customer),HttpStatus.CREATED);
	    }
	    @GetMapping("/api/Customers")
	    public ResponseEntity<List<Customer>> getCustomers() {
	    	return new ResponseEntity<>(customerRepository.findAll(),HttpStatus.OK);
	    }
	    @GetMapping("/api/Customers/{id}")
	    public ResponseEntity<Customer> getCustomer(@PathVariable Integer id) {
	    	Optional<Customer> customer= customerRepository.findById(id);
	    	if(customer.isPresent()) {
	    		return new ResponseEntity<>(customer.get(),HttpStatus.OK);
	    	}
	    	else {
	    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    	}
	    	
	    }
	    @PutMapping("/api/Customers/{id}")
	    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer id, @RequestBody Customer cust) {
//	    	Integer id =cust.getCustomerId();
	    	Optional<Customer> customer= customerRepository.findById(id);
	    	if(customer.isPresent()) {
	    		customer.get().setName(cust.getName());
	    		customer.get().setAddress(cust.getAddress());
	    		customer.get().setPhone(cust.getPhone());
	    		customer.get().setEmail(cust.getEmail());
	    		customer.get().setDate_of_Birth(cust.getDate_of_Birth());
	    		return new ResponseEntity<>(customerRepository.save(customer.get()),HttpStatus.OK);
	    	}
	    	else {
	    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    	}
	    	
	    }
	    @DeleteMapping("/api/Customers/{id}")
	    public ResponseEntity<Customer> deleteCustomer(@PathVariable Integer id) {
	    	Optional<Customer> customer= customerRepository.findById(id);
	    	if(customer.isPresent()) {
	    		customerRepository.deleteById(id);
	    		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    	}
	    	else {
	    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    	}
	    	
	    }
	}