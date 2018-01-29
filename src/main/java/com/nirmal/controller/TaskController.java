package com.nirmal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirmal.domain.Task;
import com.nirmal.service.TaskService;

@RestController
@RequestMapping("/task")
public class TaskController {
	
	private TaskService taskService;
	
	public TaskController(TaskService taskService) {
		this.taskService=taskService;
	}
	
	@GetMapping(value = {"/listTask"})
	public Iterable<Task> listAllTask(){
		System.out.println("Got called");
		return taskService.list();
	}
	
	@PostMapping("/save")
	public Task save(@RequestBody Task task) {
		System.out.println("Received Object is "+task.toString());
		return taskService.save(task);
	}
	
	@PostMapping("/defaultData")
	public Task postDefaultData(@RequestBody Task task) {
		return taskService.save(task);
	}
	
}
