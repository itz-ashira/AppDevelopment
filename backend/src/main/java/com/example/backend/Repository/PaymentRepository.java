package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.Model.PaymentModel;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentModel,Integer>{

}
