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


@RestController
@RequestMapping("/auth")
@CrossOrigin
@Tag(name = "Authentication", description = "Endpoints for user login using email and password")
public class LoginController {

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
    // Endpoint for user login
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        try {
            String token = loginService.login(request);

            if (token != null) {
                return ResponseEntity.ok(Collections.singletonMap("token", token));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
}
