package com.igac.backend_igac.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import com.igac.backend_igac.services.*;

@RestController
@RequestMapping("/login")
public class AuthController {
    @Autowired
    UserService userService;
    
    @CrossOrigin(origins= "*")
    @PostMapping()
    public boolean login(@RequestParam String id, @RequestParam String password){
        return userService.login(id, password);
    }
}
