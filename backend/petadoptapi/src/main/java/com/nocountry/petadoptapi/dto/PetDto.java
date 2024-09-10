package com.nocountry.petadoptapi.dto;

public record PetDto(
        String name,
        String species,
        String breed,
        Integer age,
        String color,
        String size,
        String image,
        String description,
        Integer shelterId
) {
}
