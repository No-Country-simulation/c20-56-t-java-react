package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.responses.AdopterResponse;
import com.nocountry.petadoptapi.requests.PetRequest;
import com.nocountry.petadoptapi.responses.PetAdopterResponse;
import com.nocountry.petadoptapi.responses.PetResponse;
import com.nocountry.petadoptapi.responses.PetResponseForAdopters;
import com.nocountry.petadoptapi.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @Autowired
    private PetService petService;

    // Obtener todos los pets (Devuelve una lista de PetResponse)
    @GetMapping
    public Set<PetResponse> getAllPets() {
        return petService.getAllPets();
    }

    // Obtener un pet por ID (Devuelve un PetDto)
    @GetMapping("/{id}")
    public ResponseEntity<PetResponse> getPetById(@PathVariable Integer id) {
        PetResponse pet = petService.getPetById(id);
        return ResponseEntity.ok(pet);
    }

    // Crear un nuevo pet (Recibe y devuelve un PetDto)
    @PostMapping("/create")
    public ResponseEntity<PetResponse> createPet(@RequestBody PetRequest petRequest) {
        PetResponse savedPet = petService.savePet(petRequest);
        return ResponseEntity.ok(savedPet);
    }

    // Actualizar un pet existente por su ID
    @PutMapping("/{id}/update")
    public ResponseEntity<?> updatePet(@PathVariable Integer id, @RequestBody PetRequest petRequest) {
        try {
            PetResponse updatedPet = petService.updatePet(id, petRequest);
            return ResponseEntity.ok(updatedPet);
        } catch (AccessDeniedException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor.");
        }
    }

    // Eliminar un pet por su ID
    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void> deletePet(@PathVariable Integer id) {
        petService.deletePet(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/adopt")
    public ResponseEntity<?> adoptPet(@PathVariable Integer id) {
        try {
            PetAdopterResponse response = petService.adoptOrCancelPet(id);
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + e.getMessage());
        }
    }

    @GetMapping("/my-wishlist")
    public ResponseEntity<?> getMyWishList() {
        Set<PetResponseForAdopters> pets = petService.getMyWishList();
        return ResponseEntity.ok().body(pets);
    }
}
