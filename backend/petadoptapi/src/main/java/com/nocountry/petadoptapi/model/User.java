package com.nocountry.petadoptapi.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Set<Role> roles = new HashSet<>();
    @Enumerated(EnumType.STRING)
    private Role activeRole;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "adopter_profile_id", referencedColumnName = "id")
    private Adopter adopterProfile;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shelter_profile_id", referencedColumnName = "id")
    private Shelter shelterProfile;

    public User() {
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Role getActiveRole() {
        return activeRole;
    }

    public void setActiveRole(Role activeRole) {
        this.activeRole = activeRole;
    }

    public Adopter getAdopterProfile() {
        return adopterProfile;
    }

    public void setAdopterProfile(Adopter adopterProfile) {
        this.adopterProfile = adopterProfile;
    }

    public Shelter getShelterProfile() {
        return shelterProfile;
    }

    public void setShelterProfile(Shelter shelterProfile) {
        this.shelterProfile = shelterProfile;
    }
}
