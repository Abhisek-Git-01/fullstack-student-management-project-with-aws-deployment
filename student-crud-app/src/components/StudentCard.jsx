import { Link } from "react-router-dom";

const StudentCard = ({ student, removeStudent }) => {
  return (
    <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
      <div className="card custom-card h-100">
        <div className="card-body">
          <h3 className="glow-text">
            {student.name}
          </h3>

          <p className="text-light">
            {student.email}
          </p>

          <p className="text-success">
            {student.course}
          </p>

          <div className="d-flex justify-content-between">
            <Link
              className="btn btn-outline-success"
              to={`/edit/${student.id}`}
            >
              Edit
            </Link>

            <button
              className="btn btn-danger"
              onClick={() => removeStudent(student.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;