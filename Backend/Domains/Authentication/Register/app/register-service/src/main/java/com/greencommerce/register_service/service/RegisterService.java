package com.greencommerce.register_service.service;

import com.greencommerce.register_service.model.User;
import com.greencommerce.register_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service
public class RegisterService {

    private static final Logger logger = LoggerFactory.getLogger(RegisterService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void register(User user) {

        logger.info("Attempting to register user with email: {}", user.getEmail());
        if (userRepository.findByEmail(user.getEmail()) != null) {
            logger.warn("User with email {} already exists!", user.getEmail());
            throw new RuntimeException("User already exists!");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        logger.info("User with email {} registered successfully.", user.getEmail());
    }
}
