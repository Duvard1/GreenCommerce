package com.greencommerce.register_service.repository;

import com.greencommerce.register_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // This method will be used to find a user by their email address
    User findByEmail(String email);
}
