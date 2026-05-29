import { useState } from "react";
import { addStudent } from "../services/StudentService";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student);
      alert("Student Added");

      setStudent({
        name: "",
        email: "",
        course: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card custom-card animate__animated animate__zoomIn">
      <div className="card-body">
        <h2 className="text-center glow-text mb-4">
          Add Student
        </h2>

        <form onSubmit={saveStudent}>
          <input
            type="text"
            className="form-control mb-3 custom-input"
            placeholder="Enter Name"
            name="name"
            value={student.name}
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control mb-3 custom-input"
            placeholder="Enter Email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control mb-3 custom-input"
            placeholder="Enter Course"
            name="course"
            value={student.course}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">
            Save Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;