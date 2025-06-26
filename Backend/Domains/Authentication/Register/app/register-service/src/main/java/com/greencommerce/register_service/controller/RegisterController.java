package com.greencommerce.register_service.controller;

import com.greencommerce.register_service.model.User;
import com.greencommerce.register_service.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        registerService.register(user);
        return ResponseEntity.ok("User registered successfully!");
    }
}
