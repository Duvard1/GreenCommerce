package com.greencommerce.login_service.controller;

import com.greencommerce.login_service.dto.LoginRequest;
import com.greencommerce.login_service.service.LoginService;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@RestController
@RequestMapping("/auth")
@CrossOrigin
@Tag(name = "Authentication", description = "Endpoints for user login using email and password")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private LoginService loginService;

        @Operation(
        summary = "User login",
        description = "Authenticates a user and returns a JWT token if credentials are valid.",
        responses = {
            @ApiResponse(responseCode = "200", description = "Login successful",
                content = @Content(mediaType = "application/json",
                schema = @Schema(implementation = String.class))),
            @ApiResponse(responseCode = "401", description = "Invalid credentials",
                content = @Content(mediaType = "text/plain")),
            @ApiResponse(responseCode = "500", description = "Internal server error",
                content = @Content(mediaType = "text/plain"))
        }
    )


    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        logger.info("Login attempt received for email: {}", request.getEmail());
        try {
            String token = loginService.login(request);
            if (token != null) {
                logger.info("Login successful for email: {}", request.getEmail());
                return ResponseEntity.ok(Collections.singletonMap("token", token));
            } else {
                logger.warn("Invalid login credentials for email: {}", request.getEmail());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            logger.error("Internal server error during login for email: {}", request.getEmail(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
}
