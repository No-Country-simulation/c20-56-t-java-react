package com.nocountry.petadoptapi.responses;

import java.util.Set;

public record PetResponseForShelter(
        Integer id,
        String name,
        String species,
        String breed,
        Integer age,
        String color,
        String size,
        String image,
        String description,
        Integer numberOfInterestedAdopters,
        Set<AdopterResponse> adopters
) implements PetResponse {
}
