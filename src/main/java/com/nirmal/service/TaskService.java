package com.nirmal.service;

import com.nirmal.domain.Task;

public interface TaskService {
	
	Iterable<Task> list();
	
	Task save(Task task);
	
	Iterable<Task> update();

}
