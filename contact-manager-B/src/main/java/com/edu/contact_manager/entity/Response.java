package com.edu.contact_manager.entity;

import java.util.List;

import lombok.Data;

@Data
public class Response<T> {
	private String message;
	private T data;
	private int httpStatusCode;

}

