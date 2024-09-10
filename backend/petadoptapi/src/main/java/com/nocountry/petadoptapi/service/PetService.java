package com.nocountry.petadoptapi.service;

import com.nocountry.petadoptapi.dto.PetDto;
import com.nocountry.petadoptapi.model.Pet;
import com.nocountry.petadoptapi.model.Shelter;
import com.nocountry.petadoptapi.repository.PetRepository;
import com.nocountry.petadoptapi.repository.ShelterRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PetService {

    private final PetRepository petRepository;
    private final ShelterRepository shelterRepository;

    public PetService(PetRepository petRepository, ShelterRepository shelterRepository) {
        this.petRepository = petRepository;
        this.shelterRepository = shelterRepository;
    }

    // Obtener todos los pets y convertirlos a DTO
    public List<PetDto> getAllPets() {
        return petRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    // Obtener un pet por ID y convertirlo a DTO
    public PetDto getPetById(Integer id) {
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found"));
        return convertToDto(pet);
    }

    // Guardar un nuevo pet utilizando un DTO
    public PetDto savePet(PetDto petDto) {
        Pet pet = convertToEntity(petDto);
        Pet savedPet = petRepository.save(pet);
        return convertToDto(savedPet);
    }

    // Actualizar un pet existente por su ID
    public PetDto updatePet(Integer id, PetDto petDto) {
        Pet existingPet = petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found"));

        // Actualizar los campos del pet existente
        existingPet.setName(petDto.name());
        existingPet.setSpecies(petDto.species());
        existingPet.setBreed(petDto.breed());
        existingPet.setAge(petDto.age());
        existingPet.setColor(petDto.color());
        existingPet.setSize(petDto.size());
        existingPet.setImage(petDto.image());
        existingPet.setDescription(petDto.description());

        Shelter shelter = shelterRepository.findById(petDto.shelterId())
                .orElseThrow(() -> new RuntimeException("Shelter not found"));
        existingPet.setShelter(shelter);

        Pet updatedPet = petRepository.save(existingPet);
        return convertToDto(updatedPet);
    }

    // Eliminar un pet por su ID
    public void deletePet(Integer id) {
        petRepository.deleteById(id);
    }

    // Conversión de Entity a DTO
    private PetDto convertToDto(Pet pet) {
        return new PetDto(
                pet.getName(),
                pet.getSpecies(),
                pet.getBreed(),
                pet.getAge(),
                pet.getColor(),
                pet.getSize(),
                pet.getImage(),
                pet.getDescription(),
                pet.getShelter().getId()
        );
    }

    // Conversión de DTO a Entity
    private Pet convertToEntity(PetDto petDto) {
        Pet pet = new Pet();
        pet.setName(petDto.name());
        pet.setSpecies(petDto.species());
        pet.setBreed(petDto.breed());
        pet.setAge(petDto.age());
        pet.setColor(petDto.color());
        pet.setSize(petDto.size());
        pet.setImage(petDto.image());
        pet.setDescription(petDto.description());

        Shelter shelter = shelterRepository.findById(petDto.shelterId())
                .orElseThrow(() -> new RuntimeException("Shelter not found"));
        pet.setShelter(shelter);

        return pet;
    }
}