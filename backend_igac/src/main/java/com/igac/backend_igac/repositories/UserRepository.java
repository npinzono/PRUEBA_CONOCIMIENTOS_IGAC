package com.igac.backend_igac.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.igac.backend_igac.models.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, String>{

    UserModel findByEmailAndPassword(String email, String password);

    UserModel findByEmail(String email);
    
}
