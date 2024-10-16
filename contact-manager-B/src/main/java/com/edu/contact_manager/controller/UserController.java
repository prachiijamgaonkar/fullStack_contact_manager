package com.edu.contact_manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.edu.contact_manager.entity.Response;
import com.edu.contact_manager.entity.User;
import com.edu.contact_manager.repository.UserRepository;
import com.edu.contact_manager.service.UserService;

@CrossOrigin(origins = {"http://localhost:3000", "http://192.168.0.105:3000"})
//@CrossOrigin(origins = "http://localhost:3000") // Allow requests from this origin


@RestController
public class UserController {
	
	@Autowired
	protected UserRepository userRepository;
	
	@Autowired
	protected UserService userService;
	
	@PostMapping(value = "/users")
	protected ResponseEntity<Response<User>> addUser(@RequestBody User user) {
		User addedUser = userService.addUser(user);
		Response<User> response = new Response<>();
		response.setMessage("User added");
		response.setHttpStatusCode(HttpStatus.CREATED.value());
		response.setData(addedUser);
		return new ResponseEntity<Response<User>>(response, HttpStatus.CREATED);
	}
	
	@PutMapping(value="/users/{id}")
	protected ResponseEntity<Response<User>> updateUser(@PathVariable(name = "id")int Id,@RequestBody User user) {
		User updatedUser = userService.updateUser(user);
		Response<User> response = new Response<>();
		response.setMessage("use updated");
		response.setHttpStatusCode(HttpStatus.CREATED.value());
		response.setData(updatedUser);
		return new ResponseEntity<Response<User>>(response,HttpStatus.CREATED);
	}
	
	@DeleteMapping(value="/user/{id}")
	protected ResponseEntity<Response<User>> deleteUser(@PathVariable(name = "id")int Id){
		User deletedUser = userService.deleteUserById(Id);
		Response<User> response = new Response<>();
		response.setMessage("User deleted");
		response.setHttpStatusCode(HttpStatus.OK.value());
		response.setData(deletedUser);
		return new ResponseEntity<Response<User>>(response, HttpStatus.OK);
		
	}
	@GetMapping(value="/users")
	protected ResponseEntity<Response<List<User>>> findAllUsers(){
		List<User> users = userService.findAllUsers();
		Response<List<User>> response = new Response<>();
		if(users.size()>0) {
			response.setMessage("Users Found");
			response.setHttpStatusCode(HttpStatus.OK.value());
			response.setData(users);
			return new ResponseEntity<Response<List<User>>>(response, HttpStatus.OK);
		}
		else {
			response.setMessage("Users Not Found");
			response.setHttpStatusCode(HttpStatus.FOUND.value());
			response.setData(users);
			return new ResponseEntity<Response<List<User>>>(response, HttpStatus.NOT_FOUND);
		}
 	}
//	@GetMapping(value="/user/{id}")
//	protected ResponseEntity<Response<User>> findUserById(@PathVariable(name="id")int Id){
//	//protected User findUserById(@PathVariable(name="id")int Id){
//
//		User user = userService.findUserById(Id);
//		Response<User> response = new Response<>();
//		if(user != null) {
//		response.setMessage("User Found");
//		response.setHttpStatusCode(HttpStatus.FOUND.value());
//		response.setData(user);
//		return new ResponseEntity<Response<User>>(response, HttpStatus.FOUND);
//		}
//		else {
//			response.setMessage("User Not Found");
//			response.setHttpStatusCode(HttpStatus.FOUND.value());
//			response.setData(user);
//			return new ResponseEntity<Response<User>>(response, HttpStatus.NOT_FOUND);
//		}
//		//return user;
//	}
	@GetMapping(value="/user/{id}")
	protected User findUserById(@PathVariable(name="id")int Id){
		return userService.findUserById(Id);
	}

}
