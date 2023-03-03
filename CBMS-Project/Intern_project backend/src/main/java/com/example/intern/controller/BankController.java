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

import com.example.intern.model.Bank;

import com.example.intern.repository.BankRepository;

@CrossOrigin("*")
@RestController
public class BankController {

	@Autowired
	BankRepository bankRepository;
	
	@PostMapping("/api/Banks")
    public ResponseEntity<Bank>  saveBank(@RequestBody Bank bank) {
        return new ResponseEntity<>(bankRepository.save(bank),HttpStatus.CREATED);
    }
	@GetMapping("/api/Banks")
    public ResponseEntity<List<Bank>> getBanks() {
    	return new ResponseEntity<>(bankRepository.findAll(),HttpStatus.OK);
    }
	@GetMapping("/api/Banks/{id}")
    public ResponseEntity<Bank> getBank(@PathVariable Integer id) {
    	Optional<Bank> bank= bankRepository.findById(id);
    	if(bank.isPresent()) {
    		return new ResponseEntity<>(bank.get(),HttpStatus.OK);
    	}
    	else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    }
	
	
//	@GetMapping("/api/{fk_Customerid}")
//    public ResponseEntity<List<Bank>> getBanksByfk_customerid(@PathVariable Integer CustomerId) {
//		List<Bank> banks = bankRepository.findByCustomerCustomerId(CustomerId);
//		
//		return ResponseEntity.ok(banks);
//	}
//	
	@PutMapping("/api/Banks/{id}")
    public ResponseEntity<Bank> updateBank(@PathVariable Integer id,@RequestBody Bank ban) {
    	Optional<Bank> bank= bankRepository.findById(id);
    	if(bank.isPresent()) {
    		bank.get().setAccount_Number(ban.getAccount_Number());
    		bank.get().setAccount_type(ban.getAccount_type());
    		bank.get().setBalance(ban.getBalance());
    		bank.get().setBank_Name(ban.getBank_Name());
    		
    		return new ResponseEntity<>(bankRepository.save(bank.get()),HttpStatus.OK);
    	}
    	else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    	
    }
	@DeleteMapping("/api/Banks/{id}")
    public ResponseEntity<Bank> deleteBank(@PathVariable Integer id) {
    	Optional<Bank> bank= bankRepository.findById(id);
    	if(bank.isPresent()) {
    		bankRepository.deleteById(id);
    		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    	}
    	else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    	
    }
}

