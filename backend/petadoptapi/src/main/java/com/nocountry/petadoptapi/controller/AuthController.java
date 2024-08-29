package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.config.JwtUtil;
import com.nocountry.petadoptapi.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Credential credential) {
        if (authService.existsByEmail(credential.email())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        String email = credential.email();
        String password = passwordEncoder.encode(credential.password());

        authService.registerUser(email, password);

        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody Credential credential) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(credential.email(), credential.password())
            );
        } catch (Exception e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = authService.loadUserByUsername(credential.email());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());

        Map<String, String> response = new HashMap<>();
        response.put("token", jwt);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/secure")
    public ResponseEntity<?> testEndpoint() {
        return ResponseEntity.ok("Hello from secure endpoint!");
    }
}