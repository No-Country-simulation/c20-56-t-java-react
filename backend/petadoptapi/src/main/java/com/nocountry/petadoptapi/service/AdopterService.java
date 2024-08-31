package com.nocountry.petadoptapi.service;

import com.nocountry.petadoptapi.dto.AdopterDto;
import com.nocountry.petadoptapi.model.Adopter;
import com.nocountry.petadoptapi.model.Role;
import com.nocountry.petadoptapi.model.User;
import com.nocountry.petadoptapi.repository.AdopterRepository;
import com.nocountry.petadoptapi.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class AdopterService {
    private final AdopterRepository adopterRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AdopterService(AdopterRepository adopterRepository, UserRepository userRepository, UserService userService, JwtUtil jwtUtil) {
        this.adopterRepository = adopterRepository;
        this.userRepository = userRepository;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    public String saveAdopter(AdopterDto adopterDto) {
        UserDetails userDetails = userService.getAuthenticatedUser();
        User user = (User) userDetails;

        if (user.getAdopterProfile() != null) {
            throw new IllegalStateException("User already has an adopter profile.");
        }

        Adopter adopter = new Adopter();
        adopter.setFirstName(adopterDto.firstName());
        adopter.setLastName(adopterDto.lastName());
        adopter.setAddress(adopterDto.address());
        adopter.setContact(adopterDto.contact());
        adopter.setDescription(adopterDto.description());
        adopter = adopterRepository.save(adopter);
        user.setAdopterProfile(adopter);
        Set<Role> roles = user.getRoles();
        roles.add(Role.ADOPTER);
        user.setRoles(roles);
        user.setActiveRole(Role.ADOPTER);
        userRepository.save(user);
        return jwtUtil.generateToken(user);
    }

    public Adopter updateAdopter(AdopterDto adopterDto) {
        UserDetails userDetails = userService.getAuthenticatedUser();
        User user = (User) userDetails;
        Integer adopterId = user.getAdopterProfile().getId();

        if (user.getAdopterProfile() == null || user.getAdopterProfile().getId() != adopterId) {
            throw new IllegalStateException("User does not have an adopter profile or the profile ID does not match.");
        }

        Adopter adopter = adopterRepository.findById(adopterId)
                .orElseThrow(() -> new IllegalArgumentException("Adopter not found with ID: " + adopterId));

        adopter.setFirstName(adopterDto.firstName());
        adopter.setLastName(adopterDto.lastName());
        adopter.setAddress(adopterDto.address());
        adopter.setContact(adopterDto.contact());
        adopter.setDescription(adopterDto.description());

        return adopterRepository.save(adopter);
    }
}
