package com.spring.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.entity.Student;
import com.spring.service.IStudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://react-frontend011.s3-website.eu-north-1.amazonaws.com")
public class StudentOperationRestController {

	@Autowired
	private IStudentService studentService;
	
	@PostMapping("/add")
	public String addStudent(@RequestBody Student student) {
		return studentService.addStudent(student);
	}
	
	@GetMapping("/all")
	public List<Student> getAllStudents() {
		return studentService.getStudents();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteStudent(@PathVariable int id) {
		return studentService.deleteStudent(id);
	}
	
	@GetMapping("/{id}")
	public Student getStudentById(@PathVariable int id) {
		return studentService.getStudentById(id);
	}
	@PutMapping("/update/{id}")
	public String updateStudent(@RequestBody Student student, @PathVariable int id) {
		return studentService.updateStudent(student,id);
	}
}
