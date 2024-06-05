import { Link } from 'react-router-dom';
import profile from '../../../assets/image2.jpg';
import Navbar from "../../navbar/Navbar";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="top-controls">
            <div className="title">
               <h5>Site Administation</h5>
            </div>
            <hr className="mt-0"/>

            <div className="row justify-content-center">
                <div className="col">
                    <div className="card admin-card">
                        <Link to='/site-admin/course-management'>
                            <img src={profile} alt="Course Manage" className='card-img-top card-image'/>
                        </Link>
                        <div className="card-body">
                            <h5 className='card-title card-caption'>Course Management</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default AdminPage;
