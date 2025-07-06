package com.greencommerce.login_service.service;

import com.greencommerce.login_service.dto.LoginRequest;
import com.greencommerce.login_service.model.User;
import com.greencommerce.login_service.repository.UserRepository;
import com.greencommerce.login_service.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.Optional;

@Service
public class LoginService {

    private static final Logger logger = LoggerFactory.getLogger(LoginService.class);

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public LoginService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public String login(LoginRequest request) {
        logger.debug("Looking up user by email: {}", request.getEmail());
        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            boolean passwordCorrect = passwordEncoder.matches(request.getPassword(), user.getPassword());

            if (passwordCorrect) {
                logger.debug("Password matched for user: {}", request.getEmail());
                return jwtUtil.generateToken(user.getEmail());
            } else {
                logger.warn("Incorrect password for user: {}", request.getEmail());
            }
        }else {
            logger.warn("User not found with email: {}", request.getEmail());
        }

        return null;
    }
}
