package com.example.intern.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.intern.model.Bank;
@Repository
public interface BankRepository extends JpaRepository<Bank, Integer> {

//	@Query("SELECT b FROM Bank b WHERE b.customer.customerId = :customerId")
//	List<Bank> findByCustomerCustomerId(@Param("customerId") Integer customerId);
}
