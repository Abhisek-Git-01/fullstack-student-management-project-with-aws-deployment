import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStudentById,
  updateStudent,
} from "../services/StudentService";

const EditStudent = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const response = await getStudentById(id);

    setStudent(response.data);
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const updateStudentData = async (e) => {
    e.preventDefault();

    await updateStudent(student);

    navigate("/students");
  };

  return (
    <div className="page-container">

      <div className="glass-card animate__animated animate__fadeInUp">

        <h1 className="page-title">
          Edit Student
        </h1>

        <form onSubmit={updateStudentData}>

          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="modern-input"
          />

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="modern-input"
          />

          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Enter Course"
            className="modern-input"
          />

          <button className="save-btn">
            Update Student
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditStudent;