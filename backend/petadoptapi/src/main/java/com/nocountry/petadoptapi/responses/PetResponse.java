package com.nocountry.petadoptapi.responses;

public interface PetResponse {
    Integer id();
    String name();
    String species();
    String breed();
    Integer age();
    String color();
    String size();
    String image();
    String description();
}
