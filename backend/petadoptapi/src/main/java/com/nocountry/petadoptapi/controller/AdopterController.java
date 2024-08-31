package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.model.Adopter;
import com.nocountry.petadoptapi.dto.AdopterDto;
import com.nocountry.petadoptapi.service.AdopterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/adopter")
public class AdopterController {
    private final AdopterService adopterService;

    public AdopterController(AdopterService adopterService) {
        this.adopterService = adopterService;
    }

    @GetMapping
    public ResponseEntity<?> readAdopter() {
        try {
            Adopter adopter = adopterService.getAdopter();
            AdopterDto response = new AdopterDto(
                    adopter.getFirstName(),
                    adopter.getLastName(),
                    adopter.getAddress(),
                    adopter.getContact(),
                    adopter.getDescription()
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createAdopter(@RequestBody AdopterDto adopterDto) {
        try {
            String jwt = adopterService.saveAdopter(adopterDto);
            Map<String, String> response = new HashMap<>();
            response.put("id", jwt);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateAdopter(@RequestBody AdopterDto adopterDto) {
        try {
            Adopter adopter = adopterService.updateAdopter(adopterDto);
            AdopterDto response = new AdopterDto(
                    adopter.getFirstName(),
                    adopter.getLastName(),
                    adopter.getAddress(),
                    adopter.getContact(),
                    adopter.getDescription()
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
