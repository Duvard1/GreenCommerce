package com.greencommerce.login_service.security;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
        @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/auth/login",
                    "/swagger-ui.html", 
                    "/swagger-ui/**", 
                    "/v3/api-docs/**", 
                    "/v3/api-docs.yaml"
                ).permitAll()
                .anyRequest().authenticated()
            )
            .build();
    }
}
