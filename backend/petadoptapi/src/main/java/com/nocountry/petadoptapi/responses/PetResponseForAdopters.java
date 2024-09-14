package com.nocountry.petadoptapi.responses;

public record PetResponseForAdopters(
        Integer id,
        String name,
        String species,
        String breed,
        Integer age,
        String color,
        String size,
        String image,
        String description,
        Integer shelterId,
        String shelterName,
        String shelterContact,
        Boolean isOnMyWishlist
) implements PetResponse {
}
