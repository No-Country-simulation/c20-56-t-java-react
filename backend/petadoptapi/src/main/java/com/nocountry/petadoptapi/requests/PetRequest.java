package com.nocountry.petadoptapi.requests;

public record PetRequest(
        String name,
        String species,
        String breed,
        Integer age,
        String color,
        String size,
        String image,
        String description
) {
}
