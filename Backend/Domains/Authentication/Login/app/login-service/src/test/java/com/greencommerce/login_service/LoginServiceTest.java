package com.greencommerce.login_service.service;

import com.greencommerce.login_service.dto.LoginRequest;
import com.greencommerce.login_service.model.User;
import com.greencommerce.login_service.repository.UserRepository;
import com.greencommerce.login_service.service.LoginService;
import com.greencommerce.login_service.util.JwtUtil;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class LoginServiceTest {

    private UserRepository userRepository;
    private JwtUtil jwtUtil;
    private LoginService loginService;

    @BeforeEach
    void setUp() {
        userRepository = mock(UserRepository.class);
        jwtUtil = mock(JwtUtil.class);
        loginService = new LoginService(userRepository, jwtUtil);
    }

    
    // Valid user with correct password, Returns Token
    @Test
    void shouldReturnTokenWhenCredentialsAreValid() {
        // Arrange
        LoginRequest request = new LoginRequest();
        request.setEmail("user@example.com");
        request.setPassword("securepassword");

        User user = new User();
        user.setEmail("user@example.com");
        user.setPassword(new BCryptPasswordEncoder().encode("securepassword"));

        when(userRepository.findByEmail("user@example.com")).thenReturn(Optional.of(user));
        when(jwtUtil.generateToken("user@example.com")).thenReturn("mocked-jwt-token");

        // Act
        String result = loginService.login(request);

        // Assert
        assertNotNull(result);
        assertEquals("mocked-jwt-token", result);
    }


    //User does not exist, Returns Null
    @Test
    void shouldReturnNullWhenUserNotFound() {
        // Arrange
        LoginRequest request = new LoginRequest();
        request.setEmail("notfound@example.com");
        request.setPassword("irrelevant");

        when(userRepository.findByEmail("notfound@example.com")).thenReturn(Optional.empty());

        // Act
        String result = loginService.login(request);

        // Assert
        assertNull(result);
    }


    // The password is incorrect, Returns Null
    @Test
    void shouldReturnNullWhenPasswordIsIncorrect() {
        // Arrange
        LoginRequest request = new LoginRequest();
        request.setEmail("user@example.com");
        request.setPassword("wrongpassword");

        User user = new User();
        user.setEmail("user@example.com");
        user.setPassword(new BCryptPasswordEncoder().encode("correctpassword"));

        when(userRepository.findByEmail("user@example.com")).thenReturn(Optional.of(user));

        // Act
        String result = loginService.login(request);

        // Assert
        assertNull(result);
    }
}
