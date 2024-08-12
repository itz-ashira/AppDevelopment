package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.Model.ContactModel;


@Repository
public interface ContactRepository extends JpaRepository<ContactModel,Integer>{

}
