package com.nocountry.petadoptapi.service;

import com.nocountry.petadoptapi.model.User;
import com.nocountry.petadoptapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class AuthService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public boolean existsByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.isPresent();
    }

    public void registerUser(String email, String password) {
        User user = new User(email, password);
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User not found");
        }
        return new org.springframework.security.core.userdetails.User(
                user.get().getEmail(),
                user.get().getPassword(),
                new ArrayList<>());
    }
}
