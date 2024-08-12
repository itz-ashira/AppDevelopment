package com.example.backend.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.Model.AdmissionModel;
import com.example.backend.Model.ContactModel;
import com.example.backend.Model.LoginModel;
import com.example.backend.Model.PaymentModel;
import com.example.backend.Model.User;
import com.example.backend.Repository.AdmissionRepository;
import com.example.backend.Repository.ContactRepository;
import com.example.backend.Repository.LoginRepository;
import com.example.backend.Repository.PaymentRepository;
import com.example.backend.Repository.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CollegeAdmission {

    @Autowired
    private AdmissionRepository admissionRepo;

    @Autowired
    private ContactRepository contactRepo;

    @Autowired
    private PaymentRepository paymentRepo;

    @Autowired
    private UserRepository registerRepo;

    @Autowired
    private LoginRepository loginRepo;
    
    //Admission
    @GetMapping("/admission/get")
    public List<AdmissionModel> getAdmission(@RequestParam List<AdmissionModel> param) {
        return admissionRepo.findAll();
    }
    @PostMapping("admission/post")
    public Boolean postAdmission(@RequestBody AdmissionModel entity) {
        admissionRepo.save(entity);
        return true;
    }

    //Contact
    @GetMapping("/contact/get")
    public List<ContactModel> getContact(@RequestParam List<ContactModel> param) {
        return contactRepo.findAll();
    }
    @PostMapping("/contact/post")
    public Boolean postContact(@RequestBody ContactModel entity) {
        contactRepo.save(entity);
        return true;
    }

    //Payment
    @GetMapping("/payment/get")
    public List<PaymentModel> getPayment(@RequestParam List<PaymentModel> param) {
        return paymentRepo.findAll();
    }
    @PostMapping("/payment/post")
    public Boolean postPayment(@RequestBody PaymentModel entity) {
        paymentRepo.save(entity);
        return true;
    }

    //Login
    @GetMapping("/login/get")
    public List<LoginModel> getLogin(@RequestParam List<LoginModel> param) {
        return loginRepo.findAll();
    }
    @PostMapping("/login/post")
    public Boolean postLogin(@RequestBody LoginModel entity) {
        loginRepo.save(entity);
        return true;
    }

    //Register
    @GetMapping("/register/get/{email}/{password}")
    public Boolean getRegister(@PathVariable String email,@PathVariable String password) {
        List<User> login = registerRepo.studentLogin(email, password);
        if(login.size()>0){
            return true;
        }
        return false;
        // registerRepo.findAll();
        // return true;
    }
    @PostMapping("/register/post")
    public Boolean postRegister(@RequestBody User entity) {
        registerRepo.save(entity);
        return true;
    }
    
}
