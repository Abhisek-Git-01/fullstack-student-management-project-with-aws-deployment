import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/StudentService";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const removeStudent = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div className="row">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          removeStudent={removeStudent}
        />
      ))}
    </div>
  );
};

export default StudentList;