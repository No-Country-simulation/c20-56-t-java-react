package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.dto.ShelterDto;
import com.nocountry.petadoptapi.model.Shelter;
import com.nocountry.petadoptapi.service.ShelterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/shelter")
public class ShelterController {
    private final ShelterService shelterService;

    public ShelterController(ShelterService shelterService) {
        this.shelterService = shelterService;
    }

    @GetMapping
    public ResponseEntity<?> readShelter() {
        try {
            Shelter shelter = shelterService.getShelter();
            ShelterDto response = new ShelterDto(
                    shelter.getShelterName(),
                    shelter.getAddress(),
                    shelter.getContact(),
                    shelter.getDescription()
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createShelter(@RequestBody ShelterDto shelterDto) {
        try {
            String jwt = shelterService.saveShelter(shelterDto);
            Map<String, String> response = new HashMap<>();
            response.put("id", jwt);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateShelter(@RequestBody ShelterDto shelterDto) {
        try {
            Shelter shelter = shelterService.updateShelter(shelterDto);
            ShelterDto response = new ShelterDto(
                    shelter.getShelterName(),
                    shelter.getAddress(),
                    shelter.getContact(),
                    shelter.getDescription()
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
