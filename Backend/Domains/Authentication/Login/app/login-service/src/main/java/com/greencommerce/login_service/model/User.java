package com.greencommerce.login_service.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "day_birth")
    private int dayBirth;

    @Column(name = "month_birth")
    private int monthBirth;

    @Column(name = "year_birth")
    private int yearBirth;

    private String gender;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(unique = true)
    private String email;

    private String password;
}