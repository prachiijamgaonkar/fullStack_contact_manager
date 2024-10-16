package com.edu.contact_manager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.contact_manager.entity.User;
import com.edu.contact_manager.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User addUser(User user) {
		return userRepository.save(user);
		
	}

	public User updateUser(User user) {
		    return userRepository.save(user);
	}
	public User deleteUserById(int id) {
		User user = userRepository.findById(id).get();
		 userRepository.deleteById(id);
		 return user;
	}
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}
	public User findUserById(int id) {
		return userRepository.findById(id).get();
		
	}
}
