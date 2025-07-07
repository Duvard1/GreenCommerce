package com.greencommerce.register_service.service;

import com.greencommerce.register_service.model.User;
import com.greencommerce.register_service.repository.UserRepository;

import com.greencommerce.register_service.service.RegisterService;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RegisterServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private RegisterService registerService;

    // Case 1: The user already exists
    @Test
    public void testRegister_WhenUserAlreadyExists_ShouldThrowException() {
        // Arrange
        User existingUser = new User();
        existingUser.setEmail("test@example.com");

        when(userRepository.findByEmail("test@example.com")).thenReturn(existingUser);

        User newUser = new User();
        newUser.setEmail("test@example.com");

        // Act & Assert
        assertThrows(RuntimeException.class, () -> {
            registerService.register(newUser);
        });

        verify(userRepository, never()).save(any());
    }

    //Case 2: The user is new
    @Test
    public void testRegister_WhenUserIsNew_ShouldEncryptPasswordAndSave() {
        // Arrange
        User newUser = new User();
        newUser.setEmail("new@example.com");
        newUser.setPassword("plaintext");

        when(userRepository.findByEmail("new@example.com")).thenReturn(null);
        when(passwordEncoder.encode("plaintext")).thenReturn("encryptedPassword");

        // Act
        registerService.register(newUser);

        // Assert
        verify(passwordEncoder).encode("plaintext");
        verify(userRepository).save(newUser);
    }
}
