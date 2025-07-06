package com.greencommerce.register_service.controller;

import com.greencommerce.register_service.model.User;
import com.greencommerce.register_service.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Tag(name = "Auth", description = "User registration microservice")
@RestController
@RequestMapping("/auth")
public class RegisterController {
    private static final Logger logger = LoggerFactory.getLogger(RegisterController.class);
    @Autowired
    private RegisterService registerService;

    @Operation(
        summary = "Register a new user",
        description = "This Endpoint allows you to register a new user with the basic data required.",
        responses = {
            @ApiResponse(responseCode = "200", description = "User registered successfully!",
                content = @Content(mediaType = "text/plain")),
            @ApiResponse(responseCode = "400", description = "User already exists!",
                content = @Content)
        }
    )


    

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        logger.info("Received registration request for email: {}", user.getEmail());
        registerService.register(user);
        logger.info("Registration completed for email: {}", user.getEmail());
        return ResponseEntity.ok("User registered successfully!");
    }
}
