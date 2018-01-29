package com.nirmal.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nirmal.domain.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

}
