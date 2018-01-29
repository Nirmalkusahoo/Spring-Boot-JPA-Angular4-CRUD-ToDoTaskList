package com.nirmal.service;

import org.springframework.stereotype.Service;

import com.nirmal.domain.Task;
import com.nirmal.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {
	
	private TaskRepository taskRepository;
	
	public TaskServiceImpl(TaskRepository taskRepository) {
		this.taskRepository=taskRepository;
	}
	
	
	@Override
	public Iterable<Task> list() {
		return taskRepository.findAll();
	}


	@Override
	public Task save(Task task) {
    	System.out.println("Receviced Object in TaskServiceImpl "+task.toString());
		return taskRepository.save(task);
	}


	@Override
	public Iterable<Task> update() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
