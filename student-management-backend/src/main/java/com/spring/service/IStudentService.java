package com.spring.service;

import java.util.List;

import com.spring.entity.Student;

public interface IStudentService {

	public String addStudent(Student student);
	public List<Student> getStudents();
	public String deleteStudent(int id);
	public String updateStudent(Student student, int id);
	public Student getStudentById(int id);
}
