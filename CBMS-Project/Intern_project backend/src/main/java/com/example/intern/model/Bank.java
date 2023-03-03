package com.example.intern.model;


import javax.persistence.CascadeType;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import javax.persistence.Table;



@Entity
@Table(name="bank")
public class Bank {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int Bankid;
	
	@Column(name="Account_type")
	private String Account_type;
	@Column(name="Account_Number")
	private long Account_Number;
	@Column(name="Balance")
	private long Balance;
	
	@Column(name="Bank_Name")
	private String Bank_Name;
	
	
	@ManyToOne
	@JoinColumn(name="fk_Customerid")
	private Customer customer;
	
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer (Customer customer) {
		this.customer = customer;
	}
	 
	public Bank() {
		
	}
	
	public Bank( int bankid,String account_type, long account_Number, long balance, String bank_Name) {
		super();
		this.Bankid=bankid;
		this.Account_type = account_type;
		this.Account_Number = account_Number;
		this.Balance = balance;
		this.Bank_Name = bank_Name;
	}

	public int getBankid() {
		return Bankid;
	}
	
	
	public void setBankid(int bankid) {
		Bankid = bankid;
	}

	public String getAccount_type() {
		return Account_type;
	}

	public void setAccount_type(String account_type) {
		Account_type = account_type;
	}

	public long getAccount_Number() {
		return Account_Number;
	}

	public void setAccount_Number(long account_Number) {
		Account_Number = account_Number;
	}

	public long getBalance() {
		return Balance;
	}

	public void setBalance(long balance) {
		Balance = balance;
	}
	public String getBank_Name() {
		return Bank_Name;
	}
	public void setBank_Name(String bank_Name) {
		Bank_Name = bank_Name;
	}
	
	
}

