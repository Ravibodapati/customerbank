package com.example.intern.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.intern.model.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
