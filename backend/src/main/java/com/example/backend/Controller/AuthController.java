package com.example.backend.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.Model.AdmissionModel;
import com.example.backend.Model.ContactModel;
import com.example.backend.Model.PaymentModel;
import com.example.backend.Model.RefreshToken;
import com.example.backend.Model.User;
import com.example.backend.Repository.AdmissionRepository;
import com.example.backend.Repository.ContactRepository;
import com.example.backend.Repository.PaymentRepository;
import com.example.backend.Service.AuthService;
import com.example.backend.Service.JwtService;
import com.example.backend.Service.RefreshTokenService;
import com.example.backend.Utils.AuthResponse;
import com.example.backend.Utils.LoginRequest;
import com.example.backend.Utils.RefreshTokenRequest;
import com.example.backend.Utils.RegisterRequest;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") 
public class AuthController {
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;
    @Autowired
    private AdmissionRepository admissionRepo;
    @Autowired
    private ContactRepository contactRepo;
    @Autowired
    private PaymentRepository paymentRepo;

    public AuthController(AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService) {
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }
    //Admission
    @GetMapping("/admission/get")
    public List<AdmissionModel> getAdmission(@RequestParam List<AdmissionModel> param) {
        return admissionRepo.findAll();
    }
    @PostMapping("/admission/post")
    public Boolean postAdmission(@RequestBody AdmissionModel entity){
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

    @PostMapping("/register/post")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/login/post")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
        User user = refreshToken.getUser();

        String accessToken = jwtService.generateToken(user);

        return ResponseEntity.ok(AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build());
    }
}
