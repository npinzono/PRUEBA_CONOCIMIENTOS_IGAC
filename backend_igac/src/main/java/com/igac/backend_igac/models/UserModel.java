package com.igac.backend_igac.models;


import java.sql.Timestamp;

import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "users")
public class UserModel {

    @Id
    @Column(unique = true, nullable = false)
    private String id;

    @Column(name = "name", nullable = false, length = 60)
    private String name;

    @Column(name = "email", nullable = false, length = 45)
    private String email;

    @Column(name = "password", nullable = false, length = 150)
    private String password;

    @Column(name = "status", nullable = false, length = 1)
    private int status;
    
    @CreationTimestamp
    @Column(name = "created_date", nullable = false, updatable = false)
    private Timestamp created_date;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
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
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public Timestamp getCreated_date() {
        return created_date;
    }
    public void setCreated_date(Timestamp  created_date) {
        this.created_date = created_date;
    }
}
