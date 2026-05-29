import axios from "axios";

const API_URL = "http://13.51.169.186:8080/api/students";

// GET ALL STUDENTS
export const getStudents = () =>
  axios.get(`${API_URL}/all`);


// ADD STUDENT
export const addStudent = (student) =>
  axios.post(`${API_URL}/add`, student);


// GET STUDENT BY ID
export const getStudentById = (id) =>
  axios.get(`${API_URL}/${id}`);


// UPDATE STUDENT
export const updateStudent = (student) =>
  axios.put(`${API_URL}/update/${student.id}`, student)


// DELETE STUDENT
export const deleteStudent = (id) =>
  axios.delete(`${API_URL}/delete/${id}`);