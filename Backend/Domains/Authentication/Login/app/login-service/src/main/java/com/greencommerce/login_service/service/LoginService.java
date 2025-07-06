package com.greencommerce.login_service.service;

import com.greencommerce.login_service.dto.LoginRequest;
import com.greencommerce.login_service.model.User;
import com.greencommerce.login_service.repository.UserRepository;
import com.greencommerce.login_service.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@Service
public class LoginService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public LoginService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public String login(LoginRequest request) {
        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            boolean passwordCorrect = passwordEncoder.matches(request.getPassword(), user.getPassword());

            if (passwordCorrect) {
                return jwtUtil.generateToken(user.getEmail());
            }
        }

        return null; // credenciales incorrectas
    }
}
