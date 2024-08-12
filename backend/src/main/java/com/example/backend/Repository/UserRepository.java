package com.example.backend.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.backend.Model.User;

import jakarta.transaction.Transactional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String username);
    @Transactional
    @Modifying
    @Query("update User u set u.password = ?2 where u.email = ?1")
    void updatePassword(String email, String password);
    @Query(value = "SELECT * from register_model where email=?1 and password=?2", nativeQuery = true)
    public List<User> studentLogin(String email,String password);
}