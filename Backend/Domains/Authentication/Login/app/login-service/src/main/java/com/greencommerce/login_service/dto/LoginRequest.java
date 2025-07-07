package com.greencommerce.login_service.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO representing login credentials")
public class LoginRequest {

    @NotBlank(message = "Email cannot be empty")
    @Schema(description = "Email address of the user", example = "user@example.com", required = true)
    private String email;

    @NotBlank(message = "The password cannot be empty")
    @Schema(description = "User password", example = "P@ssword123", required = true)
    private String password;

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    
}
