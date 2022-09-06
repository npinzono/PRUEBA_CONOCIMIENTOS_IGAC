package com.igac.backend_igac.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.igac.backend_igac.repositories.UserRepository;
import com.igac.backend_igac.models.*;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;
    
    public boolean login(String id, String password){

        try {
            Optional<UserModel> user = userRepository.findById(id);
            if (user.isEmpty()) {
                return false;
            } else {
                String pass = user.get().getPassword();
                if(pass.equals(password)){
                    return true;
                }else{
                    return false;
                }
            }
        } catch (Exception e) {
            return false;
        }
    }

    public ArrayList<UserModel> getAllUsers(){
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    public UserModel saveUser(UserModel user){
        return userRepository.save(user);
    }

    public boolean deleteUser(String id){
        try {
            userRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
