package com.igac.backend_igac.controllers;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.igac.backend_igac.models.*;
import com.igac.backend_igac.services.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    
    @CrossOrigin(origins= "*")
    @GetMapping()
    public ArrayList<UserModel> getAllUsers(){
        return userService.getAllUsers();
    }

    @CrossOrigin(origins= "*")
    @PostMapping()
    public UserModel saveUser(@RequestBody UserModel user){
        return userService.saveUser(user);
    }

    @CrossOrigin(origins= "*")
    @DeleteMapping(path = "/{id}")
    public boolean deleteUser(@PathVariable("id") String id){
        if(userService.deleteUser(id)){
            return true;
        }else{
            return false;
        }
    }
}
