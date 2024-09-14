package com.nocountry.petadoptapi.responses;

public record PetResponseImpl(
        Integer id,
        String name,
        String species,
        String breed,
        Integer age,
        String color,
        String size,
        String image,
        String description,
        Integer shelterId
) implements PetResponse {
}
