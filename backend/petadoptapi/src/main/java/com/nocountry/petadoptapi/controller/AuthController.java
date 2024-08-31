package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.requests.AuthRequest;
import com.nocountry.petadoptapi.service.JwtUtil;
import com.nocountry.petadoptapi.service.UserService;
import com.nocountry.petadoptapi.exceptions.UserAlreadyExistsException;
import io.jsonwebtoken.Claims;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AuthController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody AuthRequest authRequest) {
        try {
            userService.registerUser(authRequest);
            return ResponseEntity.ok("User registered successfully!");
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration.");
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthRequest authRequest) {
        try {
            String jwt = userService.authenticate(authRequest);
            Map<String, String> response = new HashMap<>();
            response.put("token", jwt);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /*
    * Solo para testeo.
    * Hay que eliminarlo.
    */
    @GetMapping("/claims")
    public Claims testClaims(@RequestHeader("Authorization") String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        return jwtUtil.extractAllClaims(token);
    }
}