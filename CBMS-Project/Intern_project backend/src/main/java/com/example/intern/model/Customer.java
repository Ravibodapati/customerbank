package com.example.intern.model;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Customerid;
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
	private List<Bank> bank;
	
	@Column(name = "name")
	
	private String Name;
	@Column(name = "address")
	
	private String Address;
	@Column(name = "phone")
	
	private String Phone;
	@Column(name = "email")
	private String Email;
	
	@Column(name = "date_of_birth")
	private String Date_of_Birth;
	
	
	public Customer() {
		
	}
	
	public Customer( String Name, String Address, String Phone, String Email, String Date_of_Birth) {
		super();
		this.Name = Name;
		this.Address = Address;
		this.Phone = Phone;
		this.Email = Email;
		this.Date_of_Birth = Date_of_Birth;
	}
	public int getCustomerId() {
		return Customerid;
	}
	public void setCustomerId(int Customerid) {
		this.Customerid = Customerid;
	}
	public String getName() {
		return Name;
	}
	public void setName(String Name) {
		this.Name = Name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String Address) {
		this.Address = Address;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String Phone) {
		this.Phone = Phone;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String Email) {
		this.Email = Email;
	}
	public String getDate_of_Birth() {
		return Date_of_Birth;
	}
	public void setDate_of_Birth(String Date_of_Birth) {
		this.Date_of_Birth = Date_of_Birth;
	}
}
