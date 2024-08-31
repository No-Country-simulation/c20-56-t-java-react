package com.nocountry.petadoptapi.service;

import com.nocountry.petadoptapi.dto.ShelterDto;
import com.nocountry.petadoptapi.model.Role;
import com.nocountry.petadoptapi.model.Shelter;
import com.nocountry.petadoptapi.model.User;
import com.nocountry.petadoptapi.repository.ShelterRepository;
import com.nocountry.petadoptapi.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Set;

@Service
public class ShelterService {
    private final ShelterRepository shelterRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public ShelterService(ShelterRepository shelterRepository, UserRepository userRepository, UserService userService, JwtUtil jwtUtil) {
        this.shelterRepository = shelterRepository;
        this.userRepository = userRepository;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    public Shelter getShelter() {
        UserDetails userDetails = userService.getAuthenticatedUser();
        User user = (User) userDetails;
        if (user.getShelterProfile() == null) {
            throw new IllegalStateException("User has no shelter profile.");
        }
        return user.getShelterProfile();
    }

    public String saveShelter(ShelterDto shelterDto) {
        UserDetails userDetails = userService.getAuthenticatedUser();
        User user = (User) userDetails;

        if (user.getShelterProfile() != null) {
            throw new IllegalStateException("User already has a shelter profile.");
        }

        Shelter shelter = new Shelter();
        shelter.setShelterName(shelterDto.shelterName());
        shelter.setAddress(shelterDto.address());
        shelter.setContact(shelterDto.contact());
        shelter.setDescription(shelterDto.description());
        user.setShelterProfile(shelter);
        Set<Role> roles = user.getRoles();
        roles.add(Role.SHELTER);
        user.setRoles(roles);
        user.setActiveRole(Role.SHELTER);
        userRepository.save(user);
        return jwtUtil.generateToken(user);
    }

    public Shelter updateShelter(ShelterDto shelterDto) {
        UserDetails userDetails = userService.getAuthenticatedUser();
        User user = (User) userDetails;
        Integer shelterId = user.getShelterProfile().getId();

        if (user.getShelterProfile() == null || !Objects.equals(user.getAdopterProfile().getId(), shelterId)) {
            throw new IllegalStateException("User does not have a shelter profile or the profile ID does not match.");
        }

        Shelter shelter = shelterRepository.findById(shelterId)
                .orElseThrow(() -> new IllegalArgumentException("Shelter not found with ID: " + shelterId));

        shelter.setShelterName(shelterDto.shelterName());
        shelter.setAddress(shelterDto.address());
        shelter.setContact(shelterDto.contact());
        shelter.setDescription(shelterDto.description());

        return shelterRepository.save(shelter);
    }
}
