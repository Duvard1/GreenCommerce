package com.greencommerce.register_service.model;

import io.swagger.v3.oas.annotations.media.Schema;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique identifier for the user", example = "1")
    private Long id;

     @Schema(description = "Username", example = "name")
    private String name;

    @Schema(description = "User surname", example = "last_name")
    @Column(name = "last_name")
    private String lastName;

    @Schema(description = "User's day of birth", example = "1")
    @Column(name = "day_birth")
    private int dayBirth;

    @Schema(description = "User's month of birth", example = "1")
    @Column(name = "month_birth")
    private int monthBirth;

    @Schema(description = "User's year of birth", example = "2000")
    @Column(name = "year_birth")
    private int yearBirth;

    @Schema(description = "User gender", example = "Hombre")
    private String gender;

    @Schema(description = "User phone number", example = "0999999999")
    @Column(name = "phone_number")
    private String phoneNumber;

    @Schema(description = "Unique user email address", example = "name@email.com")
    @Column(unique = true)
    private String email;

    @Schema(description = "User encrypted password ", example = "password")
    private String password;

    @Schema(description = "User profile photo URL", example = "https://example.com/profile.jpg")
    @Column(name = "profile_photo")
    private String profilePhoto;

    @Schema(description = "User shipping address", example = "Av. Amazonas N34-56, Quito")
    @Column(name = "shipping_address")
    private String shippingAddress;

    @Schema(description = "User creation date", example = "2025-07-05T10:34:00")
    @Column(name = "created_at", updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp createdAt;
}