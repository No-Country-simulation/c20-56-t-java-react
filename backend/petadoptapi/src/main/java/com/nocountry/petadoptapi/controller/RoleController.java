package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.model.Role;
import com.nocountry.petadoptapi.service.JwtUtil;
import com.nocountry.petadoptapi.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/role")
public class RoleController {
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public RoleController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PutMapping("/switch/{role}")
    public ResponseEntity<?> switchRole(@PathVariable Role role) {
        try {
            String jwt = userService.switchRole(role);
            Map<String, String> response = new HashMap<>();
            response.put("token", jwt);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
