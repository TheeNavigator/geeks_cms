import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import not_found from "../../../assets/courses.svg";
import Navbar from "../../navbar/Navbar";
import SearchBar from "../../search_bar/SearchBar";
import Spinner from "../../spinner/Spinner";
import ViewAs from "../../view_mode/ViewAs";
import AddCourseForm from "./AddCourseForm";
import "./CourseContent.css";

const CourseContent = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [loading, setLoading] = useState(false);

  const { courseId } = useParams();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true); //Start loading spinner
      const result = await axios.get(
        "http://localhost:8080/content-management/courses"
      );
      setTimeout(() => {
        setCourses(result.data);
        setFilteredCourses(result.data);
        setLoading(false); //Stop loading spinner
      }, 1500);
    } catch (error) {
      console.error("Error fetching courses: ", error);
      setLoading(false);
    }
  };

  const handleAddCourseClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="title">
        <h5>Courses</h5>
      </div>
      <hr className="mt-0" />

      <div className="actions">
        <button className="btn add-btn" onClick={handleAddCourseClick}>
          <i className="bi bi-plus"></i>Add Course
        </button>

        {showDialog && (
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Course</h5>
                </div>
                <AddCourseForm onClose={handleDialogClose} onSave={undefined} />
              </div>
            </div>
          </div>
        )}

        <SearchBar onSubmit={undefined} />
        <ViewAs onViewModeChange={undefined} />
      </div>

      {loading && (
        <div
          className="d-flex justify-content-center mt-4"
          style={{ marginTop: "20px" }}
        >
          <Spinner />
        </div>
      )}

      <div className="row mt-4">
        <div className="col text-center">
          {filteredCourses.length === 0 && !loading && (
            <div>
              <img src={not_found} alt="" width="120px" />
              <p className="mt-2">No course found</p>
            </div>
          )}
        </div>
      </div>

      {!loading && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {filteredCourses.map((course, index) => (
            <div className="col" key={index}>
              <div className={viewMode === "list" ? "card list-card" : "card"}>
                {viewMode === "list" ? (
                  <img
                    src={course.courseImageURL}
                    alt="Course Image"
                    className="card-img-top"
                    style={{ objectFit: "cover", cursor: "pointer" }}
                    onClick={() => console.log("hi")}
                  />
                ) : (
                  <RouterLink to="/modules">
                    <img
                      src={course.courseImageURL}
                      alt="Course Image"
                      className="card-img-top"
                      style={{
                        height: 150,
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={handleClick}
                    />
                  </RouterLink>
                )}
                <div className="card-body">
                  <h5
                    className={
                      viewMode === "list"
                        ? "card-title list-name"
                        : "card-title grid-name"
                    }
                  >
                    {course.name}
                  </h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseContent;
