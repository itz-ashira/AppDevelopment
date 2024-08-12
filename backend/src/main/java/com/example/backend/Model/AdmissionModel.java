package com.example.backend.Model;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdmissionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AdmissionNo;

    private String firstname;

    private String lastname;

    private String email;

    private String gender;

    private String address;
    
    private String city;
    
    private String state;
    
    private String zip;
    
    private Date dob;

    private long phone;

    private String course;

}
