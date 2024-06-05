import { Link as RouterLink } from 'react-router-dom';
import iconImage from '../../../assets/hacker.jpeg';
import Navbar from "../../navbar/Navbar";
import "./CourseManagement.css";

const CourseManagement = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title">
          <h5>Course Management</h5>
        </div>
        <hr className="mt-0" />

        <div className="row justify-content-center">
            <div className="col-xs-12 col-md-4 mb-3">
              <div className="card admin-card">
              <RouterLink to="/site-admin/course-management/modules" className="image-link">
                  <img src={iconImage} alt="Course Management" className='card-img-top card-image'/>
                </RouterLink>
                <div className="card-body">
                  <h5 className='card-title'>
                    <span className="card-caption">Modules</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-4 mb-3">
              <div className="card admin-card">
                <RouterLink to='/site-admin/course-management/courses'>
                  <img src={iconImage} alt="Course Management" className='card-img-top card-image'/>
                </RouterLink>
                <div className="card-body">
                  <h5 className='card-title'>
                    <span className="card-caption">Courses</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default CourseManagement;
