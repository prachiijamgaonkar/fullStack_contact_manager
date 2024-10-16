package com.edu.contact_manager.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = false)
    private String name;

    @Column(nullable = false, unique= true)  
    private String photo;
    
    @Column(nullable = false, unique = true)
    private long mobile;
    
    @Column(nullable = false, unique = true)
    private String email;
   
    @Column(nullable = false)  
    private String title;
    @Column(nullable = false)  
    private String company;


    @Column(nullable = false)  
    private String groupId;
}
