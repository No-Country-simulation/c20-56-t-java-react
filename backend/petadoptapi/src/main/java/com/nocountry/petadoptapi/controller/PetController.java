package com.nocountry.petadoptapi.controller;

import com.nocountry.petadoptapi.dto.PetDto;
import com.nocountry.petadoptapi.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @Autowired
    private PetService petService;

    // Obtener todos los pets (Devuelve una lista de PetDto)
    @GetMapping
    public List<PetDto> getAllPets() {
        return petService.getAllPets();
    }

    // Obtener un pet por ID (Devuelve un PetDto)
    @GetMapping("/{id}")
    public ResponseEntity<PetDto> getPetById(@PathVariable Integer id) {
        PetDto pet = petService.getPetById(id);
        return ResponseEntity.ok(pet);
    }

    // Crear un nuevo pet (Recibe y devuelve un PetDto)
    @PostMapping
    public ResponseEntity<PetDto> createPet(@RequestBody PetDto petDto) {
        PetDto savedPet = petService.savePet(petDto);
        return ResponseEntity.ok(savedPet);
    }

    // Actualizar un pet existente por su ID
    @PutMapping("/{id}")
    public ResponseEntity<PetDto> updatePet(@PathVariable Integer id, @RequestBody PetDto petDto) {
        PetDto updatedPet = petService.updatePet(id, petDto);
        return ResponseEntity.ok(updatedPet);
    }

    // Eliminar un pet por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePet(@PathVariable Integer id) {
        petService.deletePet(id);
        return ResponseEntity.noContent().build();
    }
}
