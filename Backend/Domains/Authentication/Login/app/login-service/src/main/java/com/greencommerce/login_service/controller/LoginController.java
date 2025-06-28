package com.greencommerce.login_service.controller;

import com.greencommerce.login_service.dto.LoginRequest;
import com.greencommerce.login_service.service.LoginService;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;
    // Constructor injection can also be used
    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    String token = loginService.login(request);

    if (token != null) {
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
    }
}
}
