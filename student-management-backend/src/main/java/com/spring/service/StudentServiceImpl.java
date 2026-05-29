package com.spring.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.entity.Student;
import com.spring.repository.StudentRepository;
@Service
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private StudentRepository studentRepository;


	@Override
	public String addStudent(Student student) {
		studentRepository.save(student);
		return "Student added successfully";
	}


	@Override
	public List<Student> getStudents() {
		
		return studentRepository.findAll();
	}


	@Override
	public String deleteStudent(int id) {
		 studentRepository.deleteById(id);
		 return "Student deleted successfully";
	}


	@Override
	public String updateStudent(Student student, int id) {
		Student existingStudent = studentRepository.findById(student.getId()).orElseThrow(() -> new RuntimeException("Student not found with id: " + student.getId()));
		existingStudent.setName(student.getName());
		existingStudent.setEmail(student.getEmail());
		existingStudent.setCourse(student.getCourse());
		studentRepository.save(existingStudent);
		return "Student updated successfully";
	}


	@Override
	public Student getStudentById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	

}